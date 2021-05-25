import { IAction, IState } from 'interfaces';
import { UseShoppingCartActionTypes } from 'types';
import { products as mockedProducts } from 'mock/products';

const useShoppingCartReducer = (state: IState, actions: IAction): IState => {
  switch (actions.type) {
    case UseShoppingCartActionTypes.CLEAR_SHOPPING_CART: {
      return {
        products: state.products.map((item) => ({ ...item, quantity: 0 })),
        total: 0
      };
    }

    case UseShoppingCartActionTypes.UPDATE_ITEM_QUANTITY: {
      let total = 0;
      const products = state.products.map((item) => {
        if (item.id === actions.payload.id) {
          item.quantity = actions.payload.quantity;
        }

        total += item.quantity * item.price;
        return item;
      });
      return { ...state, products, total };
    }

    case UseShoppingCartActionTypes.REMOVE_ITEM: {
      let total = 0;
      const products = state.products.map((item) => {
        if (item.id === actions.payload.id) {
          item.quantity = 0;
        }

        total += item.quantity * item.price;
        return item;
      });
      return { ...state, products, total };
    }

    default:
      return {
        products: mockedProducts,
        total: 0
      };
  }
};

export default useShoppingCartReducer;
