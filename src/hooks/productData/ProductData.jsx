import { useState, useEffect } from "react";
import axios from "axios";
// import imageCompression from "browser-image-compression";
// import imageFileResizer from "react-image-file-resizer";

export default function useProductData() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(null);
  const [page, setPage] = useState(() => {
    const storedPage = localStorage.getItem("page");
    return storedPage ? JSON.parse(storedPage) : 1;
  });

  // useEffect(() => {
  //   const getNextPageData = async () => {
  //     try {
  //       const response = await axios.get(`https://openmarket.weniv.co.kr/products/?page=${page}`);
  //       const productData = response.data.results;
  //       const itemsCount = response.data.count;

  //       // 압축된 이미지 데이터를 담을 빈 배열 생성
  //       const compressedImages = [];

  //       // 각 상품의 이미지를 압축하고 배열에 저장
  //       productData.forEach(async (product) => {
  //         const options = {
  //           maxSizeMB: 1, // 최대 파일 크기 (MB)
  //           // maxWidthOrHeight: 200, // 최대 이미지 가로 또는 세로 크기 (px)
  //         };
  //         try {
  //           // 이미지 URL을 fetch API를 사용하여 Blob 객체로 변환
  //           const response = await fetch(product.image);
  //           const blob = await response.blob();

  //           // 압축된 Blob 객체를 생성하고 배열에 저장
  //           const compressedBlob = await imageCompression(blob, options);
  //           compressedImages.push(compressedBlob);
  //         } catch (error) {
  //           console.log(error);
  //         }
  //       });

  //       // 압축된 이미지 데이터를 각 상품 객체에 추가하여 저장
  //       const productDataWithCompressedImages = productData.map(
  //         (product, index) => {
  //           return {
  //             ...product,
  //             compressedImage: compressedImages[index],
  //           };
  //         }
  //       );

  //       setItems(productDataWithCompressedImages);
  //       setCount(itemsCount)
  //       setIsLoaded(true)
  //     } catch (error) {
  //       setError(error);
  //       console.log(error);
  //     }
  //   };
  //   getNextPageData();
  // }, [page]);

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