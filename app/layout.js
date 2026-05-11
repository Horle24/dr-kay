/**
 * app/layout.js
 * ─────────────
 * Root layout — wraps every page.
 * Imports globals.css (all styles live there, no Tailwind).
 */

import './globals.css';

export const metadata = {
  title: 'Dr Kay Tradomedical Services | Natural Healing. Real Results.',
  description:
    'High-quality, affordable herbal medicine in Lagos & Oyo State. ' +
    'Specializing in fertility, chronic disease, detox, and full-body wellness.',
  keywords:
    'herbal medicine Oyo State, tradomedical services, natural healing, fertility herbs, ' +
    'diabetes herbs Oyo State, PCOS herb, fibroid herbs, staphylococcus treatment',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
