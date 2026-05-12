'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const WHATSAPP_URL = 'https://wa.me/2348109226360';

const NAV_LINKS = [
  { label: 'Home',     href: '/'          },
  { label: 'Shop',     href: '/shop'      },
  { label: 'Services', href: '/#services' },
  { label: 'About',    href: '/#about'    },
  { label: 'Contact',  href: '/#contact'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar__inner">

        <Link href="/" className="navbar__brand">
          <span className="navbar__brand-name">Dr Kay</span>
          <span className="navbar__brand-sub">Tradomedical Services</span>
        </Link>

        <div className="navbar__links">
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={label} href={href} className="navbar__link">{label}</Link>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: '10px 22px', fontSize: 13 }}>
            Order on WhatsApp
          </a>
        </div>

        <button className="navbar__hamburger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span className={`navbar__hamburger-bar top${open ? ' open' : ''}`} />
          <span className={`navbar__hamburger-bar mid${open ? ' open' : ''}`} />
          <span className={`navbar__hamburger-bar bottom${open ? ' open' : ''}`} />
        </button>
      </div>

      <div className={`navbar__drawer${open ? ' open' : ''}`}>
        <div className="navbar__drawer-inner">
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={label} href={href} className="navbar__drawer-link" onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ marginTop: 16, justifyContent: 'center' }} onClick={() => setOpen(false)}>
            Order on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}