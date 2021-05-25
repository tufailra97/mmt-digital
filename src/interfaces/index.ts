import { UseShoppingCartActionTypes } from 'types';

export interface IProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface IState {
  products: Array<IProduct>;
  total: number;
}

export interface IAction {
  type: UseShoppingCartActionTypes;
  payload?: any;
}
