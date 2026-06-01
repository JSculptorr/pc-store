import { useEffect, useState } from 'react'
import CartDrawer from './components/CartDrawer'
import Header from './components/Header'
import HomePage from './components/HomePage'
import MobileMenu from './components/MobileMenu'
import OrderSuccess from './components/OrderSuccess'
import { navItems } from './data/navigation'
import { useCart } from './hooks/useCart'
import { saveOrder } from './utils/ordersStorage'
import { sendOrderToTelegram } from './utils/telegram'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [successOrderId, setSuccessOrderId] = useState('')
  const cart = useCart()

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen || isCartOpen)

    return () => document.body.classList.remove('menu-open')
  }, [isCartOpen, isMenuOpen])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key !== 'Escape') return

      setIsMenuOpen(false)
      setIsCartOpen(false)
      setSuccessOrderId('')
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (!successOrderId) return undefined

    const timeoutId = window.setTimeout(() => {
      setSuccessOrderId('')
    }, 5200)

    return () => window.clearTimeout(timeoutId)
  }, [successOrderId])

  const handleMenuToggle = () => setIsMenuOpen((current) => !current)
  const handleMenuClose = () => setIsMenuOpen(false)
  const handleCartOpen = () => {
    setIsMenuOpen(false)
    setIsCartOpen(true)
  }
  const handleCartClose = () => setIsCartOpen(false)
  const handleAddToCart = (product) => {
    setSuccessOrderId('')
    cart.addToCart(product)
    setIsCartOpen(true)
  }
  const handleCheckout = async (customer) => {
    const order = saveOrder({
      customer,
      items: cart.cartItems,
      totalItems: cart.cartSummary.totalItems,
      totalPrice: cart.cartSummary.totalPrice,
      status: 'new',
    })

    try {
      await sendOrderToTelegram(order)
    } catch (error) {
      console.warn('Telegram delivery was not completed:', error)
    }

    cart.clearCart()
    setIsCartOpen(false)
    setSuccessOrderId(order.id)
  }

  return (
    <>
      <Header
        cartItemCount={cart.cartSummary.totalItems}
        isMenuOpen={isMenuOpen}
        onCartOpen={handleCartOpen}
        onMenuToggle={handleMenuToggle}
        onMenuClose={handleMenuClose}
      />
      <MobileMenu
        isOpen={isMenuOpen}
        navItems={navItems}
        onNavigate={handleMenuClose}
      />
      <main className="app-shell">
        <HomePage onAddToCart={handleAddToCart} />
      </main>
      <CartDrawer
        cartItems={cart.cartItems}
        cartSummary={cart.cartSummary}
        isOpen={isCartOpen}
        onClose={handleCartClose}
        onCheckout={handleCheckout}
        onRemove={cart.removeFromCart}
        onUpdateQuantity={cart.updateQuantity}
      />
      <OrderSuccess
        orderId={successOrderId}
        onClose={() => setSuccessOrderId('')}
      />
    </>
  )
}

export default App
