'use client';

const WHATSAPP_NUMBER = '2348109226360';

function formatPrice(amount) {
  return '₦' + Number(amount).toLocaleString('en-NG');
}

function buildOrderMessage(name, price) {
  return encodeURIComponent(
    'Hello Dr Kay! I would like to order:\n\n🌿 *' + name + '*\nPrice: ₦' + Number(price).toLocaleString('en-NG') + '\n\nKindly confirm the delivery fee to my location. Thank you!'
  );
}

const CATEGORY_CONFIG = {
  "MEN'S HEALTH":         { tag: 'cat-mens',    bar: 'bar-mens',    icon: '💪', label: "Men's Health" },
  "WOMEN'S HEALTH":       { tag: 'cat-womens',  bar: 'bar-womens',  icon: '🌸', label: "Women's Health" },
  'DETOX & WEIGHT':       { tag: 'cat-detox',   bar: 'bar-detox',   icon: '🍃', label: 'Detox & Weight' },
  'INFECTIONS & IMMUNITY':{ tag: 'cat-immune',  bar: 'bar-immune',  icon: '🛡️', label: 'Immunity' },
  'CHRONIC DISEASE':      { tag: 'cat-chronic', bar: 'bar-chronic', icon: '❤️‍🩹', label: 'Chronic Disease' },
  'GENERAL WELLNESS':     { tag: 'cat-general', bar: 'bar-general', icon: '✨', label: 'Wellness' },
};

export default function ProductCard({ product }) {
  const { name, price, category, description } = product;
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildOrderMessage(name, price)}`;
  const config = CATEGORY_CONFIG[category?.toUpperCase()] || CATEGORY_CONFIG['GENERAL WELLNESS'];

  return (
    <div className="product-card">
      {/* Top color bar */}
      <div className={`product-card__bar ${config.bar}`} />

      <div className="product-card__body">
        {/* Category tag */}
        <span className={`product-card__cat-tag ${config.tag}`}>
          {config.icon} {config.label}
        </span>

        {/* Product name */}
        <h3 className="product-card__name">{name}</h3>

        {/* Description */}
        <p className="product-card__desc">{description}</p>
      </div>

      <div className="product-card__footer">
        <div>
          <span className="product-card__price">{formatPrice(price)}</span>
          <p className="product-card__delivery-note">+ delivery fee</p>
        </div>
        <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className="product-card__order-btn"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.532 5.847L.046 23.954l6.276-1.648A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.847 0-3.575-.5-5.07-1.37l-.362-.215-3.726.978.996-3.638-.236-.374A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          Order Now
        </a>
      </div>
    </div>
  );
}