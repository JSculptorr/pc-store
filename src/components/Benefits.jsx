import { ShieldCheck, SlidersHorizontal, Truck } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { benefits } from '../data/benefits'

const benefitIcons = {
  ShieldCheck,
  SlidersHorizontal,
  Truck,
}

function Benefits() {
  return (
    <section className="home-section container" id="benefits">
      <SectionHeader
        eyebrow="Преимущества"
        title="Сервис, который чувствуется до покупки"
        text="Показываем клиенту не только товары, но и уверенность: проверка, подбор и нормальная поддержка."
      />

      <div className="benefit-grid">
        {benefits.map((benefit) => {
          const Icon = benefitIcons[benefit.icon]

          return (
            <article className="benefit-card" key={benefit.id}>
              <span className="benefit-icon" aria-hidden="true">
                <Icon size={24} />
              </span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Benefits
