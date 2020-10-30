import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    margin-top: 10px;
`

const Input = styled.input`
    width: 40px;
`

const CartButton = styled.button`
  width: 148px;
  background: #f90;
  color: #fff;
  width: 100%;
  cursor: pointer;
  :hover {
      background: #000;
  }
`

export const Cart = () => {
    let [count, setCount] = useState(1)

    const addCount = () => {
        setCount(prev => count++)
    }

    const decremCount = () => {
        if (count > 1) {
            setCount(prev => count--)
        }
    }

    const onchangeHandler = (e) => {
        if (e.target.value >= 0) {
            setCount(count = e.target.value)
        } else {
            setCount(1)
        }
    }

    return (
        <Wrapper>
            <Input type="text" value={count}
                onChange={(e) => onchangeHandler(e)} />
            <div>
                <button onClick={addCount}>▲</button>
                <button onClick={decremCount}>▼</button>
            </div>

            <CartButton>В КОРЗИНУ</CartButton>
        </Wrapper>
    )
}