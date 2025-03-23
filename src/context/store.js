import { configureStore } from "@reduxjs/toolkit";
import likeSlice from "/src/context/likeSlice.js";
import cartSlice from "/src/context/cartSlice.js";

export const store = configureStore({
  reducer: {
    likes: likeSlice,
    carts: cartSlice,
  },
});
