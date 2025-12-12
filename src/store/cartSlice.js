import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { product, quantity = 1 } = action.payload
      const existing = state.items.find((i) => i.id === product.id)
      if (existing) {
        existing.quantity = (existing.quantity || 0) + quantity
      } else {
        state.items.push({ ...product, quantity })
      }
    },
    removeFromCart(state, action) {
      const id = action.payload
      state.items = state.items.filter((i) => i.id !== id)
    },
    increaseQty(state, action) {
      const id = action.payload
      const item = state.items.find((i) => i.id === id)
      if (item) item.quantity = (item.quantity || 0) + 1
    },
    decreaseQty(state, action) {
      const id = action.payload
      const item = state.items.find((i) => i.id === id)
      if (item) {
        item.quantity = (item.quantity || 1) - 1
        if (item.quantity <= 0) state.items = state.items.filter((i) => i.id !== id)
      }
    },
    clearCart(state) {
      state.items = []
    },
    setCart(state, action) {
      state.items = action.payload || []
    }
  },
})

export const { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart, setCart } = cartSlice.actions

export const selectCartItems = (state) => state.cart.items
export const selectCartCount = (state) => state.cart.items.reduce((acc, it) => acc + (it.quantity || 0), 0)
export const selectCartTotal = (state) => state.cart.items.reduce((acc, it) => acc + (it.price || 0) * (it.quantity || 0), 0)

export default cartSlice.reducer
