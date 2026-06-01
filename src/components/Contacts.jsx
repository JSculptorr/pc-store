import { MapPin, Phone, Send } from 'lucide-react'
import { contactMethods } from '../data/storeContent'

const contactIcons = {
  MapPin,
  Phone,
  Send,
}

function Contacts() {
  return (
    <section className="contacts-section container" id="contact-preview">
      <div className="contact-copy">
        <p className="eyebrow">Контакты</p>
        <h2>Поможем выбрать технику без лишней переплаты</h2>
        <p>
          Напишите или позвоните, если нужна сборка под бюджет, подбор ноутбука
          или консультация по комплектующим.
        </p>
      </div>

      <div className="contact-methods">
        {contactMethods.map((method) => {
          const Icon = contactIcons[method.icon]

          return (
            <a className="contact-method" href={method.href} key={method.id}>
              <span aria-hidden="true">
                <Icon size={22} />
              </span>
              <div>
                <strong>{method.label}</strong>
                <small>{method.value}</small>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Contacts
