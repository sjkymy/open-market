// import { useState, useEffect } from "react";
// import axios from 'axios';
import { useParams } from "react-router-dom";
import GetProductDetailData from '../../hooks/productDetailData/ProductDetailData';
import MenuBar from "../../components/menuBar/MenuBar";
import { Img } from "../../components/productImage/productImage.style";
import { MainEl, ProductInfoSection, ProductImage, ProductOeder, StoreName, ProductName, ProductPrice } from "./productDetail.style";
import Amount from "./amount/Amount";

export default function ProductDetail() {
  let { product_id } = useParams();
  const productDetailData = GetProductDetailData(product_id)
  
  return (
    <>    
      <MenuBar/>
      <MainEl>
        <ProductInfoSection>
          <ProductImage>
            <Img src={productDetailData.image} alt={productDetailData.product_name} />
          </ProductImage>
          <ProductOeder>
            <StoreName>{productDetailData.store_name}</StoreName>
            <ProductName>
              {productDetailData.product_name}
            </ProductName>
            <ProductPrice>
              {productDetailData.price?.toLocaleString()}원
            </ProductPrice>
            <Amount 
              {...productDetailData}
            />
          </ProductOeder>
        </ProductInfoSection>
      </MainEl>
    </>
  )
}
