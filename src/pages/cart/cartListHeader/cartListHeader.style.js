import styled from "styled-components";

const CartHeader = styled.ul `
  width: 1280px;
  padding: 19px 0;
  display: flex;
  justify-content: center;
  background: #F2F2F2;
  border-radius: 10px;
  margin: 52px 0 16px;
  li {
    width: 300px;
    display: inline-block;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    &:nth-child(1) {
      width: 70px;
    }
    &:nth-child(2) {
      width: 590px;
    }
  }
`

export { CartHeader }