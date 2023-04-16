import React from 'react'
import { OrderListUl } from './oderList.style'


export default function OrderList({count, product_id
, image, price, store_name, product_name, shipping_fee}) {
    const shippingFee = shipping_fee.toLocaleString();
  return (
    <OrderListUl>
        <li className='product_img'>
            <img src={image} alt={product_name} />
        </li>
        <li className='product_txt'>
            <p className='store_name'>{store_name}</p>
            <p className='product_name'>{product_name}</p>
            <p className='product_count'>수량: {count}개</p>
        </li>
        <li className="sale">-</li>
        <li className='shipping_fee'>
            {shipping_fee ? `${shippingFee}원` : "무료배송"}
        </li>    
        <li className='total_price'>
            {(count * price)?.toLocaleString()}원
        </li>    
    </OrderListUl>
  )
}
