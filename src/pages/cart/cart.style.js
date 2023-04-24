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

const CartListUl = styled.ul `
  margin-top: 19px;
`

const TotalInfo = styled.div `
  background: #F2F2F2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin: 80px 0 40px;
  padding: 46px 0 34px;
  div {
    width: 320px;
    text-align: center;
    .money_txt{
      line-height: 20px;
      margin-bottom: 12px;
    }
    .total_txt {
      font-weight: bold;
    }
    .total_num {
      font-weight: bold;
      font-size: 18px;
      line-height: 23px;
      color: #EB5757;
    }

    strong {
      font-weight: bold;
      font-size: 24px;
      line-height: 30px;
      &.total {
        font-weight: bold;
        font-size: 36px;
        line-height: 45px;
      }
    }
  }
`

export { MainEl, Title, CartListUl, TotalInfo }