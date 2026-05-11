

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">

        <div className="section-heading">
          <span className="section-label section-label--green">What We Offer</span>
          <div className="divider divider--center" />
          <h2 className="display-section">Our Core Services</h2>
          <p className="body-md" style={{ maxWidth: 520, margin: '14px auto 0' }}>
            From prevention to chronic care, we offer a full spectrum of natural health
            solutions rooted in proven herbal medicine.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map(({ icon, title, desc, live }) => (
            <div key={title} className="service-card">
              <div className="service-card__icon-wrap">{icon}</div>
              <span className={`service-card__tag${live ? ' service-card__tag--live' : ' service-card__tag--soon'}`}>
                {live ? 'Available Now' : 'Coming Soon'}
              </span>
              <h3 className="service-card__title">{title}</h3>
              <p className="service-card__desc">{desc}</p>
              <div className="service-card__bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    live: true,
    icon: <ConsultIcon />,
    title: 'General Herbal Consultations',
    desc: 'One-on-one consultations with our herbal specialists to diagnose your condition and prescribe the right natural remedy.',
  },
  {
    live: true,
    icon: <ShieldIcon />,
    title: 'Preventive Health Screenings',
    desc: 'Blood pressure checks, diabetes tests, malaria screening, and full body assessments using modern diagnostic equipment.',
  },
  {
    live: true,
    icon: <HeartIcon />,
    title: 'Chronic Disease Management',
    desc: 'Long-term herbal treatment plans for arthritis, diabetes, hypertension, typhoid, fibroid, infections, and more.',
  },
  {
    live: false,
    icon: <PhoneIcon />,
    title: 'Telemedicine Services',
    desc: 'Consult with our herbal specialists from anywhere in Nigeria via phone or video call — quality care at your doorstep.',
  },
];

function ConsultIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
    </svg>
  );
}
