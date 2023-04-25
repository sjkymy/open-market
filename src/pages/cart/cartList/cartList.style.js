import styled from "styled-components";
import closeIcon from "../../../assets/images/icon-close.svg"

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
  .delete_btn {
    width: 22px;
    height: 22px;
    position: absolute;
    padding: 0;
    margin: 0;
    right: 18px;
    top: 18px;
    background: none;
    border: none;
    background-image: url(${closeIcon});
    background-position: center center;
  }
`

export { CartList }