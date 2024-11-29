import { RootState } from '../store';

export const selectCart = (state: RootState) => state.cart;

export const selectCartItemByid = (id: string) => (state: RootState) =>
  state.cart.cartItems.find((obj) => obj.id === id);
