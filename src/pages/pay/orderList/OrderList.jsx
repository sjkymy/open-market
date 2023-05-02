// import { useState } from 'react';
import { OrderListLi } from './oderList.style'

export default function OrderList({count, product_id
, image, price, store_name, product_name, shipping_fee, type, myCartIn}) {

  const shippingFee = shipping_fee.toLocaleString();
  
  if (type === "direct_order") {
    return (
      <OrderListLi>
        <div className='product_img'>
          <img src={image} alt={product_name} />
        </div>
        <div className='product_txt'>
          <p className='store_name'>{store_name}</p>
          <p className='product_name'>{product_name}</p>
          <p className='product_count'>수량: {count}개</p>
        </div>
        <div className="sale">-</div>
        <div className='shipping_fee'>
          {shipping_fee ? `${shippingFee}원` : "무료배송"}
        </div>    
        <div className='total_price'>
          {(count * price)?.toLocaleString()}원
        </div>
      </OrderListLi>
    )
  };
  if (type === "cart_order") {
    const cartItem = () => {
      for(let i = 0; i < myCartIn?.length; i++) {
        const item = myCartIn[i];
        if(item.product_id === product_id) {
          return {
            quantity: item.quantity
          }
        };
      };
      return {
        quantity: ""
      }
    };
    const {quantity} = cartItem();
    return (
      <>
      <OrderListLi>
        <div className='product_img'>
          <img src={image} alt={product_name} />
        </div>
        <div className='product_txt'>
          <p className='store_name'>{store_name}</p>
          <p className='product_name'>{product_name}</p>
          <p className='product_count'>
            수량: {quantity}개
          </p>
        </div>
        <div className="sale">-</div>
        <div className='shipping_fee'>
          {shipping_fee ? `${shippingFee}원` : "무료배송"}
        </div>
        <div className='total_price'>
          {shipping_fee ? (quantity * price + shipping_fee)?.toLocaleString() :
           (quantity * price)?.toLocaleString()
          }원
        </div>
      </OrderListLi>
      </>
    )
  };
};