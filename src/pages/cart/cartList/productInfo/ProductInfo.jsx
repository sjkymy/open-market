import React from 'react'
import { ProductInfoDiv } from './productInfo.style'

export default function ProductInfo({image, product_name, store_name, price, shipping_fee}) {
  return (
    <ProductInfoDiv>
      <div className='product_img'>
        <img src={image} alt={product_name} />
      </div>
      <div className='product_txt'>
        <p className='store_name'>{store_name}</p>
        <p className='product_name'>{product_name}</p>
        <p className='product_price'>{price?.toLocaleString()}원</p>
        <p className='shipping_fee'>
          택배배송 / {shipping_fee ? `${shipping_fee?.toLocaleString()}원` : "무료배송"}
        </p>
      </div>
    </ProductInfoDiv>
  )
}
