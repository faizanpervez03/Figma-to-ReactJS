import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const product = action.payload
      const existing = state.items.find((i) => i.id === product.id)
      if (!existing) {
        state.items.push(product)
      }
    },
    removeFromWishlist(state, action) {
      const id = action.payload
      state.items = state.items.filter((i) => i.id !== id)
    },
    clearWishlist(state) {
      state.items = []
    },
    setWishlist(state, action) {
      state.items = action.payload || []
    }
  },
})

export const { addToWishlist, removeFromWishlist, clearWishlist, setWishlist } = wishlistSlice.actions

export const selectWishlistItems = (state) => state.wishlist.items
export const selectWishlistCount = (state) => state.wishlist.items.length
export const selectIsInWishlist = (productId) => (state) => state.wishlist.items.some((i) => i.id === productId)

export default wishlistSlice.reducer
