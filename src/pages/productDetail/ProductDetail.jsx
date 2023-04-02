import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const [product, setProduct] = useState([]);
  let {product_id} = useParams();
  // console.log({product_id});
    useEffect(() => {
      const detailData = async () => {
          try {
              const response = await axios.get(`https://openmarket.weniv.co.kr/products/${product_id}/`);
              console.log(response);
              setProduct(response.data)
          } catch (error) {
              console.log(error);
          }
      };
      detailData()
    }, [product_id]);
  return (
    <>
      <div>product Detail</div>
      <div>{product.product_name}</div>
    </>
  )
}
