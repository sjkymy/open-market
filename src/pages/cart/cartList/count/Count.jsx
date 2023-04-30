import { useState, useEffect } from "react";
// import axios from "axios";
import { CountWrapper, CountDiv, AmountBtn, AmountInp } from "./count.style";
import useQuantityData from "../../../../hooks/quantityData/quantityData";
import Loading from "../../../loading/Loading";
import { Button } from "../../../../components/button/Button";

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

    onCountChange(count);
  }, [count, onCountChange]);

  const [handleCountChange, isLoading] = useQuantityData(cartItem.cart_item_id, cartItem.product_id, count, cartItem.is_active)
  
  if (isLoading) {
    return (<Loading/>)
  } else {
  return (
    <CountWrapper>
    <CountDiv>
      <AmountBtn
        onClick={() => {
          handleChangeAmount('decrement')
        }}
        disabled={btnDisable}
      >-</AmountBtn>
      <AmountInp 
        type="number" 
        value={count} 
        min="1" 
        readOnly
      />
      <AmountBtn 
        onClick={() => {
          handleChangeAmount('increment')
        }}
      >+</AmountBtn>
      
    </CountDiv>
    <Button 
      className="ms"
      onClick={handleCountChange}
    >수정
    </Button>
    </CountWrapper>
  )}
}
