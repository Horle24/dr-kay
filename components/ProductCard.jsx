import { formatPrice, buildOrderMessage, WHATSAPP_NUMBER } from '../lib/sheets';

const CATEGORY_MAP = {
  "Men's Health":          { cat: 'cat-mens',    bar: 'bar-mens'    },
  "Women's Health":        { cat: 'cat-womens',  bar: 'bar-womens'  },
  'Detox & Weight':        { cat: 'cat-detox',   bar: 'bar-detox'   },
  'Infections & Immunity': { cat: 'cat-immune',  bar: 'bar-immune'  },
  'Chronic Disease':       { cat: 'cat-chronic', bar: 'bar-chronic' },
  'General Wellness':      { cat: 'cat-general', bar: 'bar-general' },
};

export default function ProductCard({ product }) {
  const { name, price, category, description } = product;
  const theme = CATEGORY_MAP[category] || { cat: 'cat-general', bar: 'bar-general' };
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildOrderMessage(name, price)}`;

  return (
    <div className="product-card">
      <div className={`product-card__bar ${theme.bar}`} />
      <div className="product-card__body">
        <span className={`product-card__cat-tag ${theme.cat}`}>{category}</span>
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__desc">{description}</p>
        <div className="product-card__footer">
          <div>
            <div className="product-card__price">{formatPrice(price)}</div>
            <div className="product-card__delivery-note">+ delivery fee</div>
          </div>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="product-card__order-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.532 5.847L.046 23.954l6.276-1.648A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
}