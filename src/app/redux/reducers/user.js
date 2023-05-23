"use client"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/BaseUrl";
import {getRequest} from "../../../utils/ApiFun"

const initialState = {
    GitUser: [],
};

export const GetGitUser = createAsyncThunk("GetGitUser", async () => {
    const result = await getRequest(`${BASE_URL}/posts`);
    console.log(result,"result")
    return result;
});

const dbUserReducer = createSlice({
    name: "dbUser",
    initialState,
    reducers: {},
    extraReducers: {
      [GetGitUser.fulfilled]: (state, action) => {
        console.log(action,"action")
        const data = action.payload;
        state.GitUser = data;
        return state;
      },
    },
  });
  
  export default dbUserReducer.reducer;