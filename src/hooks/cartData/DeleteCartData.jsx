import { useState } from "react";
import axios from "axios";

export default function useDeleteCartData() {
  const [myCartIn, setMyCartIn] = useState([]);

  const handleDelete = async (cart_item_id) => {
    const url = `https://openmarket.weniv.co.kr/cart/${cart_item_id}`;
    const userToken = localStorage.getItem("Authorization");
    try {
      const response = await axios.delete(
        url, 
        {
          headers: {
            Authorization: userToken,
          },
        }
      );
      console.log(response);
      setMyCartIn((prev) =>
        prev.filter((item) => item.cart_item_id !== cart_item_id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return [myCartIn, setMyCartIn, handleDelete];
};