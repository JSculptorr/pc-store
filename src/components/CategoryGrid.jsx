import { Cpu, Keyboard, Laptop, Monitor } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { categories } from '../data/categories'

const categoryIcons = {
  Cpu,
  Keyboard,
  Laptop,
  Monitor,
}

function CategoryGrid() {
  return (
    <section className="home-section container" id="categories">
      <SectionHeader
        eyebrow="Категории"
        title="Быстрый выбор техники"
        text="Основные разделы магазина, которые на следующем этапе превратятся в полноценный каталог."
      />

      <div className="category-grid">
        {categories.map((category) => {
          const Icon = categoryIcons[category.icon]

          return (
            <a className="category-card" href="#catalog" key={category.id}>
              <span className="category-icon" aria-hidden="true">
                <Icon size={26} />
              </span>
              <span className="category-count">{category.count}</span>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default CategoryGrid
