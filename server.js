// Simple Node.js server for handling email uploads
import express from 'express';
import multer from 'multer';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['text/csv', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
    if (allowedTypes.includes(file.mimetype) || file.originalname.match(/\.(csv|xlsx|xls)$/)) {
      cb(null, true);
    } else {
      cb(new Error('Only CSV and Excel files are allowed'), false);
    }
  }
});

// Configure nodemailer
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD // Use App Password, not regular password
  }
});

// Upload endpoint
app.post('/api/upload-business-file', upload.single('file'), async (req, res) => {
  try {
    const { businessName, contactEmail } = req.body;
    const file = req.file;

    if (!file || !businessName || !contactEmail) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Email configuration for Gmail auto-flagging
    const mailOptions = {
      from: `"${businessName}" <${process.env.EMAIL_USER}>`,
      to: process.env.BUSINESS_EMAIL || 'business-uploads@rentit.com',
      replyTo: contactEmail,
      subject: `[Business Upload] ${businessName} - Inventory File`,
      html: `
        <h2>New Business Inventory Upload</h2>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Contact Email:</strong> ${contactEmail}</p>
        <p><strong>File Name:</strong> ${file.originalname}</p>
        <p><strong>File Size:</strong> ${Math.round(file.size / 1024)} KB</p>
        <p><strong>Upload Date:</strong> ${new Date().toLocaleString()}</p>

        <hr>
        <p><em>This email was automatically generated from the Rent It business upload form.</em></p>
      `,
      attachments: [
        {
          filename: file.originalname,
          content: file.buffer
        }
      ]
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: `File "${file.originalname}" uploaded and sent successfully!`
    });

  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({
      error: 'Failed to send file. Please try again.',
      details: error.message
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});