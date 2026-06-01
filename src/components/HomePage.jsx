import Benefits from './Benefits'
import Catalog from './Catalog'
import CategoryGrid from './CategoryGrid'
import Contacts from './Contacts'
import FAQ from './FAQ'
import Footer from './Footer'
import Hero from './Hero'
import ProductShowcase from './ProductShowcase'
import PromoBanners from './PromoBanners'
import Reviews from './Reviews'
import ServiceInfo from './ServiceInfo'

function HomePage({ onAddToCart }) {
  return (
    <>
      <Hero />
      <PromoBanners />
      <CategoryGrid />
      <Benefits />
      <ProductShowcase onAddToCart={onAddToCart} type="popular" />
      <ProductShowcase onAddToCart={onAddToCart} type="new" />
      <Catalog onAddToCart={onAddToCart} />
      <ServiceInfo />
      <Reviews />
      <FAQ />
      <Contacts />
      <Footer />
    </>
  )
}

export default HomePage
