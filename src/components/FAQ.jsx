import { HelpCircle } from 'lucide-react'
import { faqItems } from '../data/storeContent'
import SectionHeader from './SectionHeader'

function FAQ() {
  return (
    <section className="info-section container" id="faq">
      <SectionHeader
        eyebrow="FAQ"
        title="Частые вопросы"
        text="Ответы на вопросы, которые обычно появляются перед покупкой техники."
      />

      <div className="faq-list">
        {faqItems.map((item) => (
          <details className="faq-item" key={item.question}>
            <summary>
              <span>{item.question}</span>
              <HelpCircle size={19} aria-hidden="true" />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default FAQ
