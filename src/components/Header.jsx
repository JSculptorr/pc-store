import { Menu, Monitor, Search, ShoppingCart, X } from 'lucide-react'
import { navItems } from '../data/navigation'

function Header({
  cartItemCount,
  isMenuOpen,
  onCartOpen,
  onMenuToggle,
  onMenuClose,
}) {
  return (
    <header className="site-header">
      <div className="header-inner container">
        <a className="brand" href="#hero" onClick={onMenuClose}>
          <span className="brand-mark" aria-hidden="true">
            <Monitor size={22} strokeWidth={2.4} />
          </span>
          <span>
            <span className="brand-name">PC Store</span>
            <span className="brand-subtitle">Premium tech</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="search-link" href="#catalog">
            <Search size={18} aria-hidden="true" />
            <span>Поиск</span>
          </a>

          <button className="cart-button" type="button" onClick={onCartOpen}>
            <ShoppingCart size={19} aria-hidden="true" />
            <span>Корзина</span>
            {cartItemCount > 0 ? <strong>{cartItemCount}</strong> : null}
          </button>

          <button
            className="menu-toggle"
            type="button"
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={onMenuToggle}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
