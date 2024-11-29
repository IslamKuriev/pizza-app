import { CartItem } from '../redux/cart/types';

export const calcTotalPrice = (cartItems: CartItem[]) => {
  return cartItems.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};
