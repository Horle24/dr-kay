/**
 * lib/sheets.js
 * ─────────────────────────────────────────────────────────────
 * Google Sheets → Product Data Integration
 *
 * HOW TO SET UP YOUR GOOGLE SHEET:
 * ─────────────────────────────────
 * 1. Open Google Sheets → create a new sheet
 * 2. Name the first tab exactly: Products
 * 3. Add these column headers in Row 1 (exact spelling):
 *
 *    | id | name | price | category | description |
 *
 * 4. Fill in your products from Row 2 downward. Example:
 *    | 1 | Man Power Big | 35000 | Men's Health | Premium male vitality formula |
 *
 * 5. Publish the sheet:
 *    File → Share → Publish to web
 *    → Select sheet: "Products"
 *    → Format: "Comma-separated values (.csv)"
 *    → Click Publish → Copy the URL shown
 *
 * 6. Paste that URL below as SHEET_CSV_URL
 *
 * VALID CATEGORIES (must match exactly):
 *   Men's Health | Women's Health | Detox & Weight
 *   Infections & Immunity | Chronic Disease | General Wellness
 *
 * ─────────────────────────────────────────────────────────────
 */

// ── PASTE YOUR PUBLISHED CSV URL HERE ──────────────────────
export const SHEET_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSfLdTarK1vrpJrAyQKZS2osVJQf7W2s550tJeOvcWMzYQGtRmU-yrJgKNyCjdsDAl-9ODWQ7uk_LwC/pub?output=csv';
// ────────────────────────────────────────────────────────────

export const WHATSAPP_NUMBER = '2348109644728';
export const WHATSAPP_URL    = `https://wa.me/${WHATSAPP_NUMBER}`;

export const ALL_CATEGORIES = [
  'All',
  "Men's Health",
  "Women's Health",
  'Detox & Weight',
  'Infections & Immunity',
  'Chronic Disease',
  'General Wellness',
];

/**
 * parseCSV(text)
 * Turns a raw CSV string into an array of plain objects.
 * Handles quoted fields with commas inside them.
 */
function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  if (lines.length < 2) return [];

  const headers = splitCSVRow(lines[0]).map(h => h.trim().toLowerCase());

  return lines.slice(1).map(line => {
    const values = splitCSVRow(line);
    const row = {};
    headers.forEach((h, i) => {
      row[h] = (values[i] || '').trim();
    });
    return row;
  }).filter(row => row.name); // skip blank rows
}

function splitCSVRow(row) {
  const result = [];
  let cur = '';
  let inQuotes = false;

  for (let i = 0; i < row.length; i++) {
    const ch = row[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === ',' && !inQuotes) {
      result.push(cur);
      cur = '';
    } else {
      cur += ch;
    }
  }
  result.push(cur);
  return result;
}

/**
 * formatPrice(amount)
 * Turns a number like 35000 → "₦35,000"
 */
export function formatPrice(amount) {
  return `₦${Number(amount).toLocaleString('en-NG')}`;
}

/**
 * buildOrderMessage(name, price)
 * Pre-fills a WhatsApp message for the given product.
 */
export function buildOrderMessage(name, price) {
  return encodeURIComponent(
    `Hello Dr Kay! I'd like to order:\n\n🌿 *${name}*\nPrice: ₦${Number(price).toLocaleString('en-NG')}\n\nKindly confirm the delivery fee to my location. Thank you!`
  );
}

/**
 * fetchProducts()
 * Fetches the published Google Sheet CSV and returns a clean
 * array of product objects. Called from the API route.
 */
export async function fetchProducts() {
  if (!SHEET_CSV_URL.includes('YOUR_SHEET_ID')) {
    const res = await fetch(SHEET_CSV_URL, {
      next: { revalidate: 300 }, // re-fetch every 5 minutes
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch sheet: ${res.status} ${res.statusText}`);
    }

    const csv  = await res.text();
    const rows = parseCSV(csv);

    return rows.map((row, idx) => ({
      id:          row.id   || String(idx + 1),
      name:        row.name || 'Untitled Product',
      price:       Number(row.price) || 0,
      category:    row.category || 'General Wellness',
      description: row.description || '',
    }));
  }

  // ── FALLBACK: sheet not yet configured — return demo data ──
  return DEMO_PRODUCTS;
}

// ── DEMO DATA (used until you connect your Google Sheet) ────
const DEMO_PRODUCTS = [
  { id:'1',  name:'Man Power Big',              price:35000, category:"Men's Health",         description:'Premium herbal formula for peak male vitality and strength.' },
  { id:'2',  name:'Man Power Small / Sperm Booster', price:15000, category:"Men's Health",   description:'Natural sperm enhancement and motility support.' },
  { id:'3',  name:'Sperm Leakage (EDA)',         price:25000, category:"Men's Health",        description:'Herbal remedy to address involuntary sperm leakage.' },
  { id:'4',  name:'Dick Enlargement Kit',        price:25000, category:"Men's Health",        description:'Complete natural male enhancement kit.' },
  { id:'5',  name:'Emergency Horny',             price:5000,  category:"Men's Health",        description:'Fast-acting herbal arousal and libido booster.' },
  { id:'6',  name:'Egg Booster',                 price:30000, category:"Women's Health",      description:'Supports healthy egg quality and ovarian function.' },
  { id:'7',  name:'PCOS Herb',                   price:34000, category:"Women's Health",      description:'Natural polycystic ovary syndrome management.' },
  { id:'8',  name:'PID Herb',                    price:65000, category:"Women's Health",      description:'Pelvic inflammatory disease herbal treatment.' },
  { id:'9',  name:'TTC Kit',                     price:55000, category:"Women's Health",      description:'Comprehensive trying-to-conceive fertility support kit.' },
  { id:'10', name:'Feminine Wash',               price:50000, category:"Women's Health",      description:'Gentle herbal intimate hygiene wash.' },
  { id:'11', name:'Ovulation Booster',           price:20000, category:"Women's Health",      description:'Regulates and supports healthy ovulation cycles.' },
  { id:'12', name:'Fertility Herbs',             price:55000, category:"Women's Health",      description:'Full-spectrum herbal fertility enhancement formula.' },
  { id:'13', name:'Fibroid Herbs Kit',           price:67000, category:"Women's Health",      description:'Natural herbal kit for fibroid management and relief.' },
  { id:'14', name:'Contraceptive Herbs',         price:50000, category:"Women's Health",      description:'Natural herbal birth control support.' },
  { id:'15', name:'Hormonal Imbalance',          price:15000, category:"Women's Health",      description:'Rebalances estrogen and progesterone naturally.' },
  { id:'16', name:'Low Progesterone',            price:12000, category:"Women's Health",      description:'Herbal support for low progesterone levels.' },
  { id:'17', name:'Pussy Tightener',             price:10000, category:"Women's Health",      description:'Natural vaginal tightening and rejuvenation formula.' },
  { id:'18', name:'Flat Tummy Kit',              price:35000, category:'Detox & Weight',      description:'Targeted herbal kit for belly fat reduction.' },
  { id:'19', name:'Butt & Hips Kit',             price:45000, category:'Detox & Weight',      description:'Natural body shaping and enhancement kit.' },
  { id:'20', name:'Slimming Kit',                price:15000, category:'Detox & Weight',      description:'Gentle herbal weight loss support system.' },
  { id:'21', name:'Detox',                       price:40000, category:'Detox & Weight',      description:'Deep full-body herbal detox and cleanse.' },
  { id:'22', name:'Infection Flusher Roots',     price:30000, category:'Infections & Immunity', description:'Root-based herbal infection elimination formula.' },
  { id:'23', name:'Infection Flusher Liquid',    price:35000, category:'Infections & Immunity', description:'Fast-acting liquid infection flush remedy.' },
  { id:'24', name:'Staphylococcus Herbs',        price:90000, category:'Infections & Immunity', description:'Powerful herbal treatment for staphylococcus infection.' },
  { id:'25', name:'Wart Treatment Kit',          price:35000, category:'Infections & Immunity', description:'Natural wart removal and skin clearing kit.' },
  { id:'26', name:'Jedi Small',                  price:10000, category:'Infections & Immunity', description:'Herbal immune booster — starter pack.' },
  { id:'27', name:'Jedi Big',                    price:25000, category:'Infections & Immunity', description:'Herbal immune booster — full strength pack.' },
  { id:'28', name:'Diabetes Powder',             price:45000, category:'Chronic Disease',     description:'Blood sugar regulation herbal powder.' },
  { id:'29', name:'Diabetes Kit',                price:60000, category:'Chronic Disease',     description:'Comprehensive herbal diabetes management kit.' },
  { id:'30', name:'HBP (High Blood Pressure)',   price:75000, category:'Chronic Disease',     description:'Natural hypertension control and heart support.' },
  { id:'31', name:'Ulcer',                       price:40000, category:'Chronic Disease',     description:'Herbal stomach ulcer treatment and gut healing.' },
  { id:'32', name:'Cough Syrup',                 price:10000, category:'General Wellness',    description:'Soothing herbal cough and chest relief syrup.' },
  { id:'33', name:'Sweetener Honey',             price:15000, category:'General Wellness',    description:'Pure medicinal herbal honey — natural sweetener.' },
  { id:'34', name:'Gbemideebe Adodun',           price:6000,  category:'General Wellness',    description:'Traditional wellness and vitality tonic.' },
];
