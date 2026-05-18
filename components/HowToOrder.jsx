'use client';

const WHATSAPP_URL = 'https://wa.me/2348109226360';

const STEPS = [
  {
    icon: '🌿',
    num: '01',
    title: 'Browse Products',
    desc: 'Visit our shop and explore our full range of natural herbal remedies across all health categories.',
  },
  {
    icon: '📲',
    num: '02',
    title: 'Message Us on WhatsApp',
    desc: 'Send us the product name and your delivery location via WhatsApp DM. We respond fast!',
  },
  {
    icon: '💳',
    num: '03',
    title: 'Make Payment',
    desc: 'Pay securely via bank transfer after we confirm your order and delivery fee.',
  },
  {
    icon: '🚚',
    num: '04',
    title: 'Receive Delivery',
    desc: 'Sit back and relax. Your order is dispatched nationwide within 24–48 hours.',
  },
];

function ArrowIcon() {
  return (
    <div className="how-to-order__arrow" aria-hidden="true">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M6 16 H26 M18 8 L26 16 L18 24"
          stroke="rgba(201,168,76,0.4)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function HowToOrder() {
  return (
    <section className="how-to-order" id="how-to-order">
      <div className="how-to-order__bg-glow" />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1, padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-label section-label--gold">Simple Process</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 4.5vw, 52px)',
            fontWeight: 600,
            color: 'var(--cream-100)',
            lineHeight: 1.1,
            marginTop: 12,
            marginBottom: 16,
          }}>
            How to Order
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            color: 'rgba(247,242,232,0.55)',
            maxWidth: 420,
            margin: '0 auto',
            lineHeight: 1.75,
          }}>
            Getting your herbal products delivered is simple — just 4 easy steps.
          </p>
        </div>

        {/* Steps row with arrows between */}
        <div className="how-to-order__grid">
          {STEPS.map((step, i) => (
            <div key={step.num} style={{ display: 'contents' }}>
              <div className="step-card">
                <div className="step-card__top">
                  <span className="step-card__num">{step.num}</span>
                  <span className="step-card__icon">{step.icon}</span>
                </div>
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__desc">{step.desc}</p>
              </div>
              {i < STEPS.length - 1 && <ArrowIcon />}
            </div>
          ))}
        </div>

        {/* Delivery notice */}
        <div className="delivery-notice" style={{ marginTop: 48 }}>
          <span className="delivery-notice__icon">🚀</span>
          <p className="delivery-notice__text">
            <strong>Fast & Nationwide Delivery</strong> — We deliver to all states in Nigeria.
            Delivery fee is confirmed on WhatsApp based on your location.
            Orders placed before <span className="gold">2PM</span> are dispatched same day.
          </p>
        </div>

        {/* CTA button */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ fontSize: 15, padding: '15px 36px' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.532 5.847L.046 23.954l6.276-1.648A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.847 0-3.575-.5-5.07-1.37l-.362-.215-3.726.978.996-3.638-.236-.374A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Start Your Order Now
          </a>
        </div>

      </div>
    </section>
  );
}