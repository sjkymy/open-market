import styled from "styled-components";

const PaymentTitle  = styled.h4 `
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  margin: 70px 0 18px;
`

const PaymentForm = styled.form `
  border-top: 2px solid #C4C4C4;
  border-bottom: 2px solid #C4C4C4;
  width: 760px;
  padding: 18px 5px;
`

const Label = styled.label `
  margin-right: 20px;
  cursor: pointer;
`

const RadioInput = styled.input `
  border: 2px solid #C4C4C4;
  cursor: pointer;
`

export { PaymentTitle, PaymentForm, Label, RadioInput }