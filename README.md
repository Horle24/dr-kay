# Dr Kay Tradomedical Services — Next.js Website v2
> Pure CSS (globals.css) · No Tailwind · Google Sheets backend

---

## 📁 File Map

```
dr-kay-v2/
│
├── app/
│   ├── globals.css            ← ALL styles live here (no Tailwind)
│   ├── layout.js              ← Root layout + SEO metadata
│   ├── page.js                ← Home page (Server Component)
│   ├── shop/
│   │   └── page.js            ← Shop page shell (Server Component)
│   └── api/
│       └── products/
│           └── route.js       ← GET /api/products → fetches Google Sheet
│
├── components/
│   ├── Navbar.jsx             ← Sticky nav, scroll effect, mobile drawer
│   ├── Hero.jsx               ← Full-viewport botanical hero
│   ├── About.jsx              ← Mission, vision, pillars
│   ├── Services.jsx           ← 4 service cards
│   ├── ProductCard.jsx        ← Single product card (WhatsApp CTA)
│   ├── ProductGrid.jsx        ← Client: fetch, search, filter, grid
│   ├── HowToOrder.jsx         ← 3-step order flow + delivery notice
│   ├── Footer.jsx             ← Full footer + contact
│   └── WhatsAppButton.jsx     ← Floating pulsing WhatsApp button
│
├── lib/
│   └── sheets.js              ← Google Sheets URL, fetch logic, helpers
│
├── next.config.js
└── package.json               ← No Tailwind dependency
```

---

## 🔌 Google Sheets Setup (Backend)

### Step 1 — Create your Google Sheet

Open [sheets.google.com](https://sheets.google.com) and create a new spreadsheet.

### Step 2 — Set up the columns

Name the first tab **Products** and add these exact headers in Row 1:

| id | name | price | category | description |
|----|------|-------|----------|-------------|
| 1  | Man Power Big | 35000 | Men's Health | Premium herbal formula for peak male vitality |
| 2  | TTC Kit | 55000 | Women's Health | Comprehensive fertility support kit |

**Valid categories** (copy exactly):
- `Men's Health`
- `Women's Health`
- `Detox & Weight`
- `Infections & Immunity`
- `Chronic Disease`
- `General Wellness`

### Step 3 — Publish the sheet as CSV

1. Click **File → Share → Publish to web**
2. Under "Link", select:
   - Sheet: **Products**
   - Format: **Comma-separated values (.csv)**
3. Click **Publish**
4. Copy the URL shown (it looks like `https://docs.google.com/spreadsheets/d/...`)

### Step 4 — Paste the URL in your code

Open `lib/sheets.js` and replace:
```js
export const SHEET_CSV_URL =
  'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/pub?gid=0&single=true&output=csv';
```

With your copied URL.

### Step 5 — Update products any time

Just edit your Google Sheet. The website refreshes product data every **5 minutes** automatically (no redeploy needed).

---

## 🚀 Run Locally

```bash
# 1. Install (no Tailwind — only Next.js)
npm install

# 2. Start dev server
npm run dev

# 3. Open browser
http://localhost:3000
```

---

## 🌐 Deploy to Vercel (Free)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → Import project
3. Select the repo → Click **Deploy**

Vercel auto-detects Next.js. No environment variables needed.

---

## ✏️ Customisation Guide

### Change WhatsApp number
In `lib/sheets.js`:
```js
export const WHATSAPP_NUMBER = '2348109644728'; // ← your number
```

### Change brand colours
In `app/globals.css`, update the `:root` block:
```css
:root {
  --gold-500:  #c9a84c;  /* primary accent */
  --green-800: #0d2b1a;  /* hero/dark bg   */
  --cream-100: #f7f2e8;  /* page bg        */
}
```

### Change which products appear on the homepage
In `app/page.js`:
```js
const FEATURED_IDS = ['9', '29', '30', '18', '13', '24'];
// Change these to match the `id` column in your Google Sheet
```

### Add a new page
Create `app/your-page/page.js` — Next.js App Router picks it up automatically.

---

## ⚙️ How It Works

```
Google Sheet (CSV)
      ↓  (every 5 min)
lib/sheets.js → fetchProducts()
      ↓
app/api/products/route.js  (GET /api/products)
      ↓
components/ProductGrid.jsx  (client, useEffect fetch)
      ↓
components/ProductCard.jsx  (renders each product)
```

Home page featured products are fetched **server-side** at request time.
Shop page products are fetched **client-side** from `/api/products`.
