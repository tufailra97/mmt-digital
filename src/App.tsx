import styled, { createGlobalStyle } from 'styled-components';
import { ShoppingCart } from 'components/shopping-cart';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
  }


  * {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eceae9;
`;

const App = () => {
  return (
    <Container className="App">
      <GlobalStyle />
      <ShoppingCart />
    </Container>
  );
};

export default App;
