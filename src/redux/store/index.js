"use client"

import { configureStore } from "@reduxjs/toolkit";
import allprdoucts from  "../reducers/getallPrdouctReducer"
import productDetails from  "../reducers/getProductDetails"

export const store = configureStore({
  reducer: {
    allprdoucts,
    productDetails
    
  },
});