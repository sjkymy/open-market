import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../card/Card";
import FailLoadData from "../failLoadData/FailLoadData";
import { MainEl, ProductList } from "./product.style";

export default function Product() {
  const [items, setItems] = useState([])
  const [isloaded, setIsloaded] = useState(false);
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://openmarket.weniv.co.kr/products/");
        const productData = response.data.results;
        setItems(productData);
        setIsloaded(true)
      } catch (error) {
        setError(error)
        console.log(error);
      }
    }
    getData()
  }, [])

  return (
  (error !== null) ? <FailLoadData/> :
  !isloaded ? <div>로딩중...</div> :
    <MainEl>
      <ProductList>
        {items.map((item) => <Card key={item.product_id} {...item}/>)}
      </ProductList>
    </MainEl>
  )
}
