import { Quote } from 'lucide-react'
import { reviews } from '../data/storeContent'
import SectionHeader from './SectionHeader'

function Reviews() {
  return (
    <section className="info-section container" id="reviews">
      <SectionHeader
        eyebrow="Отзывы"
        title="Что говорят клиенты"
        text="Небольшой блок доверия для презентации магазина реальному клиенту."
      />

      <div className="review-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.id}>
            <Quote size={24} aria-hidden="true" />
            <p>{review.text}</p>
            <div>
              <strong>{review.name}</strong>
              <span>{review.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Reviews
