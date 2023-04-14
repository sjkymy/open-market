import React from 'react'
import { Button } from '../../../components/button/Button';
import { BtnGroup } from './buyCart.style';

export default function BuyCart() {
  return (
    <BtnGroup>
        <Button className="large">바로구매</Button>
        <Button className="dark large">장바구니</Button>
    </BtnGroup>
  )
}
