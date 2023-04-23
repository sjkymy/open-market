import styled from "styled-components";

const CountDiv = styled.div `
  width: 300px;
  text-align: center;
`

const AmountBtn = styled.button `
  width: 50px;
  height: 50px;
  border: 1px solid #C4C4C4;
`

const AmountInp = styled.input `
  width: 50px;
  height: 50px;
  padding: 10px 10px;
  border: 1px solid #C4C4C4;
  font-size: 18px;
  text-align: center;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export { CountDiv, AmountBtn, AmountInp }