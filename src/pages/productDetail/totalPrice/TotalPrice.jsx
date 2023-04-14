import { useContext } from 'react';
import { AmountContext } from "../amount/Amount";
import {TotalDiv, TotalTxt, TotalAmountDiv, TotalAmountTxt, TotalPriceTxt } from "./totalPrice.style"

export default function TotalPrice() {
    const { count, price } = useContext(AmountContext);

  return (
    <TotalDiv>
        <TotalTxt>총 상품 금액</TotalTxt>
        <TotalAmountDiv>
            <TotalAmountTxt>
                총 수량 <span>{count}</span>개
            </TotalAmountTxt>
            <TotalPriceTxt>
                {(count * price)?.toLocaleString()}원
            </TotalPriceTxt>
        </TotalAmountDiv>
    </TotalDiv>
  )
}
