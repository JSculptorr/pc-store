import { ArrowRight, Sparkles } from 'lucide-react'
import { promoBanners } from '../data/banners'

function PromoBanners() {
  return (
    <section className="promo-banners container" aria-label="Рекламные предложения">
      {promoBanners.map((banner) => (
        <article className={`promo-card promo-card-${banner.tone}`} key={banner.id}>
          <div>
            <p className="eyebrow">{banner.eyebrow}</p>
            <h2>{banner.title}</h2>
            <p>{banner.text}</p>
          </div>

          <a className="text-link" href={banner.href}>
            <span>{banner.cta}</span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>

          <span className="promo-orbit" aria-hidden="true">
            <Sparkles size={28} />
          </span>
        </article>
      ))}
    </section>
  )
}

export default PromoBanners
