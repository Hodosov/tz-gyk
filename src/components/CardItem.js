import React from 'react'
import styled from 'styled-components'
import { CardImage } from './CardImage'
import { CardInfo } from './CardInfo'
import { CardDescription } from './CardDescription'

const CardWrapper = styled.div`
    display: flex;
    min-width: 750px;
    height: 260px;
    border: 1px solid #e0e0e0;
    margin-top: 10px;
    padding: 10px;

    @media (max-width: 1000px) {
    flex-direction: column;
    min-width: 240px;
    height: 550px;
  }
`

export const CardItem = ({ data }) => {
    return (
        <CardWrapper>
            <CardImage />
            <CardInfo
                title={data.title}
                assocProducts={data.assocProducts} />
            <CardDescription
                priceRetail={data.priceRetail}
                priceGold={data.priceGold}
                priceGoldAlt={data.priceGoldAlt}
                priceRetailAlt={data.priceRetailAlt} />
        </CardWrapper>
    )
}