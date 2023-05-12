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

  const compressImage = async (imageUrl) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageUrl;

    return new Promise((resolve) => {
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        canvas.toBlob(
          (blob) => {
            const compressedImageUrl = URL.createObjectURL(blob);
            resolve(compressedImageUrl);
          },
          "image/jpeg",
          0.5
        );
      };
    });
  };

  useEffect(() => {
    const getNextPageData = async () => {
      try {
        const response = await axios.get(`https://openmarket.weniv.co.kr/products/?page=${page}`);
        const productData = response.data.results;
        const itemsCount = response.data.count;

        const compressedProductData = await Promise.all(
          productData.map(async (product) => {
            const compressedImage = await compressImage(product.image);
            return { ...product, image: compressedImage };
          })
        );

        setItems(compressedProductData);
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