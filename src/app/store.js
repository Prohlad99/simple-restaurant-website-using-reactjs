import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import authSlice from "../features/auth/authSlice";
import cartSlice from "../features/cart/cartSlice";

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        auth: authSlice,  
        cart: cartSlice,
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)

})