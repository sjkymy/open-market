import axios from "axios";
import { useState } from "react";

export default function useQuantityData(cart_item_id, product_id, count, is_active) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCountChange = async () => {
    const url = `https://openmarket.weniv.co.kr/cart/${cart_item_id}/`;
    const bodyData = {
      "product_id": product_id,
      "quantity": parseInt(count),
      "is_active": is_active
    };
    const userToken = localStorage.getItem("Authorization");
    try {
      setIsLoading(true);
      setTimeout(async () => {
      const response = await axios.put(
        url,
        bodyData,
        {
          headers: {
            "Authorization": userToken,
          }
        }
      );
      console.log(response);
      setIsLoading(false);
      window.location.reload();
    }, 1000)
    } catch (error) {
      setIsLoading(false);
      alert(error.response.data.FAIL_message);
    }
  };
  return [handleCountChange, isLoading]
};