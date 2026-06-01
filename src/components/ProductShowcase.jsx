import ProductCard from './ProductCard'
import SectionHeader from './SectionHeader'
import { products } from '../data/products'

function ProductShowcase({ onAddToCart, type }) {
  const isPopular = type === 'popular'
  const sectionProducts = products
    .filter((product) => (isPopular ? product.isPopular : product.isNew))
    .slice(0, 4)

  return (
    <section
      className="home-section container"
      id={isPopular ? 'popular-products' : 'new-products'}
    >
      <SectionHeader
        eyebrow={isPopular ? 'Популярное' : 'Новинки'}
        title={isPopular ? 'Чаще всего выбирают' : 'Свежие позиции магазина'}
        text={
          isPopular
            ? 'Карточки уже подготовлены для будущей корзины и каталога.'
            : 'Новые товары для тех, кто хочет взять технику с запасом на несколько лет.'
        }
      />

      <div className="product-grid">
        {sectionProducts.map((product) => (
          <ProductCard onAddToCart={onAddToCart} product={product} key={product.id} />
        ))}
      </div>
    </section>
  )
}

export default ProductShowcase
