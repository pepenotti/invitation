# 🎉 Birthday Party Invitation - Google Sheets Setup

## Why Google Sheets is Perfect for You:

✅ **Real-time updates** - See RSVPs instantly  
✅ **Share with your wife** - Both can view the same data  
✅ **One person per row** - Perfect for venue/catering  
✅ **Export anytime** - Download as Excel whenever needed  
✅ **100% Free** - No limits on submissions  
✅ **Secure** - Only you control who can view the sheet  

---

## � Security Notes (Important!)

**What the script CAN do:**
- ✅ Write data to the ONE spreadsheet where you install it
- ✅ Format that spreadsheet (colors, headers, etc.)

**What the script CANNOT do:**
- ❌ Access any other spreadsheets in your Google Drive
- ❌ Read or modify any other files
- ❌ Send emails or access your Gmail
- ❌ Share your data with anyone

**The permission warning** you see is Google's standard warning for ANY script. In reality, this script only touches the single spreadsheet where you install it.

---

## 📋 Setup Instructions (5 minutes)

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"+ Blank"** to create a new spreadsheet
3. Name it **"Birthday Party RSVPs"** (or whatever you prefer)
4. Keep this tab open

### Step 2: Set Up Google Apps Script

1. In your Google Sheet, click **Extensions → Apps Script**
2. Delete any existing code in the editor
3. Open the file `google-apps-script.js` from this project folder
4. **Copy ALL the code** from `google-apps-script.js`
5. **Paste it** into the Apps Script editor
6. Click the **💾 Save** icon (or Ctrl+S / Cmd+S)
7. Name your project (e.g., "Birthday RSVP Handler")

### Step 3: Deploy the Script

1. Click **Deploy → New deployment**
2. Click the **gear icon ⚙️** next to "Select type"
3. Choose **"Web app"**
4. Configure the deployment:
   - **Description:** "Birthday RSVP Form"
   - **Execute as:** "Me (your email)"
   - **Who has access:** "Anyone"
5. Click **Deploy**
6. Click **Authorize access**
7. Choose your Google account
8. Click **Advanced** → **Go to [your project name] (unsafe)**
   - *Don't worry - this is YOUR script, it's completely safe*
9. Click **Allow**
10. **COPY THE WEB APP URL** (it looks like: `https://script.google.com/macros/s/XXXXX/exec`)

### Step 4: Connect the Form to Your Spreadsheet

1. Open `script.js` in this project folder
2. Find this line at the top:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
   ```
3. Replace `YOUR_GOOGLE_SCRIPT_URL_HERE` with the URL you just copied
4. Save the file

**Example:**
```javascript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxXXXXXXXXXX/exec';
```

### Step 5: Customize Party Details (Optional)

Edit `script.js` and find the bottom section. Uncomment and customize:

```javascript
// Uncomment and customize this line:
customizePartyDetails(
  "Emma",                          // Child's name
  "Saturday, April 15, 2026",      // Date
  "2:00 PM - 5:00 PM",            // Time
  "123 Main St, Your City"         // Location
);
```

### Step 6: Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Upload these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Go to **Settings → Pages**
4. Under "Source", select **main** branch
5. Click **Save**
6. Your invitation will be live at: `https://yourusername.github.io/repository-name`

---

## ✅ Testing Your Setup

1. Open your invitation page (locally or on GitHub Pages)
2. Fill out the form with test data (add a family with 2-3 people)
3. Submit the form
4. Check your Google Sheet - you should see the data appear immediately!
5. Each person should be on their own row ✨
6. If it works, share the link with parents! 🎈

---

## 👥 Sharing with Your Wife

1. Open your Google Sheet
2. Click the **Share** button (top right)
3. Enter your wife's email
4. Choose **"Editor"** (so she can view/modify) or **"Viewer"** (view only)
5. Click **Send**
6. Now you both can see RSVPs in real-time!

---

## 📊 How to Use the Spreadsheet

### What You'll See:
Each row = one person attending
- **Column A:** Timestamp
- **Column B:** Group/Family Name
- **Column C:** Full Name (one person)
- **Column D:** Type (Adult or Child)
- **Column E:** Email (shown only on first person of each group)
- **Column F:** Notes (shown only on first person of each group)

### Export to Excel:
1. In Google Sheets: **File → Download → Microsoft Excel (.xlsx)**
2. Send to venue, caterer, or keep for your records!

---

## 🎨 Customization Tips

### Change Colors
Edit `styles.css` and look for gradient values:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```
Try: [coolors.co](https://coolors.co) or [uigradients.com](https://uigradients.com)

### Add Your Own Images
Add a party theme image to the header in `index.html`

### Modify Form Fields
Edit `index.html` to add/remove fields as needed

---

## 🆘 Troubleshooting

**Problem:** Form says "Configuration error: Google Sheets not set up"
- **Solution:** Make sure you updated `GOOGLE_SCRIPT_URL` in `script.js` with your deployment URL

**Problem:** Form submits but nothing appears in Google Sheet
- **Solution:** Check the Apps Script deployment settings - "Who has access" must be "Anyone"
- **Solution:** Make sure you authorized the script properly during deployment

**Problem:** "Authorization required" error during deployment
- **Solution:** Click "Advanced" → "Go to [project name]" → "Allow"
- **Solution:** This is normal - you're authorizing YOUR OWN script

**Problem:** See the permission warning about spreadsheet access
- **Solution:** This is normal. The script ONLY accesses the one spreadsheet where it's installed, nothing else

**Problem:** GitHub Pages shows 404 error
- **Solution:** Make sure you uploaded all files and enabled GitHub Pages in repository settings
- **Solution:** Wait a few minutes - GitHub Pages can take 5-10 minutes to deploy

---

## 📞 Need Help?

If you run into issues:
1. Check the browser console (F12 or right-click → Inspect → Console) for error messages
2. Verify your Google Apps Script URL is correctly entered in `script.js`
3. Test the form locally first before deploying to GitHub Pages
4. Make sure the script is deployed as "Web app" with "Anyone" access

---

## 🎉 You're All Set!

Once everything is configured:
1. ✅ Share your GitHub Pages URL with parents
2. ✅ Watch RSVPs appear in your Google Sheet in real-time
3. ✅ Share the sheet with your wife
4. ✅ Export to Excel anytime for venue/catering
5. ✅ Enjoy the party! 🎂🎈

---

**Perfect for your needs:** One form submission per family, but one row per person in the spreadsheet - exactly what venues and caterers need!
