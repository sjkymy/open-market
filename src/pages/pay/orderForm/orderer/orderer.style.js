import styled from "styled-components";

const OrdererInfoTitle = styled.h4 `
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  border-bottom: 2px solid #C4C4C4;
  padding-bottom: 8px;
`

const OrdererList = styled.li `
  padding: 8px 0;
  border-bottom: 1px solid #C4C4C4;
`

const OrdererLabel = styled.label `
  line-height: 20px;
  display: flex;
  align-items: center;
  input {
    width: 334px;
    height: 40px;
    border: 1px solid #C4C4C4;
    margin: 0 776px 0 auto;
    padding: 0 10px;
  }
`

export {OrdererInfoTitle, OrdererList, OrdererLabel}