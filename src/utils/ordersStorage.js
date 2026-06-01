const ORDERS_STORAGE_KEY = 'pc-store-orders'

function readOrders() {
  try {
    const savedOrders = localStorage.getItem(ORDERS_STORAGE_KEY)
    return savedOrders ? JSON.parse(savedOrders) : []
  } catch {
    return []
  }
}

export function saveOrder(order) {
  const orders = readOrders()
  const nextOrder = {
    ...order,
    id: `ORD-${Date.now()}`,
    createdAt: new Date().toISOString(),
  }

  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify([nextOrder, ...orders]))

  return nextOrder
}
