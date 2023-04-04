// import { Link } from 'react-router-dom';
import ProductImage from '../productImage/ProductImage';
import StoreName from "../storeName/StoreName"
import ProductName from '../productName/ProductName'
import ProductPrice from '../productPrice/ProductPrice';
import { useNavigate } from 'react-router-dom';
import { ImgProduct, CardList } from "./card.style";
export default function Card({image, store_name, product_name, price, product_id}) {

  const productId = product_id;
  const navigate = useNavigate();
  const handleNavigate = (() => {
    navigate(`/products/${productId}`)
  })


  return (
      <CardList onClick={handleNavigate}>
        <ImgProduct>
          <ProductImage {...{image, product_name}}/>
        </ImgProduct>
        <StoreName {...{store_name}}/>
        <ProductName {...{product_name}}/>
        <ProductPrice {...{price}}/>
      </CardList>
  )
}
