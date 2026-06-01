import { useEffect, useMemo, useState } from 'react'

const CART_STORAGE_KEY = 'pc-store-cart'

function readCartFromStorage() {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY)
    return savedCart ? JSON.parse(savedCart) : []
  } catch {
    return []
  }
}

function createCartItem(product) {
  return {
    id: product.id,
    name: product.name,
    category: product.category,
    price: product.price,
    image: product.image,
    quantity: 1,
  }
}

export function useCart() {
  const [cartItems, setCartItems] = useState(readCartFromStorage)

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  const cartSummary = useMemo(() => {
    return cartItems.reduce(
      (summary, item) => ({
        totalItems: summary.totalItems + item.quantity,
        totalPrice: summary.totalPrice + item.price * item.quantity,
      }),
      { totalItems: 0, totalPrice: 0 },
    )
  }, [cartItems])

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id)

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...currentItems, createCartItem(product)]
    })
  }

  const removeFromCart = (productId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId),
    )
  }

  const updateQuantity = (productId, quantity) => {
    const safeQuantity = Math.max(1, quantity)

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity: safeQuantity } : item,
      ),
    )
  }

  const clearCart = () => setCartItems([])

  return {
    addToCart,
    cartItems,
    cartSummary,
    clearCart,
    removeFromCart,
    updateQuantity,
  }
}
