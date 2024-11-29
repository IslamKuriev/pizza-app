import { createSlice } from '@reduxjs/toolkit';
import { PizzaState, Status } from './types';
import { fetchPizzas, fetchPizzaById } from './asyncActions';

const initialState: PizzaState = {
  items: [],
  itemsById: null,
  status: Status.LOADING,
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchPizzaById.pending, (state) => {
      state.status = Status.LOADING;
      state.itemsById = null;
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchPizzaById.fulfilled, (state, action) => {
      state.itemsById = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });

    builder.addCase(fetchPizzaById.rejected, (state) => {
      state.status = Status.ERROR;
      state.itemsById = null;
    });
  },
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
