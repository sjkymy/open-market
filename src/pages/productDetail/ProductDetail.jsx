import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import MenuBar from "../../components/menuBar/MenuBar";
import { Img } from "../../components/productImage/productImage.style";
import { MainEl, ProductInfoSection, ProductImage, ProductOeder, StoreName, ProductName, ProductPrice } from "./productDetail.style";
import Amount from "./amount/Amount";
import TotalPrice from "./totalPrice/TotalPrice";

export default function ProductDetail() {
  const [product, setProduct] = useState([]);
  let {product_id} = useParams();
  useEffect(() => {
    const detailData = async () => {
        try {
            const response = await axios.get(`https://openmarket.weniv.co.kr/products/${product_id}/`);
            console.log(response.data);
            setProduct(response.data)
        } catch (error) {
            console.log(error);
        }
    };
    detailData()
  }, [product_id]);
  
  return (
    <>    
      <MenuBar/>
      <MainEl>
        <ProductInfoSection>
          <ProductImage>
            <Img src={product.image} alt="" />
          </ProductImage>
          <ProductOeder>
            <StoreName>{product.store_name}</StoreName>
            <ProductName>
              {product.product_name}
            </ProductName>
            <ProductPrice>
              {product.price?.toLocaleString()}원
            </ProductPrice>
            <Amount/>
            <TotalPrice/>
          </ProductOeder>
        </ProductInfoSection>
      </MainEl>
    </>
  )
}
