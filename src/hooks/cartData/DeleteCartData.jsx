import { useState } from "react";
import axios from "axios";

export default function useDeleteCartData() {
  const [myCartIn, setMyCartIn] = useState([]);
  const [productData, setProductData] = useState([]);

  const handleDelete = async (cart_item_id, product_id) => {
    const url = `https://openmarket.weniv.co.kr/cart/${cart_item_id}`;
    const userToken = localStorage.getItem("Authorization");
    try {
      await axios.delete(
        url, 
        {
          headers: {
            Authorization: userToken,
          },
        }
      );
      alert("상품이 삭제되었습니다.")
      setProductData((prev) => 
        prev.filter((item) => item.product_id !== product_id)
      );
      setMyCartIn((prev) =>
        prev.filter((item) => item.cart_item_id !== cart_item_id)
      );
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return [myCartIn, setMyCartIn, productData, setProductData, handleDelete];
};