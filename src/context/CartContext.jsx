import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const raw = localStorage.getItem('cartItems')
      return raw ? JSON.parse(raw) : []
    } catch (err) {
      console.error('Failed to read cart from localStorage', err)
      return []
    }
  })

  // persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
    } catch (err) {
      console.error('Failed to save cart to localStorage', err)
    }
  }, [cartItems])

  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === product.id)
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p
        )
      }
      return [...prev, { ...product, quantity }]
    })
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id))
  }

  const increaseQty = (id) => {
    setCartItems((prev) => prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p)))
  }

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, quantity: Math.max(1, p.quantity - 1) } : p))
        .filter((p) => p.quantity > 0)
    )
  }

  const clearCart = () => setCartItems([])

  const cartCount = cartItems.reduce((acc, it) => acc + (it.quantity || 0), 0)

  const cartTotal = cartItems.reduce((acc, it) => acc + (it.price || 0) * (it.quantity || 0), 0)

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, increaseQty, decreaseQty, clearCart, cartCount, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
