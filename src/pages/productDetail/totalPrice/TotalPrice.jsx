import styled from "styled-components";

const TotalDiv = styled.div `
    display: flex;
`
const TotalTxt = styled.p `
    font-size: 18px;
    line-height: 23px;
`

const TotalAmountTxt = styled.p `
    font-size: 18px;
    line-height: 23px;
    color: #767676;
`

const TotalPriceTxt = styled.p `
    
`

export default function TotalPrice() {
  return (
    <TotalDiv>
        <TotalTxt>총 상품 금액</TotalTxt>
        <div>
            <TotalAmountTxt>
                총 수량
            </TotalAmountTxt>
        </div>
    </TotalDiv>
  )
}
