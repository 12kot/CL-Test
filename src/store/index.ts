import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CategorySlice, ProductSlice } from "./slices";

const rootReducer = combineReducers({
  category: CategorySlice.reducer,
  product: ProductSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
