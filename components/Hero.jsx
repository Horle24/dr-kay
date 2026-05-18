'use client';

import Link from 'next/link';

const WHATSAPP_URL = 'https://wa.me/2348109226360';

export default function Hero() {
  return (
    <section className="hero">

      {/* Decorative rings */}
      <div className="hero__deco-ring hero__deco-ring--lg" />
      <div className="hero__deco-ring hero__deco-ring--sm" />
      <div className="hero__deco-glow" />

      {/* Leaf SVG */}
      <svg className="hero__leaf-svg" width="300" height="300" viewBox="0 0 200 200" fill="none">
        <path d="M100 10 C150 10,190 50,190 100 C190 150,150 190,100 190 C50 190,10 150,10 100 C10 50,50 10,100 10 Z" fill="#c9a84c"/>
        <path d="M100 30 C140 30,170 60,170 100 C170 140,140 170,100 170 C60 170,30 140,30 100 C30 60,60 30,100 30 Z" fill="none" stroke="#c9a84c" strokeWidth="1"/>
        <line x1="100" y1="30" x2="100" y2="170" stroke="#c9a84c" strokeWidth="0.8"/>
        <line x1="55"  y1="65" x2="100" y2="100" stroke="#c9a84c" strokeWidth="0.5"/>
        <line x1="145" y1="65" x2="100" y2="100" stroke="#c9a84c" strokeWidth="0.5"/>
        <line x1="45"  y1="110" x2="100" y2="130" stroke="#c9a84c" strokeWidth="0.5"/>
        <line x1="155" y1="110" x2="100" y2="130" stroke="#c9a84c" strokeWidth="0.5"/>
      </svg>

      <div className="hero__content">
        <div className="hero__inner">

          {/* Badge */}
          <div className="badge badge--hero anim-fade-in">
            <span className="badge__dot" />
            <span className="badge__text">Trusted Herbal Medicine</span>
          </div>

          {/* Headline */}
          <h1 className="display-hero anim-fade-up delay-1">
            Natural Healing.<br />
            <span className="accent">Real Results.</span>
          </h1>

          {/* Sub */}
          <p className="hero__sub anim-fade-up delay-2">
            Dr Kay Tradomedical Services offers high-quality, affordable herbal remedies
            for fertility, chronic disease, detox, and full-body wellness — trusted all across Nigeria.
          </p>

          {/* CTAs */}
          <div className="hero__ctas anim-fade-up delay-3">
            <Link href="/shop" className="btn-gold" style={{ fontSize: 15, padding: '14px 32px' }}>
              Browse Products
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: 15, padding: '14px 32px' }}>
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="hero__stats anim-fade-up delay-4">
            {[
              { num: '10+', label: 'Years Experience' },
              { num: '34',  label: 'Herbal Products'  },
              { num: '2',   label: 'State Coverage'   },
              { num: '90%', label: 'Patient Satisfaction' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="hero__stat-num">{num}</div>
                <div className="hero__stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint">
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.532 5.847L.046 23.954l6.276-1.648A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.847 0-3.575-.5-5.07-1.37l-.362-.215-3.726.978.996-3.638-.236-.374A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  );
}