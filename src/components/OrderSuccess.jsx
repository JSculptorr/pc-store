import { CheckCircle2, X } from 'lucide-react'

function OrderSuccess({ orderId, onClose }) {
  if (!orderId) return null

  return (
    <div className="order-success" role="status">
      <CheckCircle2 size={22} aria-hidden="true" />
      <div>
        <strong>Заказ оформлен</strong>
        <span>{orderId} сохранён в localStorage.</span>
      </div>
      <button type="button" aria-label="Закрыть уведомление" onClick={onClose}>
        <X size={17} aria-hidden="true" />
      </button>
    </div>
  )
}

export default OrderSuccess
