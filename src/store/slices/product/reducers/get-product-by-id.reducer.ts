import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiGetProductById, IProduct } from "api";
import { IProductSlice } from "../product.slice";

export const getProductByIdReducer = createAsyncThunk<IProduct, { id: number }>(
  "product/getProductById",
  async ({ id }, { rejectWithValue }) => {
    const response = await ApiGetProductById(id);
    if (!response) return rejectWithValue("error");

    return response;
  }
);

export const getProductByIdPending = (state: IProductSlice) => {
  state.isLoading = true;
};
export const getProductByIdFullfiled = (
  state: IProductSlice,
  action: PayloadAction<IProduct>
) => {
  state.product = action.payload;
  state.isLoading = false;
};
export const getProductByIdRejected = (state: IProductSlice) => {
  state.isLoading = false;
};
