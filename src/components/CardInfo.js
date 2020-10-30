import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 330px;
    box-sizing: border-box;
    padding: 30px 20px 0 12px;

    @media (max-width: 1000px) {
    width: 250px;
  }
`

const LinkTitle = styled.a`
     cursor: pointer;
        text-decoration: none;
        font-size: 14px;
        font-weight: 700;
        line-height: 22px;
        color: #000;

        :hover {
            text-decoration: underline
        }
`

const Span = styled.span`
font-size: 13px;
    color: #666;

    :hover{
        text-decoration: underline;
        cursor: pointer;
    }
`

const Div = styled.div`
    margin-top: 20px;
    @media (max-width: 1000px) {
    display: none;
  }
`

export const CardInfo = ({ title, assocProducts }) => {

    const assocProd = assocProducts.split(';').filter(el => el.length !== 0)

    return (
        <Wrapper>
            <div>
            <LinkTitle href="#">{title.split('(')[0]}</LinkTitle>
            </div>
            <Div>
                <b>Могут понадобиться:</b>
                {assocProd.map((el, i) => <Span key={i}> {el},</Span>)}
            </Div>
        </Wrapper>
    )
}