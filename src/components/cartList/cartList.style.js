import styled from "styled-components";

const CartList = styled.li `
  padding: 20px 0;
  border: 2px solid #E0E0E0;
  border-radius: 10px;
  position: relative;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  .product_check {
    width: 70px;
    text-align: center;
    font-size: 18px;
    line-height: 23px;
  }
`

export { CartList }