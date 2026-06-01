import { ChevronRight } from 'lucide-react'

function MobileMenu({ isOpen, navItems, onNavigate }) {
  return (
    <div className={`mobile-menu ${isOpen ? 'is-open' : ''}`} id="mobile-menu">
      <nav className="mobile-menu-panel" aria-label="Мобильная навигация">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={onNavigate}>
            <span>{item.label}</span>
            <ChevronRight size={18} aria-hidden="true" />
          </a>
        ))}
      </nav>
    </div>
  )
}

export default MobileMenu
