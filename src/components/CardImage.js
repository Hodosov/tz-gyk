import React from 'react'
import styled from 'styled-components'
import pic from '../pic.jpg'

const Wrapper = styled.div`
    display: flex;
`

const Img = styled.img`
    width: 160px;
    height: 160px;
    padding: 0 30px;
`

export const CardImage = () => {
    return (
        <Wrapper>
            <Img src={pic} alt="logo" />
        </Wrapper>
    )
}