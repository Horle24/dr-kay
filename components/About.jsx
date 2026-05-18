/**
 * components/About.jsx
 * ─────────────────────
 * About section: story, mission/vision cards, 4 pillar cards.
 * All styles from globals.css.
 */

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">

        {/* Two-column: story + cards */}
        <div className="grid-2col">

          {/* Left: story */}
          <div>
            <span className="section-label section-label--green">About Us</span>
            <div className="divider" />
            <h2 className="about__story-title">
              Rooted in Nature.<br />
              <span className="italic">Built for Community.</span>
            </h2>
            <p className="body-md" style={{ marginBottom: 16 }}>
              Dr Kay Tradomedical Services Enterprise offers a comprehensive range of herbal
              services — from general practice and preventive care to chronic disease management
              and telemedicine. We are grounded in the belief that nature holds powerful answers
              to modern health challenges.
            </p>
            <p className="body-md">
              Serving Nigerians, we are committed to being a leader in the
              tradomedical sector — recognized for excellence, patient-centered care, and
              deep community involvement.
            </p>
          </div>

          {/* Right: cards stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="about__card about__card--mission">
              <div className="about__card-title-mission">🌱 Our Mission</div>
              <p className="about__card-text-mission">
                To provide high-quality, accessible, and affordable tradomedical services that
                improve health outcomes through innovative practices and compassionate care.
              </p>
            </div>

            <div className="about__card about__card--vision">
              <div className="about__card-title-vision">✨ Our Vision</div>
              <p className="about__card-text-vision">
                To be a recognized leader in the tradomedical sector, known for our commitment
                to excellence, patient-centered care, and meaningful community involvement.
              </p>
            </div>

            <div className="about__card about__card--location">
              <span className="about__location-icon">📍</span>
              <div>
                <div className="about__location-label">Locations</div>
                <div className="about__location-name">  Oyo State, Nigeria</div>
                <div className="about__location-address">WithGod Plot 1, Erumu junction, Erumu, Ibadan</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="about__pillars">
          {PILLARS.map(({ icon, title, body }) => (
            <div key={title} className="pillar-card">
              <div className="pillar-card__icon">{icon}</div>
              <div className="pillar-card__title">{title}</div>
              <p className="pillar-card__body">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    icon: '🌿',
    title: 'Personalized Care',
    body: 'Every patient receives a tailored herbal consultation designed for their unique health condition.',
  },
  {
    icon: '⏰',
    title: 'Extended Hours',
    body: 'We operate beyond standard hours so quality care is always accessible when you need it most.',
  },
  {
    icon: '💰',
    title: 'Affordable Pricing',
    body: 'Flexible payment options and competitive pricing ensure no one is priced out of quality healthcare.',
  },
  {
    icon: '🤝',
    title: 'Community Outreach',
    body: 'Free health fairs, screenings, and workshops bring preventive care directly to our community.',
  },
];
