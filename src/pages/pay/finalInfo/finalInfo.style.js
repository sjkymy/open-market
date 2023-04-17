import styled from "styled-components";

const FinalInfoTitle  = styled.h4 `
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  margin: 70px 0 18px;
`

const FinalInfoDiv = styled.div `
  border: 2px solid var(--color-primary);
  width: 480px;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
`

const FinalInfoUl = styled.ul `
  padding: 34px 35px 0 30px;
`

const FinalInfoList = styled.li `
  line-height: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  &.shipping-fee {
    padding-bottom: 19px;
    border-bottom: 1px solid #C4C4C4;
  }
  &.total-price {
    margin-top: 5px;
    display: flex;
    align-items: center;
  }
  strong {
    font-weight: bold;
    font-size: 18px;
    margin-right: 4px;
    &.pay-price {
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
      color: #EB5757;
    }
  }
`

const PayBtnDiv = styled.div `
display: inline-block;
  margin-top: 10px;
  background: #F2F2F2;
  text-align: center;
  padding-top: 30px;
  #agree {
    /* margin-top: 30px  */
  }
`

export {FinalInfoTitle, FinalInfoDiv, FinalInfoUl, FinalInfoList, PayBtnDiv}