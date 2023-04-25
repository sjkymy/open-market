import styled from "styled-components";

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

export { TotalInfo }