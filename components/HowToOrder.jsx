import { WHATSAPP_URL } from '../lib/sheets';

const STEPS = [
  {
    num: '01', icon: '🛒', title: 'Browse & Choose',
    desc: 'Explore our full range of herbal products. Find what suits your health needs.',
    cta: { label: 'Go to Shop', href: '/shop', style: 'outline' },
  },
  {
    num: '02', icon: '💬', title: 'Send a WhatsApp DM',
    desc: 'Message us on WhatsApp with your name, location, and the product(s) you want.',
    cta: { label: 'Message Us', href: WHATSAPP_URL, style: 'gold', external: true },
  },
  {
    num: '03', icon: '🚚', title: 'Pay & Receive Delivery',
    desc: 'Confirm your order and pay. Delivery fee is calculated based on your location.',
    cta: null,
  },
];

export default function HowToOrder() {
  return (
    <section className="how-to-order">
      <div className="how-to-order__bg-glow" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-heading">
          <span className="section-label section-label--gold">Simple &amp; Easy</span>
          <div className="divider divider--center" />
          <h2 className="display-section text-cream">How to Order</h2>
          <p className="body-md" style={{ maxWidth: 480, margin: '14px auto 0', color: 'rgba(247,242,232,0.6)' }}>
            All orders via WhatsApp DM. Delivery fee added based on your location.
          </p>
        </div>

        <div className="how-to-order__grid">
          {STEPS.map(({ num, icon, title, desc, cta }) => (
            <div key={num} className="step-card">
              <div className="step-card__top">
                <span className="step-card__num">{num}</span>
                <span className="step-card__icon">{icon}</span>
              </div>
              <h3 className="step-card__title">{title}</h3>
              <p className="step-card__desc">{desc}</p>
              {cta && (
                cta.style === 'gold'
                  ? <a href={cta.href} target={cta.external ? '_blank' : undefined} rel={cta.external ? 'noopener noreferrer' : undefined} className="btn-gold" style={{ alignSelf: 'flex-start', fontSize: 13, padding: '10px 20px' }}>{cta.label}</a>
                  : <a href={cta.href} className="btn-outline" style={{ alignSelf: 'flex-start', fontSize: 13, padding: '10px 20px' }}>{cta.label}</a>
              )}
            </div>
          ))}
        </div>

        <div className="delivery-notice">
          <span className="delivery-notice__icon">⚠️</span>
          <p className="delivery-notice__text">
            <span className="gold">Delivery Notice:</span>{' '}
            Delivery fee is <strong>not included</strong> in listed prices. It is calculated based on your location and added to your order. Our team confirms the fee when you order via WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}