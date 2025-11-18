// This service fetches payment data from Google Sheets using the Public API
// No authentication needed if sheet is shared as "Anyone with link can view"

export const fetchPaymentsFromSheets = async () => {
  try {
    const GOOGLE_SHEET_ID = process.env.REACT_APP_GOOGLE_SHEET_ID;
    const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

    if (!GOOGLE_SHEET_ID || !GOOGLE_API_KEY) {
      // Credentials not configured in local .env — skip fetching in this environment
      return null;
    }

    // Format: https://sheets.googleapis.com/v4/spreadsheets/{SHEET_ID}/values/{RANGE}?key={API_KEY}
    // Read columns A (Project), B (Date), C (Amount), D (Status), E (Email) from row 2 onwards
    const SHEET_URL = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/Payments!A2:E?key=${GOOGLE_API_KEY}`;

    const response = await fetch(SHEET_URL);
    
    // If the sheet/tab doesn't exist or range is invalid, the API returns 400.
    if (!response.ok) {
      // Return empty data for invalid range (sheet not yet created)
      if (response.status === 400) {
        // API returned 400 — sheet or range may be missing; return empty dataset
        return {
          qaTesting: 0,
          postQA: 0,
          total: 0,
          history: [],
        };
      }
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.values || data.values.length === 0) {
      return {
        qaTesting: 0,
        postQA: 0,
        total: 0,
        history: [],
      };
    }

    // data.values is an array of rows; each row is [project, date, amount, status, email]
    let qaTesting = 0;
    let postQA = 0;
    let total = 0;
    const history = [];

    for (const row of data.values) {
      const project = row[0] || "";
      const date = row[1] || "";
      const amount = parseFloat((row[2] || "").toString().replace(/[^0-9.-]/g, "")) || 0;
      const status = (row[3] || "").toString();
      const email = row[4] || "";

      total += amount;

      const s = status.toLowerCase();
      // classify statuses into ongoing QA vs available-to-be-billed
      if (s.includes("qa") || s.includes("pending") || s.includes("in qa") || s.includes("testing")) {
        qaTesting += amount;
      } else if (s.includes("available") || s.includes("bill") || s.includes("billable") || s.includes("to be billed")) {
        postQA += amount;
      }

      history.push({ project, date, amount, status, email });
    }

    return {
      qaTesting,
      postQA,
      total,
      history,
    };
  } catch (error) {
    // Swallow errors for client-side public-sheet fetches; return null so caller can handle it
    return null;
  }
};
