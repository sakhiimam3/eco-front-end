"use client"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/BaseUrl";
import {getRequest} from "../../utils/ApiFun"

const initialState = {
    productsDetails: [],
    isFetching:false,
    error:""

};

export const GetProDetails = createAsyncThunk("GetProDetails", async (id) => {
    const result = await getRequest(`${BASE_URL}/api/v1/products/${id}`);
    console.log(result,"result123456")
    return result;
});
  
const getallPrdouctReducer = createSlice({
    name: "productDetails",
    initialState,
    reducers: {},
    extraReducers: {
      [GetProDetails.pending]: (state, action) => {
        state.isFetching=true
        return state;
      },
      [GetProDetails.fulfilled]: (state, action) => {
        const data = action.payload;
        state.productsDetails = data;
        state.isFetching=false
        return state;
      },

      [GetProDetails.rejected]: (state, action) => {
        state.isFetching=false
        state.error =action.error.message;
        return state;
      },
    },
  });
  
  export default getallPrdouctReducer.reducer;