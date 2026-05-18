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

export default function ProductCard({ product }) {
  const { name, price, category, description } = product;
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildOrderMessage(name, price)}`;

  return (
    <div className="product-card">
      <div className="product-card__body">
        <span className="product-card__category">{category}</span>
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__desc">{description}</p>
      </div>
      <div className="product-card__footer">
        <span className="product-card__price">{formatPrice(price)}</span>
        <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold product-card__btn"
        >
          Order Now
        </a>
      </div>
    </div>
  );
}