export type PizzaItem = {
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

export interface PizzaState {
  items: PizzaItem[];
  itemsById: PizzaItem | null;
  status: Status;
}

export type FetchPizzazParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};
