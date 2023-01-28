import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice";
import foodReducer from "../features/food/foodSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    food: foodReducer,
    cart: cartReducer
  },
});
