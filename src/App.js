import React from 'react'
import custumData from './data/products.json'
import styled from 'styled-components';
import { CardItem } from './components/CardItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const App = () => {

  return (
    <Wrapper>
      {custumData.map(el => <CardItem data={el} key={el.productId} />)}
    </Wrapper>
  );
}