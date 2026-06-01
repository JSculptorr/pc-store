import { RotateCcw, Search, SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { products } from '../data/products'
import ProductCard from './ProductCard'
import SectionHeader from './SectionHeader'

const sortOptions = [
  { value: 'popular', label: 'Сначала популярные' },
  { value: 'price-asc', label: 'Цена по возрастанию' },
  { value: 'price-desc', label: 'Цена по убыванию' },
  { value: 'name', label: 'По названию' },
]

function Catalog({ onAddToCart }) {
  const [searchValue, setSearchValue] = useState('')
  const [activeCategory, setActiveCategory] = useState('Все')
  const [sortValue, setSortValue] = useState('popular')

  const categories = useMemo(
    () => ['Все', ...new Set(products.map((product) => product.category))],
    [],
  )

  const visibleProducts = useMemo(() => {
    const normalizedSearch = searchValue.trim().toLowerCase()

    return products
      .filter((product) => {
        const matchesCategory =
          activeCategory === 'Все' || product.category === activeCategory
        const searchableText = [
          product.name,
          product.category,
          product.description,
          product.tag,
        ]
          .join(' ')
          .toLowerCase()

        return matchesCategory && searchableText.includes(normalizedSearch)
      })
      .sort((first, second) => {
        if (sortValue === 'price-asc') return first.price - second.price
        if (sortValue === 'price-desc') return second.price - first.price
        if (sortValue === 'name') return first.name.localeCompare(second.name)

        return Number(second.isPopular) - Number(first.isPopular)
      })
  }, [activeCategory, searchValue, sortValue])

  const resetFilters = () => {
    setSearchValue('')
    setActiveCategory('Все')
    setSortValue('popular')
  }

  return (
    <section className="catalog-section container" id="catalog">
      <SectionHeader
        eyebrow="Каталог"
        title="Найдите технику под свою задачу"
        text="Поиск, категории и сортировка уже работают на demo-товарах. На следующем этапе эти карточки подключим к корзине."
      />

      <div className="catalog-toolbar">
        <label className="catalog-search">
          <Search size={19} aria-hidden="true" />
          <span className="visually-hidden">Поиск товаров</span>
          <input
            type="search"
            placeholder="Поиск по названию, категории или характеристикам"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </label>

        <label className="catalog-sort">
          <SlidersHorizontal size={19} aria-hidden="true" />
          <span className="visually-hidden">Сортировка товаров</span>
          <select
            value={sortValue}
            onChange={(event) => setSortValue(event.target.value)}
          >
            {sortOptions.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <button className="reset-button" type="button" onClick={resetFilters}>
          <RotateCcw size={18} aria-hidden="true" />
          <span>Сбросить</span>
        </button>
      </div>

      <div className="catalog-categories" aria-label="Фильтр по категориям">
        {categories.map((category) => (
          <button
            className={`category-pill ${activeCategory === category ? 'is-active' : ''}`}
            type="button"
            key={category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="catalog-meta">
        <span>Найдено: {visibleProducts.length}</span>
        <span>Всего товаров: {products.length}</span>
      </div>

      {visibleProducts.length > 0 ? (
        <div className="catalog-grid">
          {visibleProducts.map((product) => (
            <ProductCard
              onAddToCart={onAddToCart}
              ctaHref="#contact-preview"
              product={product}
              key={product.id}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>Товары не найдены</h3>
          <p>Попробуйте изменить поиск, выбрать другую категорию или сбросить фильтры.</p>
          <button className="secondary-button" type="button" onClick={resetFilters}>
            <RotateCcw size={18} aria-hidden="true" />
            <span>Сбросить фильтры</span>
          </button>
        </div>
      )}
    </section>
  )
}

export default Catalog
