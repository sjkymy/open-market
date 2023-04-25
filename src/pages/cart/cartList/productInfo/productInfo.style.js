import styled from "styled-components";

const ProductInfoDiv = styled.div `
  width: 590px;
  display: flex;
  margin-left: 10px;
  /* align-items: center; */
  .product_img {
    > img {
      width: 160px;
      height: 160px;
      border-radius: 10px;
    }
  }

  .product_txt {
    margin-left: 36px;
    .store_name {
      font-size: 14px;
      line-height: 18px;
      color: #767676;
      margin-bottom: 10px;
    }
    .product_name {
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 10px;
    }
    .product_price {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 40px;
    }
    .shipping_fee {
      color: #767676;
    }
  }
`

export { ProductInfoDiv }