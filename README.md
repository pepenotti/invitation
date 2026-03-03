# 🎉 Birthday Party Invitation SPA

A beautiful, modern single-page application for managing birthday party RSVPs. Guests can confirm their attendance and provide full names for everyone in their group, and you can easily export all responses to Excel.

## Features

✨ **Beautiful UI** - Modern, responsive design with gradient backgrounds and smooth animations
👨‍👩‍👧‍👦 **Group Management** - Add multiple attendees per family/group
👶 **Adult/Child Tracking** - Distinguish between adults and children
📧 **Optional Email** - Collect email addresses for confirmations
📝 **Special Notes** - Capture dietary restrictions or allergies
📊 **Real-time Statistics** - View counts of groups, total people, adults, and children
📥 **Excel Export** - Download all RSVPs as a formatted Excel spreadsheet
💾 **Local Storage** - All data saved in browser (no backend needed)

## How to Use

### For You (Party Host):

1. **Customize Party Details**: Edit the party information in `index.html` or uncomment and modify the JavaScript function at the bottom of `script.js`:
   ```javascript
   customizePartyDetails("Your Child's Name", "Date", "Time", "Location");
   ```

2. **Share the Invitation**: Simply open `index.html` in any browser and share the page with your guests. You can:
   - Host it on a simple web server
   - Use GitHub Pages (free hosting)
   - Use Netlify or Vercel (free hosting with drag-and-drop)
   - Or just open it locally and share screenshots

3. **View Responses**: Click the "📊 View Responses" button to see all RSVPs

4. **Export to Excel**: Click the "📥 Export to Excel" button to download a spreadsheet with all guest information

### For Guests:

1. Open the invitation page
2. Fill in their family/group name
3. Add the full name of each person attending (adults and kids)
4. Optionally provide email and special notes
5. Click "Confirm Attendance"

## Quick Start

Just open `index.html` in any modern web browser - no installation or setup required!

## Hosting Options

### Option 1: Local Testing
Simply double-click `index.html` to open it in your browser.

### Option 2: GitHub Pages (Free & Easy)
1. Create a new GitHub repository
2. Upload all files (index.html, styles.css, script.js)
3. Go to Settings → Pages → Select main branch
4. Your invitation will be live at `https://yourusername.github.io/repository-name`

### Option 3: Netlify (Free & Fast)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `invitation` folder
3. Get an instant live URL to share

## Files

- `index.html` - Main HTML structure
- `styles.css` - Beautiful styling and animations
- `script.js` - All functionality (RSVP management, Excel export)
- `README.md` - This file

## Browser Compatibility

Works in all modern browsers:
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## Data Privacy

All RSVP data is stored locally in the browser's localStorage. No data is sent to external servers. The Excel export happens entirely client-side.

## Customization

Feel free to modify:
- Colors in `styles.css` (look for gradient values)
- Party details in `index.html`
- Form fields as needed
- Styling to match your party theme

---

Enjoy your party! 🎂🎈🎁
