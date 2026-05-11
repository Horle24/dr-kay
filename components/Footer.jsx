import Link from 'next/link';
import { WHATSAPP_URL } from '../lib/sheets';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="footer__main">

        <div>
          <div className="footer__brand-name">Dr Kay</div>
          <span className="footer__brand-sub">Tradomedical Services</span>
          <p className="footer__brand-desc">
            Specialized in all herbal medicine. Serving Nigerians with quality, affordable natural healthcare.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-wa">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.532 5.847L.046 23.954l6.276-1.648A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        <div>
          <h4 className="footer__section-title">Quick Links</h4>
          <ul>
            {[
              { label: 'Home',     href: '/'          },
              { label: 'Shop',     href: '/shop'      },
              { label: 'Services', href: '/#services' },
              { label: 'About Us', href: '/#about'    },
              { label: 'Contact',  href: '/#contact'  },
            ].map(({ label, href }) => (
              <li key={label}><Link href={href} className="footer__link">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="footer__section-title">Product Categories</h4>
          <ul>
            {["Men's Health", "Women's Health", "Detox & Weight", "Chronic Disease", "General Wellness"].map(label => (
              <li key={label}><Link href="/shop" className="footer__link">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="footer__section-title">Contact Us</h4>
          {[
            { icon: '📍', label: 'Address', value: 'WithGod Plot 1, Erumu junction, Erumu, Ibadan, Oyo State' },
            { icon: '📞', label: 'Phone',   value: '+234 810 964 4728\n+234 810 922 6360' },
            { icon: '✉️', label: 'Email',   value: 'drkaytraditionalmedicine@gmail.com' },
          ].map(({ icon, label, value }) => (
            <div key={label} className="footer__contact-item">
              <span className="footer__contact-icon">{icon}</span>
              <div>
                <div className="footer__contact-label">{label}</div>
                <div className="footer__contact-value">{value}</div>
              </div>
            </div>
          ))}
          <p className="footer__rc">RC: 6983142 — Registered Enterprise</p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <span className="footer__copy">© {year} Dr Kay Tradomedical Services. All rights reserved.</span>
          <span className="footer__tagline">Natural Healing. Real Results.</span>
        </div>
      </div>
    </footer>
  );
}