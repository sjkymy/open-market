import { useState, useEffect } from 'react';
import GetCartData from '../../hooks/cartData/CartData';
// import GetProductDetailData from '../../hooks/productDetailData/ProductDetailData';
import MenuBar from "../../components/menuBar/MenuBar";
import CartListHeader from './cartListHeader/CartListHeader';
import Cartlist from '../../components/cartList/Cartlist';
import { MainEl, Title, CartListUl } from "./cart.style"

export default function Cart() {
  // const [myCartInProductId, setMyCartInProductId] = useState([]);
  // const [myCartIn, setMyCartIn] = useState([])

  const cartData = GetCartData();
  const myCartIn = cartData.data?.results;
  const myCartInProductId = myCartIn && myCartIn.map((item) => {
    return item.product_id
  });
  console.log(myCartInProductId);
  
  return (
    <>
      <MenuBar/>
      <MainEl>
        <Title>장바구니</Title>
        <CartListHeader/>
        <CartListUl>
          {myCartIn && myCartIn.map((item) => <Cartlist
            key={item.cart_item_id}
            {...item}
          />)}
        </CartListUl>
      </MainEl>
    </>
  )
}
