import styled from "styled-components";
const TotalDiv = styled.div `
    display: flex;
    align-items: center;
    margin: 46px auto 30px;
`
const TotalTxt = styled.p `
    font-size: 18px;
    font-weight: bold;
    line-height: 23px;
    color: #000;
    margin-right: auto;
`

const TotalAmountDiv = styled.div `
    margin-left: auto;
    display: flex;
    align-items: center;
`

const TotalAmountTxt = styled.p `
    font-size: 18px;
    line-height: 23px;
    color: #767676;
    margin-right: 11px;
    span {
        color: var(--color-primary);
        font-weight: bold;
    }
`

const TotalPriceTxt = styled.p `
    font-size: 36px;
    line-height: 45px;
    font-weight: bold;
    color: var(--color-primary);
    margin-left: 11px;
    padding-left: 20px;
    position: relative;
    ::before {
        position: absolute;
        content: " ";
        width: 2px;
        height: 25px;
        left: 0;
        top: 11px;
        background-color: #C4C4C4;
    }
`

export {TotalDiv, TotalTxt, TotalAmountDiv, TotalAmountTxt, TotalPriceTxt }