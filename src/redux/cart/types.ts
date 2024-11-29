export type CartItem = {
  id: string;
  title: string;
  size: number;
  type: string;
  price: number;
  count: number;
  imageUrl: string;
};

export interface Cart {
  totalPrice: number;
  cartItems: CartItem[];
}
