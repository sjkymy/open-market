import { useState, useEffect } from "react";
import axios from "axios";
import { CountDiv, AmountBtn, AmountInp } from "./count.style";

export default function Count({ quantity, cartItem, onCountChange }) {
  const [count, setCount] = useState(quantity);
  const [btnDisable, setBtnDisable] = useState(true);
  
  const handleChangeAmount = (type) => {
    if (type === 'increment') {
      setCount((prev) => prev + 1);
    } else if (type === 'decrement') {
      setCount((prev) => prev - 1);
    };
  };

  useEffect(() => {
    (count > 1) ? 
    setBtnDisable(false) : 
    setBtnDisable(true);
  }, [count]);

  useEffect(() => {
    const handleCountChange = async () => {
      const url = `https://openmarket.weniv.co.kr/cart/${cartItem.cart_item_id}/`;
      const bodyData = {
        "product_id": cartItem.product_id,
        "quantity": parseInt(count),
		    "is_active": cartItem.is_active
      };
      const userToken = localStorage.getItem("Authorization");
      try {
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
      } catch (error) {
        console.log(error);
      }
    };
    handleCountChange();
    onCountChange(count);
  }, [count]);

  return (
    <CountDiv>
      <AmountBtn
        onClick={() => handleChangeAmount('decrement')}
        disabled={btnDisable}
      >-</AmountBtn>
      <AmountInp 
        type="number" 
        value={count} 
        min="1" 
        readOnly
      />
      <AmountBtn 
        onClick={() => handleChangeAmount('increment')}
      >+</AmountBtn>
    </CountDiv>
  )
}
