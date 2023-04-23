import { useState, useEffect } from "react";
import { CountDiv, AmountBtn, AmountInp } from "./count.style";

export default function Count({ quantity, onCountChange }) {
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

  return (
    <CountDiv>
      <AmountBtn
        onClick={() => handleChangeAmount('decrement')}
        disabled={btnDisable}
      >-
      </AmountBtn>
      <AmountInp type="number" value={count} min="1" readOnly />
      <AmountBtn 
      onClick={() => handleChangeAmount('increment')}
      >+
      </AmountBtn>
    </CountDiv>
  )
}
