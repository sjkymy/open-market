import { useParams } from "react-router-dom";
import useProductDetailData from '../../hooks/productDetailData/ProductDetailData';
import MenuBar from "../../components/menuBar/MenuBar";
// import { Img } from "../../components/productImage/productImage.style";
import { MainEl, ProductInfoSection, ProductImage, Image, ProductOeder, StoreName, ProductName, ProductPrice, ProductStock } from "./productDetail.style";
import Amount from "./amount/Amount";

export default function ProductDetail() {
  let { product_id } = useParams();
  const productDetailData = useProductDetailData(product_id);
  
  return (
    <>    
      <MenuBar/>
      <MainEl>
        <ProductInfoSection>
          <ProductImage>
            <Image src={productDetailData.image} alt={productDetailData.product_name} />
          </ProductImage>
          <ProductOeder>
            <StoreName>{productDetailData.store_name}</StoreName>
            <ProductName>
              {productDetailData.product_name}
            </ProductName>
            <ProductPrice>
              {productDetailData.price?.toLocaleString()}원
            </ProductPrice>
            <ProductStock>
              남은 수량: <strong>{productDetailData.stock}</strong>개
            </ProductStock>
            <Amount 
              {...productDetailData}
            />
          </ProductOeder>
        </ProductInfoSection>
      </MainEl>
    </>
  )
}
