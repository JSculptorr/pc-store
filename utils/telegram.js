import { formatCurrency } from './formatCurrency'

const BOT_TOKEN = 'PASTE_YOUR_BOT_TOKEN_HERE'
const CHAT_ID = 'PASTE_YOUR_CHAT_ID_HERE'

function isTelegramConfigured() {
  return (
    BOT_TOKEN !== 'PASTE_YOUR_BOT_TOKEN_HERE' &&
    CHAT_ID !== 'PASTE_YOUR_CHAT_ID_HERE'
  )
}

function formatOrderForTelegram(order) {
  const productsText = order.items
    .map((item, index) => {
      const itemTotal = item.price * item.quantity

      return `${index + 1}. ${item.name}
   Количество: ${item.quantity}
   Цена: ${formatCurrency(item.price)}
   Сумма: ${formatCurrency(itemTotal)}`
    })
    .join('\n\n')

  return `Новый заказ ${order.id}

Клиент:
Имя: ${order.customer.name}
Телефон: ${order.customer.phone}
Адрес: ${order.customer.address}
Комментарий: ${order.customer.comment || 'Без комментария'}

Товары:
${productsText}

Итого товаров: ${order.totalItems}
Итого сумма: ${formatCurrency(order.totalPrice)}
Дата: ${new Date(order.createdAt).toLocaleString('ru-RU')}`
}

export async function sendOrderToTelegram(order) {
  if (!isTelegramConfigured()) {
    return {
      ok: false,
      skipped: true,
      reason: 'Telegram BOT_TOKEN and CHAT_ID are placeholders.',
    }
  }

  const response = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: formatOrderForTelegram(order),
        parse_mode: 'HTML',
      }),
    },
  )

  if (!response.ok) {
    throw new Error('Telegram order delivery failed.')
  }

  return response.json()
}
