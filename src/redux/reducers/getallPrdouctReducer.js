"use client"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/BaseUrl";
import {getRequest} from "../../utils/ApiFun"

const initialState = {
    products: [],
    isFetching:false,
    error:""

};

export const GetAllProducts = createAsyncThunk("GetAllProducts", async () => {
    const result = await getRequest(`${BASE_URL}/api/v1/products`);
    let {data,productsCount}=result
    return {data,productsCount};
});
  
const getallPrdouctReducer = createSlice({
    name: "allproducts",
    initialState,
    reducers: {},
    extraReducers: {
      [GetAllProducts.pending]: (state, action) => {
        state.isFetching=true
        return state;
      },
      [GetAllProducts.fulfilled]: (state, action) => {
        const data = action.payload;
        state.products = data;
        state.isFetching=false
        return state;
      },

      [GetAllProducts.rejected]: (state, action) => {
        state.isFetching=false
        state.error =action.error.message;
        return state;
      },
    },
  });
  
  export default getallPrdouctReducer.reducer;