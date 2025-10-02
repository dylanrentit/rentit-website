# Gmail Auto-Flagging Setup for Business Uploads

## Quick Setup (Recommended)

### Option 1: Import Pre-configured Filters
1. **Download the filter file**: `gmail-filter-setup.xml` (already created in your project)
2. **Go to Gmail Settings**:
   - Open Gmail → Click the gear icon → "See all settings"
   - Go to "Filters and Blocked Addresses" tab
3. **Import filters**:
   - Click "Import filters"
   - Select the `gmail-filter-setup.xml` file
   - Choose which filters to apply
   - Click "Create filters"

### Option 2: Manual Setup

#### Step 1: Create "Business Uploads" Label
1. In Gmail, click "More" in the left sidebar
2. Click "Create new label"
3. Name it: **Business Uploads**
4. Click "Create"

#### Step 2: Create Filter for Subject Line
1. Gmail Settings → "Filters and Blocked Addresses"
2. Click "Create a new filter"
3. **Filter criteria**:
   - Subject: `[Business Upload]`
   - Has attachment: ✅ Yes
4. **Actions**:
   - ✅ Apply the label: "Business Uploads"
   - ✅ Star it
   - ✅ Mark as important
   - ✅ Never send it to Spam
5. Click "Create filter"

#### Step 3: Create Filter for Sender
1. Create another filter with:
   - From: `business-uploads@rentit.com`
2. **Actions**:
   - ✅ Apply the label: "Business Uploads"
   - ✅ Mark as important
   - ✅ Never send it to Spam

## What These Filters Do

✅ **Auto-label emails** with "Business Uploads" label
✅ **Star important uploads** for quick identification
✅ **Mark as important** so they appear in Priority Inbox
✅ **Never mark as spam** ensures delivery
✅ **Keep unread** so you notice new uploads
✅ **Filter by subject** catches emails with "[Business Upload]" prefix
✅ **Filter by sender** catches emails from business-uploads@rentit.com

## Testing the Setup

1. **Send a test upload** through your business form
2. **Check Gmail** for the new email
3. **Verify it's labeled** with "Business Uploads"
4. **Check if it's starred** and marked important

## Advanced Options

### Custom Notifications
Add these actions to get notified:
- Forward to another email
- Send SMS notifications (if configured)
- Add to Google Calendar

### Organize by Business Name
Create additional filters for specific businesses:
- Subject contains: `[Business Upload] Acme Corp`
- Apply label: "Business Uploads/Acme Corp"

### Priority Levels
Create filters for different file types:
- Subject contains: `.xlsx` → Label: "Business Uploads/Excel Files"
- Subject contains: `.csv` → Label: "Business Uploads/CSV Files"

## Troubleshooting

**Filter not working?**
- Check that EmailJS is sending emails with correct subject format
- Verify the sender email matches your filter criteria
- Test with a manual email first

**Missing emails?**
- Check spam folder
- Verify EmailJS service is working
- Check Gmail delivery settings

**Need to modify filters?**
- Go to Gmail Settings → Filters and Blocked Addresses
- Find your business upload filters
- Click "edit" to modify criteria or actions