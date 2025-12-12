import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'

const loadFromLocalStorage = () => {
  try {
    const raw = localStorage.getItem('cartItems')
    if (!raw) return undefined
    const items = JSON.parse(raw)
    return { cart: { items } }
  } catch (err) {
    console.error('Failed to load cart from localStorage', err)
    return undefined
  }
}

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: loadFromLocalStorage(),
})

store.subscribe(() => {
  try {
    const state = store.getState()
    localStorage.setItem('cartItems', JSON.stringify(state.cart.items))
  } catch (err) {
    console.error('Failed to save cart to localStorage', err)
  }
})

export default store
