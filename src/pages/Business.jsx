// src/pages/Business.jsx
import { useState } from "react";

export default function Business() {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile && (uploadedFile.name.endsWith(".csv") || uploadedFile.name.endsWith(".xlsx") || uploadedFile.name.endsWith(".xls"))) {
      setFile(uploadedFile);
    } else {
      alert("Please upload a valid .csv or Excel file");
      e.target.value = null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !businessName || !contactEmail) {
      alert("Please fill in all fields and select a file");
      return;
    }

    setIsUploading(true);

    try {
      // Create FormData for file upload
      const formData = new FormData();
      formData.append('file', file);
      formData.append('businessName', businessName);
      formData.append('contactEmail', contactEmail);

      // Send to backend server
      const response = await fetch('/api/upload-business-file', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        setFile(null);
        setBusinessName("");
        setContactEmail("");
      } else {
        throw new Error(result.error || 'Upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to send file. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          <span className="text-slate-900">Partner with </span>
          <span className="text-brand-600">Rent It</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          Reach new customers, earn more from your existing inventory, and
          contribute to a smarter, sustainable rental economy.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#upload"
            className="rounded-full bg-brand-600 text-white px-6 py-3 text-base font-semibold hover:bg-brand-500 transition"
          >
            Upload Inventory
          </a>
          <a
            href="/contact"
            className="rounded-full border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 hover:bg-slate-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div className="rounded-2xl shadow-lg border border-slate-200 p-8 bg-white">
          <h3 className="text-xl font-semibold mb-3 text-slate-900">
            Reach New Customers
          </h3>
          <p className="text-slate-600">
            Expand your reach with Rent It: showcase underused inventory, attract fresh audiences, and connect with customers actively searching for rentals—unlocking new revenue streams while growing your brand visibility.
          </p>
        </div>
        <div className="rounded-2xl shadow-lg border border-slate-200 p-8 bg-white">
          <h3 className="text-xl font-semibold mb-3 text-slate-900">
            Bulk Uploads
          </h3>
          <p className="text-slate-600">
            Simplify listings with Rent It’s bulk upload: easily import multiple items at once, save time, and quickly showcase your full inventory—helping you reach more customers faster and more efficiently.
          </p>
        </div>
        <div className="rounded-2xl shadow-lg border border-slate-200 p-8 bg-white">
          <h3 className="text-xl font-semibold mb-3 text-slate-900">
            Earn More
          </h3>
          <p className="text-slate-600">
            Boost your profits with Rent It: turn idle items into steady income, set your own prices, and maximize returns by tapping into a growing market of eager renters.
          </p>
        </div>
      </section>

     {/* CSV Upload (styled like feature card) */}
<section id="upload" className="px-6 py-20 bg-white">
  <div className="max-w-4xl mx-auto rounded-[2rem] bg-gradient-to-r from-purple-600 to-indigo-600 shadow-xl p-12 flex flex-col items-center text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
      Upload Your Inventory
    </h2>
    <p className="text-lg text-white/90 mb-10 max-w-xl">
      Upload a <code>.csv</code> or Excel file with your items to get started quickly.
    </p>

    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-6 w-full max-w-md"
    >
      {/* Business Information */}
      <div className="w-full space-y-4">
        <input
          type="text"
          placeholder="Business Name"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          required
        />
        <input
          type="email"
          placeholder="Contact Email"
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          required
        />
      </div>
      {/* Styled file input */}
      <label className="cursor-pointer bg-white text-brand-600 font-semibold px-6 py-2 rounded-full shadow hover:bg-slate-100 transition">
        Choose File
        <input
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {file && (
        <span className="text-sm text-white bg-black/30 rounded-full px-4 py-1">
          {file.name}
        </span>
      )}

      {/* Upload button */}
      <button
        type="submit"
        disabled={isUploading}
        className="rounded-full bg-white text-brand-600 px-8 py-3 font-semibold hover:bg-slate-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isUploading ? 'Sending...' : 'Send to Email'}
      </button>
    </form>
  </div>
</section>



      {/* FAQ */}
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <details className="rounded-lg border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold text-slate-800">
              How do I format the CSV file?
            </summary>
            <p className="mt-2 text-slate-600">
              Include columns like Item Name, Category, Price, and Description.
              You can always edit details later.
            </p>
          </details>
          <details className="rounded-lg border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold text-slate-800">
              Can I edit items after uploading?
            </summary>
            <p className="mt-2 text-slate-600">
              Yes, all items can be updated or removed from your dashboard once
              uploaded.
            </p>
          </details>
          <details className="rounded-lg border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold text-slate-800">
              What fees apply to business listings?
            </summary>
            <p className="mt-2 text-slate-600">
              Businesses follow the same transparent fee structure as individual
              lenders: 6% platform fee on each transaction.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
