import React from 'react'
import ProductImage from '../productImage/ProductImage';
import StoreName from "../storeName/StoreName"
import ProductName from '../productName/ProductName'
import ProductPrice from '../productPrice/ProductPrice';

export default function Card({image, store_name, product_name, price}) {
  return (
    <li>
      <div>
        <ProductImage {...{image}}/>
      </div>
      <StoreName {...{store_name}}/>
      <ProductName {...{product_name}}/>
      <ProductPrice {...{price}}/>
    </li>
  )
}
