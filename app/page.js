import Navbar         from '../components/Navbar';
import Hero           from '../components/Hero';
import About          from '../components/About';
import Services       from '../components/Services';
import ProductCard    from '../components/ProductCard';
import HowToOrder     from '../components/HowToOrder';
import Footer         from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Link           from 'next/link';
import { fetchProducts } from '../lib/sheets';

const FEATURED_IDS = ['9', '29', '30', '18', '13', '24'];

export default async function HomePage() {
  let featured = [];

  try {
    const all = await fetchProducts();
    featured = FEATURED_IDS
      .map(id => all.find(p => String(p.id) === id))
      .filter(Boolean);

    if (featured.length < 6) {
      const extras = all.filter(p => !FEATURED_IDS.includes(String(p.id)));
      featured = [...featured, ...extras].slice(0, 6);
    }
  } catch {
    featured = [];
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />

        {/* Featured Products */}
        <section className="featured">
          <div className="container">
            <div className="featured__header">
              <div>
                <span className="section-label section-label--green">Bestsellers</span>
                <div className="divider" />
                <h2 className="display-section">Featured Products</h2>
              </div>
              <Link href="/shop" className="btn-ghost">
                View All Products →
              </Link>
            </div>

            {featured.length > 0 ? (
              <div className="grid-auto">
                {featured.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <p className="body-md" style={{ textAlign: 'center', padding: '48px 0' }}>
                Products loading. Set up your Google Sheet in <code>lib/sheets.js</code> or visit the <a href="/shop">Shop</a>.
              </p>
            )}

            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <Link href="/shop" className="btn-gold" style={{ fontSize: 15, padding: '14px 40px' }}>
                Browse All Products
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Band */}
        <section className="trust-band">
          <div className="trust-band__grid">
            {[
              { emoji: '🌿', text: '100% Natural Herbs'  },
              { emoji: '🚚', text: 'Nationwide Delivery' },
              { emoji: '📞', text: 'WhatsApp Support'    },
              { emoji: '✅', text: 'Proven & Trusted'    },
              { emoji: '💊', text: 'No Side Effects'     },
            ].map(({ emoji, text }) => (
              <div key={text} className="trust-item">
                <span className="trust-item__icon">{emoji}</span>
                <span className="trust-item__text">{text}</span>
              </div>
            ))}
          </div>
        </section>

        <HowToOrder />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}