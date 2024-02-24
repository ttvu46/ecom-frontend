import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-action-and-reducer";

console.log(cartSlice);
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
