import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Price } from './Price';
import { Cart } from './Cart';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 250px;

    @media (max-width: 1000px) {
    margin-top: 10px;
  }
`

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const StyledButton = styled(({ isActive, ...props }) => <div {...props} />)`
  cursor: pointer;
  margin: 5px;

  ${props =>
    props.isActive &&
    css`
      background: #000;
      color: #fff
    `}
`

const Buttons = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const CardDescription = ({ priceRetail, priceGold, priceRetailAlt, priceGoldAlt }) => {
  return (
    <Wrapper>
      <Tabs
        priceRetail={priceRetail}
        priceGold={priceGold}
        priceRetailAlt={priceRetailAlt}
        priceGoldAlt={priceGoldAlt} />
        <Cart />
    </Wrapper>
  )
}



const Tabs = ({ priceRetail, priceGold, priceRetailAlt, priceGoldAlt, onChange, defaultActive = 0 }) => {

  const [activeTab, setActiveTab] = useState(defaultActive);

  const data = [
    { title: 'За м. кв', mainPrice: priceGold, salePrice: priceGoldAlt },
    { title: 'За упаковку',mainPrice: priceRetail, salePrice: priceRetailAlt },
  ]

  return (
    <TabsWrapper>
      {data[activeTab] && (
        <Price price={data[activeTab]} />
      )}
      <Buttons>
        {data.map(({ title }, index) => (
          <StyledButton
            type="button"
            key={index}
            onClick={() => {
              if (onChange) {
                onChange(index);
              }

              setActiveTab(index);
            }}
            isActive={index === activeTab}
          >
            {title}
          </StyledButton>
        ))}
      </Buttons>

    </TabsWrapper>
  )
}