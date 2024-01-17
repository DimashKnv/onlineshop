import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api";
import { favSlice } from "./reducers";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    favReducer:favSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
