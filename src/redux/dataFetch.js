import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  search: null,
  dataId : null,
};

export const fetchOne = createAsyncThunk("fetchOneData", async (input) => {
  const responce = await axios(
    `/search/movie?query=${input}&api_key=${import.meta.env.VITE_REACT_APP_API_KEY}`
  );
  return responce;
});
export const fetchId = createAsyncThunk("fetchIdData", async (id) => {
  const responce = await axios(
    `/movie/${id}?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}`
  );
  return responce;
});

export const dataSlice = createSlice({
  name: "data",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchOne.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOne.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = false;
      })
      .addCase(fetchOne.fulfilled, (state, action) => {
        state.isLoading = false;
        state.search = action.payload;
      })
      .addCase(fetchId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchId.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = false;
      })
      .addCase(fetchId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataId = action.payload;
      });
  },
});
// Action creators are generated for each case reducer function

export default dataSlice.reducer;
