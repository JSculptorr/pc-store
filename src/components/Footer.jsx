import { Monitor } from 'lucide-react'
import { navItems } from '../data/navigation'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <a className="brand" href="#hero">
          <span className="brand-mark" aria-hidden="true">
            <Monitor size={22} strokeWidth={2.4} />
          </span>
          <span>
            <span className="brand-name">PC Store</span>
            <span className="brand-subtitle">Premium tech</span>
          </span>
        </a>

        <nav aria-label="Навигация в подвале">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <p>Demo project. Orders and cart are stored locally in the browser.</p>
      </div>
    </footer>
  )
}

export default Footer
