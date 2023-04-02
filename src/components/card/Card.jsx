// import axios from 'axios';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductImage from '../productImage/ProductImage';
import StoreName from "../storeName/StoreName"
import ProductName from '../productName/ProductName'
import ProductPrice from '../productPrice/ProductPrice';
import { ImgProduct, CardList } from "./card.style";

export default function Card({image, store_name, product_name, price, product_id}) {
  // const navigate = useNavigate();
  // const [detail, setDetail] = useState([]);
  const productId = product_id;

  // const handleDetail = () => {
  //   const productId = product_id;
  //   const detailData = async () => {
  //     try {
  //       const response = await axios.get(`https://openmarket.weniv.co.kr/products/${productId}/`);
  //       const itemDetail = response.data.product_id;
  //       navigate(`/product/${itemDetail}`);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   detailData();
  // };

  return (
    <Link to={`/product/${productId}`}>
    <CardList>
      <ImgProduct>
        <ProductImage {...{image, product_name}}/>
      </ImgProduct>
      <StoreName {...{store_name}}/>
      <ProductName {...{product_name}}/>
      <ProductPrice {...{price}}/>
    </CardList>
    </Link>
  )
}
