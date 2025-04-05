export type ProductItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  rating: number;
  sizes: number[];
  types: number[];
  category: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface ProductState {
  items: ProductItem[];
  itemsById: ProductItem | null;
  status: Status;
}

export type FetchProductsParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};
