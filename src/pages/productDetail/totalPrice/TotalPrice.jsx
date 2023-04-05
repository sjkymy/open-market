import styled from "styled-components";
import { useContext } from 'react';
import { AmountContext } from "../amount/Amount";

const TotalDiv = styled.div `
    display: flex;
    margin: 46px auto 30px;
`
const TotalTxt = styled.p `
    font-size: 18px;
    line-height: 23px;
    color: #000;
    margin-right: auto;
`

const TotalAmountDiv = styled.div `
    margin-left: auto;
`

const TotalAmountTxt = styled.p `
    font-size: 18px;
    line-height: 23px;
    color: #767676;
    span {
        color: var(--color-primary);
        font-weight: bold;
    }
`

const TotalPriceTxt = styled.p `
    position: relative;
    font-size: 36px;
    line-height: 45px;
    font-weight: bold;
    color: var(--color-primary);
    ::before {
        position: absolute;
    }
`

export default function TotalPrice() {
    const { count } = useContext(AmountContext);

  return (
    <TotalDiv>
        <TotalTxt>총 상품 금액</TotalTxt>
        <TotalAmountDiv>
            <TotalAmountTxt>
                총 수량 <span>{count}</span>개
            </TotalAmountTxt>
            <TotalPriceTxt>
                원
            </TotalPriceTxt>
        </TotalAmountDiv>
    </TotalDiv>
  )
}
