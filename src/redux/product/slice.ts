import { createSlice } from '@reduxjs/toolkit';
import { ProductState, Status } from './types';
import { fetchProducts, fetchProductById } from './asyncActions';

const initialState: ProductState = {
  items: [],
  itemsById: null,
  status: Status.LOADING,
};

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchProductById.pending, (state) => {
      state.status = Status.LOADING;
      state.itemsById = null;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.itemsById = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });

    builder.addCase(fetchProductById.rejected, (state) => {
      state.status = Status.ERROR;
      state.itemsById = null;
    });
  },
});

export const { setItems } = storeSlice.actions;
export default storeSlice.reducer;
