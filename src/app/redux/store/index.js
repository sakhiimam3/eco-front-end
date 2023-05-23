"use client"

import { configureStore } from "@reduxjs/toolkit";
import dbUserReducerfrom from  "../reducers/user"
export const store = configureStore({
  reducer: {
    dbUserReducer:dbUserReducerfrom,

  },
});