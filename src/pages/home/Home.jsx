import { useState, useEffect } from "react";
import axios from "axios";

export default function Product() {
    const [items, setItems] = useState([])
    const [isloaded, setIsloaded] = useState(false);
    

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get("https://openmarket.weniv.co.kr/products");
        const productData = response.data.results;
        setItems(productData);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct()
  }, [])
  console.log(items);

  return (
    <div>Product</div>
  )
}
