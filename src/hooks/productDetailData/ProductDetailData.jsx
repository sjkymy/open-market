import { useState, useEffect } from "react";
import axios from 'axios';
// import { useParams } from "react-router-dom";

export default function GetProductDetailData(product_id) {
  const [productDetailData, setProductDetailData] = useState([]);
  
  useEffect(() => {
    const detailData = async () => {
      try {
          const response = await axios.get(`https://openmarket.weniv.co.kr/products/${product_id}/`);
          setProductDetailData(response.data);
          console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    detailData()
  }, []);

  return ( productDetailData )
}
