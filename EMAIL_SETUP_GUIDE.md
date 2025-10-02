# Email Setup Guide for Business File Uploads (Backend Solution)

## ✅ FIXED: Gmail API Scope Issue

The Gmail API scope issue has been resolved by implementing a Node.js backend that handles email sending directly using Nodemailer instead of EmailJS.

## Gmail App Password Setup (Required)

### 1. Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Select "Security" → "2-Step Verification"
3. Follow the setup process

### 2. Generate App Password
1. In Google Account Security settings
2. Select "App passwords"
3. Choose "Mail" and "Other (Custom name)"
4. Name it "RentIt Business Uploads"
5. Copy the 16-character password

### 3. Update Environment Variables
Update your `.env.local` file with your Gmail credentials:

```env
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_APP_PASSWORD=your_16_character_app_password
BUSINESS_EMAIL=business-uploads@rentit.com
PORT=3001
```

### 4. Running the Application

**Option 1: Run both frontend and backend together**
```bash
npm run dev:full
```

**Option 2: Run separately**
```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
npm run dev
```

### 5. Email Template (Automatic)
The backend automatically generates emails with this format:

**Subject**: `[Business Upload] {BusinessName} - Inventory File`
**From**: `"{BusinessName}" <your_gmail_address@gmail.com>`
**Reply-To**: `{ContactEmail}`
**Attachment**: Original uploaded file

**Email Content**:
```html
<h2>New Business Inventory Upload</h2>
<p><strong>Business Name:</strong> {BusinessName}</p>
<p><strong>Contact Email:</strong> {ContactEmail}</p>
<p><strong>File Name:</strong> {FileName}</p>
<p><strong>File Size:</strong> {FileSize} KB</p>
<p><strong>Upload Date:</strong> {UploadDate}</p>

<hr>
<p><em>This email was automatically generated from the Rent It business upload form.</em></p>
```

### 5. Gmail Auto-Flagging Setup

#### Option A: Filter by Subject Line
1. In Gmail, go to Settings > Filters and Blocked Addresses
2. Create a new filter with:
   - **Subject**: `[Business Upload]`
   - **Actions**:
     - Apply label: "Business Uploads"
     - Mark as important
     - Never send to Spam

#### Option B: Filter by From Address (Recommended)
1. Set up a specific email address: `business-uploads@rentit.com`
2. Create Gmail filter:
   - **From**: `business-uploads@rentit.com`
   - **Actions**:
     - Apply label: "Business Uploads"
     - Mark as important
     - Star it

#### Option C: Advanced Filtering
Create a filter with:
- **Subject**: contains "Business Upload"
- **From**: contains "rentit"
- **Has attachment**: Yes

## Features Implemented

✅ **Excel & CSV Support**: Accepts .csv, .xlsx, and .xls files
✅ **Business Information**: Captures business name and contact email
✅ **Email Integration**: Sends files via EmailJS with base64 encoding
✅ **Gmail Auto-Flagging**: Uses specific subject line format for filtering
✅ **Loading States**: Shows "Sending..." during upload process
✅ **Form Validation**: Requires all fields before submission
✅ **Error Handling**: Displays appropriate error messages

## Testing
1. Add your EmailJS credentials to `.env.local`
2. Run `npm run dev`
3. Navigate to `/business` page
4. Fill out the form and upload a test file
5. Check your configured email inbox for the upload

## File Size Limitations
- EmailJS has a 50KB limit for attachments
- For larger files, consider implementing direct cloud storage integration