"use client"

import { configureStore } from "@reduxjs/toolkit";
import allprdoucts from  "../reducers/getallPrdouctReducer"
export const store = configureStore({
  reducer: {
    allprdoucts,
  },
});