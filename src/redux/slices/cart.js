import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    error: null,
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const productId = product._id;
      const cartItem = state.cartItems?.find(
        (item) => item.product._id === productId
      );

      if (cartItem) {
        const updatedCart = state.cartItems.map((item) =>
          item.product._id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        state.cartItems = updatedCart;
      } else {
        state.cartItems.push({ product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const cartItem = state.cartItems?.find(
        (item) => item.product._id === productId
      );
      if (cartItem.quantity === 1) {
        //delete
        state.cartItems = state.cartItems.filter(
          (item) => item.product._id != productId
        );
      } else {
        //-1
        state.cartItems = state.cartItems.map((item) =>
          item.product._id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
