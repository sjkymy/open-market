import React from 'react'
import { TotalInfo } from "./cartPrice.style"

export default function CartPrice({productDetailData, myCartIn}) {

  let productPrice = 0;
  let shippingFee = 0;
  for(let i = 0; i < productDetailData.length; i++) {
    for (let j = 0; j < myCartIn.length; j++) {
      if (productDetailData[i].product_id === myCartIn[j].product_id) {
        productPrice = (myCartIn[j].quantity * productDetailData[i].price) + productPrice;
        shippingFee = productDetailData[i].shipping_fee + shippingFee;
      }
    }
  };
  let totalPay = productPrice + shippingFee;

  return (
    <TotalInfo>
      <div className='product_price'>
        <p className='money_txt'>총 상품 금액</p>
        <p className='money_num'><strong>{productPrice?.toLocaleString()}</strong>원</p>
      </div>
      <div className='product_sale'>
        <p className='money_txt'>상품 할인</p>
        <p className='money_num'><strong>0</strong>원</p>
      </div>
      <div className='shipping_fee'>
        <p className='money_txt'>배송비</p>
        <p className='money_num'>
          <strong>{shippingFee?.toLocaleString()}</strong>원
        </p>
      </div>
      <div className='payment'>
        <p className='money_txt total_txt'>결제 예정금액</p>
        <p className='total_num'><strong className='total'>{totalPay?.toLocaleString()}</strong>원</p>
      </div>
    </TotalInfo>
  )
}
