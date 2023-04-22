import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import GetCartData from '../../hooks/cartData/CartData';
import MenuBar from "../../components/menuBar/MenuBar";
import CartListHeader from './cartListHeader/CartListHeader';
import Cartlist from '../../components/cartList/Cartlist';
import { MainEl, Title, CartListUl } from "./cart.style"

export default function Cart() {
  const [productDetailData, setProductDetailData] = useState([]);
  
  const [cartData, isLoading] = GetCartData();
  const myCartIn = cartData.results;

  useEffect(() => {
    let isMounted = true;
    const fetchProductDetails = async () => {
      const myCartIn = cartData.results;
      const myCartInProductIdArr = myCartIn.map((item) => item.product_id);
      const productDetails = [];
      for (const productId of myCartInProductIdArr) {
        try {
          const response = await axios.get(`https://openmarket.weniv.co.kr/products/${productId}/`);
          productDetails.push(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      if (isMounted) {
        setProductDetailData(productDetails);
      }
    };
    if (!isLoading) {
      fetchProductDetails();
    }
    return () => {
      isMounted = false;
    };
  }, [isLoading, cartData]);

  const memoizedProductDetailData = useMemo(() => {
    return productDetailData;
  }, [productDetailData]);
  
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
            productDetailData = {memoizedProductDetailData}
          />)}
        </CartListUl>
      </MainEl>
    </>
  )
}
