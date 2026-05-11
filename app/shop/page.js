import Navbar         from '../../components/Navbar';
import Footer         from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import ProductGrid    from '../../components/ProductGrid';

export const metadata = {
  title: 'Shop — Dr Kay Tradomedical Services',
  description: 'Browse all herbal products. Order via WhatsApp. Nationwide delivery.',
};

export default function ShopPage() {
  return (
    <>
      <Navbar />

      <div className="shop-hero">
        <span className="section-label section-label--gold">Our Collection</span>
        <h1 className="shop-hero__title">Herbal Product Shop</h1>
        <p className="shop-hero__sub">
          Browse our full range of natural remedies. All orders are placed via WhatsApp DM.
          Delivery fee is added based on your location.
        </p>
      </div>

      <main className="shop-main">
        <ProductGrid />

        <div className="shop-cta-banner">
          <div>
            <h3 className="shop-cta-banner__title">
              Not sure which product is right for you?
            </h3>
            <p className="shop-cta-banner__sub">
              Message our herbalist on WhatsApp for a free personalized recommendation.
            </p>
          </div>
          <a
            href="https://wa.me/2348109226360"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ fontSize: 14, padding: '14px 32px', whiteSpace: 'nowrap' }}
          >
            Get a Free Consultation
          </a>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}