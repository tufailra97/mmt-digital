import React, { useReducer } from 'react';
import styled from 'styled-components';
import useShoppingCartReducer from './useShoppingCartReducer';
import { products as mockedProducts } from 'mock/products';
import { Item } from 'components/item';
import { IState } from 'interfaces';
import { UseShoppingCartActionTypes } from 'types';

const ShoppingCartContainer = styled.div`
  padding: 20px 0;
  height: 200px;
  border-radius: 2px;
  background-color: #fdfdfc;
  box-shadow: 0px 0px 3px 0px #dbd8d5;
`;

const ItemsContainer = styled.div`
  margin: 0 auto;
  width: 300px;
  padding: 0 25px 10px 25px;
  border-bottom: 1px solid #dbdbdb;
`;

const Footer = styled.div`
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 25px 0 25px;
  background-color: rgb(248, 249, 247);
`;

const Total = styled.div`
  width: 55%;
  color: #878585;
`;

const ClearButton = styled.button`
  color: #878585;
  font-size: 11px;
  margin-right: 10px;
  cursor: pointer;
`;

const CheckoutButton = styled.button`
  font-size: 11px;
  padding: 8px 10px;
  background-color: rgba(81, 203, 238, 1);
  cursor: pointer;
  color: white;
`;

const initalState: IState = {
  products: mockedProducts,
  total: 0
};

const ShoppingCart: React.FC = () => {
  const [{ products, total }, dispatch] = useReducer(
    useShoppingCartReducer,
    initalState
  );

  const handleClearItem = (id: number) => {
    dispatch({
      type: UseShoppingCartActionTypes.REMOVE_ITEM,
      payload: {
        id
      }
    });
  };

  const handleItemInputChange = (id: number, quantity: number) => {
    dispatch({
      type: UseShoppingCartActionTypes.UPDATE_ITEM_QUANTITY,
      payload: {
        id,
        quantity
      }
    });
  };

  const handleClearCart = () => {
    dispatch({
      type: UseShoppingCartActionTypes.CLEAR_SHOPPING_CART
    });
  };

  return (
    <ShoppingCartContainer>
      <ItemsContainer>
        {products.map((item) => (
          <Item
            key={item.id}
            product={item}
            onClearProduct={handleClearItem}
            onQuantityChange={handleItemInputChange}
          />
        ))}
      </ItemsContainer>
      <Footer>
        <Total>${total.toFixed(2)}</Total>
        <ClearButton onClick={handleClearCart}>Clear</ClearButton>
        <CheckoutButton>Check Out {'>'}</CheckoutButton>
      </Footer>
    </ShoppingCartContainer>
  );
};

export default ShoppingCart;
