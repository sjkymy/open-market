import { useState, useEffect } from 'react';
import axios from 'axios';
import useGetCartData from '../../hooks/cartData/GetCartData';
import useDeleteCartData from '../../hooks/cartData/DeleteCartData';
import MenuBar from "../../components/menuBar/MenuBar";
import CartListHeader from './cartListHeader/CartListHeader';
import Cartlist from './cartList/Cartlist';
import { Button } from '../../components/button/Button';
import { MainEl, Title, CartListUl } from "./cart.style"
import CartPrice from './cartPrice/CartPrice';

export default function Cart() {
  const [productDetailData, setProductDetailData] = useState([]);
  const [cartData, isLoading] = useGetCartData();
  const [myCartIn, setMyCartIn, handleDelete] = useDeleteCartData();

  // 상품 정보 불러오기(이미지, 가격 등을 위해서)
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

  useEffect(() => {
    setMyCartIn(cartData.results);
  }, [cartData]);
  
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
            productDetailData={productDetailData}
            handleDelete={handleDelete}
          />)}
        </CartListUl>
        <CartPrice 
          productDetailData={productDetailData}
          myCartIn={myCartIn}
        />
        <Button 
          className='total'
        >주문하기
        </Button>
      </MainEl>
    </>
  )
}
