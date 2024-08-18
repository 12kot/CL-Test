import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "api";
import {
  getProductByIdFullfiled,
  getProductByIdPending,
  getProductByIdReducer,
  getProductByIdRejected,
} from "./reducers";

export interface IProductSlice {
  isLoading: boolean;
  product?: IProduct;
}

const initialState: IProductSlice = {
  isLoading: false,
};

export const ProductSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProductByIdReducer.pending, getProductByIdPending)
      .addCase(getProductByIdReducer.fulfilled, getProductByIdFullfiled)
      .addCase(getProductByIdReducer.rejected, getProductByIdRejected);
  },
});
