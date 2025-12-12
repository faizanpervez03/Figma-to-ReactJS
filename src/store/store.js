import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import wishlistReducer from './wishlistSlice'

const loadFromLocalStorage = () => {
  try {
    const cartRaw = localStorage.getItem('cartItems')
    const wishlistRaw = localStorage.getItem('wishlistItems')
    const preloaded = {}
    if (cartRaw) preloaded.cart = { items: JSON.parse(cartRaw) }
    if (wishlistRaw) preloaded.wishlist = { items: JSON.parse(wishlistRaw) }
    return Object.keys(preloaded).length > 0 ? preloaded : undefined
  } catch (err) {
    console.error('Failed to load from localStorage', err)
    return undefined
  }
}

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
  preloadedState: loadFromLocalStorage(),
})

store.subscribe(() => {
  try {
    const state = store.getState()
    localStorage.setItem('cartItems', JSON.stringify(state.cart.items))
    localStorage.setItem('wishlistItems', JSON.stringify(state.wishlist.items))
  } catch (err) {
    console.error('Failed to save to localStorage', err)
  }
})

export default store
