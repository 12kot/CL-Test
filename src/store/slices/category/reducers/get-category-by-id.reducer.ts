import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiGetCategory, ICategory } from "api";
import { ICategorySlice } from "../category.slice";

export const getCategoryByIdReducer = createAsyncThunk<ICategory, { id: number }>(
  "category/getCategoryById",
  async ({ id }, { rejectWithValue }) => {
    const response = await ApiGetCategory(id);
    if (!response) return rejectWithValue("error");

    return response;
  }
);

export const getCategoryByIdPending = (state: ICategorySlice) => {
  state.isLoading = true;
};
export const getCategoryByIdFullfiled = (
  state: ICategorySlice,
  action: PayloadAction<ICategory>
) => {
  state.products = action.payload.products;
  state.count = action.payload.count;
  state.isLoading = false;
};
export const getCategoryByIdRejected = (state: ICategorySlice) => {
  state.isLoading = false;
};
