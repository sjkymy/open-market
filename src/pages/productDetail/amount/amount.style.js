import styled from "styled-components";

const AmountDiv = styled.div `
  height: 110px;
  display: flex;
  align-items: center;
  /* margin-top: 178px; */
  border-top: 2px solid #C4C4C4;
  border-bottom: 2px solid #C4C4C4;
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

const AmountBtn = styled.button `
  width: 50px;
  height: 50px;
  border: 1px solid #C4C4C4;
`

export {AmountDiv, AmountInp, AmountBtn}