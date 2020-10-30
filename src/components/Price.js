import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    padding-left: 20px;
`

const MainPrice = styled.div`
    font-size: 25px;
    color: #a7a7a7;
`

const SalePrice = styled.div`
    font-size: 25px;
`

const Div = styled.div`
    padding-right: 10px;
`

export const Price = ({price}) => {
    return(
        <Wrapper>
            <Div>
            По карте клуба: 
            </Div>
            <div>
            <SalePrice>{price.salePrice.toFixed(2)} р</SalePrice>
            <MainPrice>{price.mainPrice.toFixed(2)} р</MainPrice>
            </div>
        </Wrapper>
    )
}