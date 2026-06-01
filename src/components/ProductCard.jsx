import { ArrowRight, Box, Cpu, Laptop, Monitor, ShoppingCart } from 'lucide-react'
import { formatCurrency } from '../utils/formatCurrency'

const productIcons = {
  Компьютеры: Monitor,
  Ноутбуки: Laptop,
  Комплектующие: Cpu,
  Периферия: Box,
}

function ProductCard({ product, ctaHref = '#catalog', onAddToCart }) {
  const Icon = productIcons[product.category] || Box

  return (
    <article className="product-card">
      <div className={`product-visual product-visual-${product.tone}`}>
        <span className="product-badge">{product.badge}</span>
        {product.image ? (
          <img src={product.image} alt={product.name} loading="lazy" />
        ) : (
          <Icon size={72} strokeWidth={1.45} aria-hidden="true" />
        )}
        <span className="product-tag">{product.tag}</span>
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="product-bottom">
          <div>
            <strong>{formatCurrency(product.price)}</strong>
            {product.oldPrice ? <span>{formatCurrency(product.oldPrice)}</span> : null}
          </div>
          <div className="product-actions">
            <button
              className="add-cart-button"
              type="button"
              onClick={() => onAddToCart(product)}
            >
              <ShoppingCart size={18} aria-hidden="true" />
              <span>В корзину</span>
            </button>
            <a className="product-link" href={ctaHref} aria-label={`Подробнее: ${product.name}`}>
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
