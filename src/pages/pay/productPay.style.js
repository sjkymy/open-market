import styled from "styled-components";

const MainEl = styled.main `
    width: 1280px;
    margin: 150px auto 0;
    padding-bottom: 156px;
`

const Title = styled.h2 `
    font-size: 36px;
    font-weight: bold;
    text-align: center;
`

const OrderListUl = styled.ul `

`

const TotalPriceTxt = styled.p `
    font-size: 18px;
    font-weight: bold;
    line-height: 23px;
    margin: 35px 0 98px;
    text-align: right;
    span {
        font-size: 24px;
        line-height: 30px;
        color: #EB5757;
    }
`

export {MainEl, Title, OrderListUl, TotalPriceTxt}