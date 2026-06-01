import { Send } from 'lucide-react'
import { useState } from 'react'

const initialForm = {
  name: '',
  phone: '',
  address: '',
  comment: '',
}

function CheckoutForm({ onSubmit }) {
  const [formData, setFormData] = useState(initialForm)
  const [error, setError] = useState('')

  const updateField = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }))
    setError('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const requiredFields = ['name', 'phone', 'address']
    const hasEmptyField = requiredFields.some((field) => !formData[field].trim())

    if (hasEmptyField) {
      setError('Заполните имя, телефон и адрес.')
      return
    }

    onSubmit({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      address: formData.address.trim(),
      comment: formData.comment.trim(),
    })

    setFormData(initialForm)
  }

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <div className="checkout-grid">
        <label>
          <span>Имя</span>
          <input
            type="text"
            value={formData.name}
            placeholder="Ваше имя"
            onChange={(event) => updateField('name', event.target.value)}
          />
        </label>

        <label>
          <span>Телефон</span>
          <input
            type="tel"
            value={formData.phone}
            placeholder="+998 90 123 45 67"
            onChange={(event) => updateField('phone', event.target.value)}
          />
        </label>
      </div>

      <label>
        <span>Адрес</span>
        <input
          type="text"
          value={formData.address}
          placeholder="Город, улица, дом"
          onChange={(event) => updateField('address', event.target.value)}
        />
      </label>

      <label>
        <span>Комментарий</span>
        <textarea
          value={formData.comment}
          placeholder="Удобное время звонка, пожелания по сборке или доставке"
          rows="3"
          onChange={(event) => updateField('comment', event.target.value)}
        />
      </label>

      {error ? <p className="form-error">{error}</p> : null}

      <button className="primary-button" type="submit">
        <Send size={18} aria-hidden="true" />
        <span>Оформить заказ</span>
      </button>
    </form>
  )
}

export default CheckoutForm
