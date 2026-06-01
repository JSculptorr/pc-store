import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatCurrency } from '../utils/formatCurrency'
import CheckoutForm from './CheckoutForm'

function CartDrawer({
  cartItems,
  cartSummary,
  isOpen,
  onClose,
  onCheckout,
  onRemove,
  onUpdateQuantity,
}) {
  const hasItems = cartItems.length > 0

  return (
    <div className={`cart-layer ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
      <button
        className="cart-backdrop"
        type="button"
        aria-label="Закрыть корзину"
        onClick={onClose}
      />

      <aside
        className="cart-drawer"
        aria-label="Корзина"
        aria-modal="true"
        role="dialog"
      >
        <div className="cart-head">
          <div>
            <p className="eyebrow">Корзина</p>
            <h2>{hasItems ? `${cartSummary.totalItems} товаров` : 'Пока пусто'}</h2>
          </div>
          <button className="icon-button" type="button" aria-label="Закрыть" onClick={onClose}>
            <X size={21} aria-hidden="true" />
          </button>
        </div>

        {hasItems ? (
          <>
            <div className="cart-list">
              {cartItems.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <span>{item.category}</span>
                    <h3>{item.name}</h3>
                    <strong>{formatCurrency(item.price)}</strong>

                    <div className="quantity-control" aria-label={`Количество ${item.name}`}>
                      <button
                        type="button"
                        aria-label="Уменьшить количество"
                        disabled={item.quantity === 1}
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus size={16} aria-hidden="true" />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        aria-label="Увеличить количество"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus size={16} aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <button
                    className="remove-button"
                    type="button"
                    aria-label={`Удалить ${item.name}`}
                    onClick={() => onRemove(item.id)}
                  >
                    <Trash2 size={18} aria-hidden="true" />
                  </button>
                </article>
              ))}
            </div>

            <div className="checkout-panel">
              <h3>Оформление заказа</h3>
              <CheckoutForm onSubmit={onCheckout} />
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Итого</span>
                <strong>{formatCurrency(cartSummary.totalPrice)}</strong>
              </div>
            </div>
          </>
        ) : (
          <div className="cart-empty">
            <span aria-hidden="true">
              <ShoppingBag size={34} />
            </span>
            <h3>Добавьте товары из каталога</h3>
            <p>После добавления здесь появятся позиции, количество и итоговая сумма.</p>
            <button className="secondary-button" type="button" onClick={onClose}>
              <span>Вернуться к покупкам</span>
            </button>
          </div>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer
