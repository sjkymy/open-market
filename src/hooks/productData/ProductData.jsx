import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductData() {
  const [items, setItems] = useState([])
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null)
  // const [page, setPage] = useState(1);

    // useEffect(() => {
  //   const getNextPageData = async () => {
  //     try {
  //       const response = await axios.get(`https://openmarket.weniv.co.kr/products/?page=${page+1}`);
  //       console.log(response);
  //       const productData = response.data.results;
  //       setItems((prevItems) => [...prevItems, ...productData]);
  //       setPage((prevPage) => prevPage + 1);
  //       setIsLoaded(true)
  //     } catch (error) {
  //       setError(error);
  //       console.log(error);
  //     }
  //   };
  //   getNextPageData();
  // }, [])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://openmarket.weniv.co.kr/products/?page=1");
        // console.log(response);
        const productData = response.data.results;
        setItems(productData);
        setIsLoaded(true)
      } catch (error) {
        setError(error)
        console.log(error);
      }
    }
    getData()
  }, [])

  return {items, isLoaded, error}
}
