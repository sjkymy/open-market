import React from 'react'
import ProductImage from '../productImage/ProductImage';
import StoreName from "../storeName/StoreName"
import ProductName from '../productName/ProductName'
import ProductPrice from '../productPrice/ProductPrice';
import { ImgProduct, CardList } from "./card.style";

export default function Card({image, store_name, product_name, price}) {
  return (
    <CardList>
      <ImgProduct>
        <ProductImage {...{image, product_name}}/>
      </ImgProduct>
      <StoreName {...{store_name}}/>
      <ProductName {...{product_name}}/>
      <ProductPrice {...{price}}/>
    </CardList>
  )
}
