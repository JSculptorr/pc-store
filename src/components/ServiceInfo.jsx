import { ShieldCheck, Truck, Wrench } from 'lucide-react'
import { serviceCards } from '../data/storeContent'
import SectionHeader from './SectionHeader'

const serviceIcons = {
  ShieldCheck,
  Truck,
  Wrench,
}

function ServiceInfo() {
  return (
    <section className="info-section container" id="service-details">
      <SectionHeader
        eyebrow="Сервис"
        title="Доставка, гарантия и обслуживание"
        text="Клиент должен понимать не только что он покупает, но и что произойдёт после оплаты."
      />

      <div className="service-info-grid">
        {serviceCards.map((card) => {
          const Icon = serviceIcons[card.icon]

          return (
            <article className="service-info-card" key={card.id}>
              <span className="benefit-icon" aria-hidden="true">
                <Icon size={24} />
              </span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <ul>
                {card.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default ServiceInfo
