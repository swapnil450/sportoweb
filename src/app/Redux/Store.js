"use client";
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slice/CartSlice";
import LoadMoreSlice from "./Slice/LoadMore"
import ProductTypeSlice from "./Slice/ProductTypeSlice"
const Store = configureStore({
  reducer: {
    cart: CartSlice,
    LoadMore: LoadMoreSlice,
    ProductType: ProductTypeSlice
  },
});

export default Store;
