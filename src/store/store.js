import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api";
import { cartSlice, favSlice } from "./reducers";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    favReducer:favSlice.reducer,
    cartReducer:cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
