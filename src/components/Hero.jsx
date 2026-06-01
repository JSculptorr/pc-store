import { ArrowRight, Cpu, ShieldCheck, Truck } from 'lucide-react'

const heroStats = [
  { value: '24/7', label: 'подбор конфигурации' },
  { value: '36 мес.', label: 'гарантия на сборки' },
  { value: '1 день', label: 'быстрая доставка' },
]

function Hero() {
  return (
    <section className="hero-section container" id="hero">
      <div className="hero-copy">
        <p className="eyebrow">Premium computer store</p>
        <h1>Компьютеры, ноутбуки и комплектующие для сильной работы</h1>
        <p className="lead">
          Собираем и подбираем технику под игры, дизайн, офис и бизнес-задачи:
          чисто, быстро и с понятной гарантией.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#catalog">
            <span>Смотреть каталог</span>
            <ArrowRight size={19} aria-hidden="true" />
          </a>
          <a className="secondary-button" href="#service-details">
            <Cpu size={19} aria-hidden="true" />
            <span>Подобрать сборку</span>
          </a>
        </div>

        <div className="hero-stats" aria-label="Преимущества магазина">
          {heroStats.map((item) => (
            <div className="hero-stat" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-media" aria-label="Премиальная рабочая станция">
        <div className="hero-image-frame">
          <img
            src="/images/banners/hero-workstation.png"
            alt="Игровая рабочая станция с монитором, системным блоком и клавиатурой"
          />
        </div>

        <div className="floating-card floating-card-top">
          <ShieldCheck size={20} aria-hidden="true" />
          <span>Гарантия и проверка</span>
        </div>

        <div className="floating-card floating-card-bottom">
          <Truck size={20} aria-hidden="true" />
          <span>Доставка по городу</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
