'use client';

const WHATSAPP_URL = 'https://wa.me/2348109226360';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__brand-name">Dr Kay</span>
          <span className="footer__brand-sub">Tradomedical Services</span>
        </div>
        <div className="footer__links">
          <a href="/" className="footer__link">Home</a>
          <a href="/shop" className="footer__link">Shop</a>
          <a href="/#services" className="footer__link">Services</a>
          <a href="/#about" className="footer__link">About</a>
          <a href="/#contact" className="footer__link">Contact</a>
        </div>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ fontSize: 13 }}>
          Order on WhatsApp
        </a>
        <p className="footer__copy">© {new Date().getFullYear()} Dr Kay Tradomedical Services. All rights reserved.</p>
      </div>
    </footer>
  );
}