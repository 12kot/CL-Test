import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "api";
import {
  getCategoryByIdFullfiled,
  getCategoryByIdPending,
  getCategoryByIdReducer,
  getCategoryByIdRejected,
} from "./reducers";

export interface ICategorySlice extends ICategory {
  isLoading: boolean;
}

const initialState: ICategorySlice = {
  isLoading: false,
  count: 0,
  products: [],
};

export const CategorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCategoryByIdReducer.pending, getCategoryByIdPending)
      .addCase(getCategoryByIdReducer.fulfilled, getCategoryByIdFullfiled)
      .addCase(getCategoryByIdReducer.rejected, getCategoryByIdRejected);
  },
});
