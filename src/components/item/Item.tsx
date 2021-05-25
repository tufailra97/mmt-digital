import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { IProduct } from 'interfaces';

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 0;
  border-bottom: 1px dashed #dbdbdb;
  &:nth-child(23) {
    background-color: red;
  }
`;

const LeftContentContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RightContentContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ItemTitle = styled.div`
  color: #878585;
`;

const ItemInput = styled.input`
  text-align: center;
  width: 20px;
  border: 1px solid #dbdbdb;
  color: #878585;
  cursor: pointer;

  &:focus {
    outline: none;
    border: 1px solid rgba(81, 203, 238, 1);
    box-shadow: 0 0 5px rgba(81, 203, 238, 0.5);
  }
`;

const ItemPrice = styled.div`
  color: #e38a5a;
  margin-right: 10px;
`;

const CloseIconContainer = styled.div`
  cursor: pointer;
  margin-top: 3px;
`;

interface IItemProps {
  product: IProduct;
  onClearProduct: (id: number) => void;
  onQuantityChange: (id: number, quantity: number) => void;
}

const Item: React.FC<IItemProps> = ({
  product,
  onClearProduct,
  onQuantityChange
}) => {
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const quantity = isNaN(parseFloat(e.currentTarget.value))
      ? 0
      : parseFloat(e.currentTarget.value);

    onQuantityChange(product.id, quantity);
  };

  return (
    <ItemContainer>
      <LeftContentContainer>
        <ItemTitle>{product.name}</ItemTitle>
        <ItemInput
          onChange={handleInputChange}
          value={product.quantity}
          type="text"
          step={1}
          min={0}
          max={1000}
        />
      </LeftContentContainer>
      <RightContentContainer>
        <ItemPrice>${(product.price * product.quantity).toFixed(2)}</ItemPrice>
        <CloseIconContainer onClick={() => onClearProduct(product.id)}>
          <MdClose color="#878585" />
        </CloseIconContainer>
      </RightContentContainer>
    </ItemContainer>
  );
};

export default Item;
