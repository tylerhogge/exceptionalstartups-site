// ============================================================
// Exceptional Startups — "Raise Hand" Form Handler
// Google Apps Script — deploy as a Web App
// ============================================================
//
// SETUP INSTRUCTIONS:
// 1. Go to https://script.google.com and create a new project
// 2. Paste this entire file into the editor
// 3. Change SHEET_ID below to your Google Sheet's ID
//    (it's the long string in the URL: /spreadsheets/d/THIS_PART/edit)
// 4. Click Deploy > New Deployment
//    - Type: Web App
//    - Execute as: Me
//    - Who has access: Anyone
// 5. Authorize it when prompted
// 6. Copy the Web App URL
// 7. In list-2025/index.html AND list-2024/index.html,
//    replace 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE' with that URL
// ============================================================

const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE'; // <-- replace this
const SHEET_NAME = 'Raise Hand Submissions';   // tab name (created automatically)

function doGet(e) {
  try {
    const data = e.parameter; // data comes in as URL query params

    // If no data params, just return a health check
    if (!data.name && !data.email) {
      return ContentService
        .createTextOutput('Raise Hand endpoint is live ✅')
        .setMimeType(ContentService.MimeType.TEXT);
    }

    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    // Create the sheet + header row if it doesn't exist yet
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        'Timestamp', 'List Year', 'Name', 'Email',
        'LinkedIn', 'Experience', 'Interested Companies'
      ]);
      sheet.getRange(1, 1, 1, 7).setFontWeight('bold');
    }

    sheet.appendRow([
      new Date().toISOString(),
      data.list || '',
      data.name || '',
      data.email || '',
      data.linkedin || '',
      data.experience || '',
      data.companies || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
