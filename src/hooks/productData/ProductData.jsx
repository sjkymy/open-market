import { useState, useEffect } from "react";
import axios from "axios";

export default function useProductData() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(null);
  const [page, setPage] = useState(() => {
    const storedPage = localStorage.getItem("page");
    return storedPage ? JSON.parse(storedPage) : 1;
  });

    useEffect(() => {
    const getNextPageData = async () => {
      try {
        const response = await axios.get(`https://openmarket.weniv.co.kr/products/?page=${page}`);
        const productData = response.data.results;
        const itemsCount = response.data.count;
        setItems(productData);
        setCount(itemsCount)
        setIsLoaded(true)
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    getNextPageData();
  }, [page]);

  useEffect(() => {
    localStorage.setItem("page", JSON.stringify(page));
  }, [page]);

  return {items, isLoaded, error, count, page, setPage}
};