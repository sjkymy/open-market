import { useState, useEffect } from "react";
import axios from 'axios';

export default function useProductDetailData(product_id) {
  const [productDetailData, setProductDetailData] = useState([]);
  
  useEffect(() => {
    const detailData = async () => {
      try {
        const response = await axios.get(`https://openmarket.weniv.co.kr/products/${product_id}/`);
        setProductDetailData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    detailData()
  }, [product_id]);

  return ( productDetailData )
}
