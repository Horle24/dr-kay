'use client';

const WHATSAPP_URL = 'https://wa.me/2348109226360';

const STEPS = [
  { icon: '🌿', title: 'Browse Products', desc: 'Explore our full range of herbal products in the shop.' },
  { icon: '📲', title: 'Message Us on WhatsApp', desc: 'Send us the product name and your delivery location.' },
  { icon: '💳', title: 'Make Payment', desc: 'Pay securely via bank transfer after confirmation.' },
  { icon: '🚚', title: 'Receive Delivery', desc: 'Your order is dispatched nationwide within 24–48 hours.' },
];

export default function HowToOrder() {
  return (
    <section className="how-to-order" id="how-to-order">
      <div className="section-inner">
        <span className="section-label section-label--gold">Simple Process</span>
        <h2 className="section-title">How to Order</h2>
        <div className="how-to-order__steps">
          {STEPS.map((step, i) => (
            <div key={i} className="how-to-order__step">
              <div className="how-to-order__step-icon">{step.icon}</div>
              <h3 className="how-to-order__step-title">{step.title}</h3>
              <p className="how-to-order__step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ marginTop: 40 }}>
          Start Your Order Now
        </a>
      </div>
    </section>
  );
}