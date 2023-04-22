import { useState, useEffect, createContext } from "react";
import TotalPrice from "../totalPrice/TotalPrice";
import BuyCartBtn from "../btnBuyCart/BuyCartBtn";
import {AmountDiv, AmountInp, AmountBtn} from "./amount.style"

export const AmountContext = createContext(null);
export default function Amount({...product}) {
  const [count, setCount] = useState(0);
  const [btnDisable, setBtnDisable] = useState(true);

  const handleChangeAmount = (type) => {
    if (type === 'increment') {
      setCount((prev) => prev + 1);
    } else if (type === 'decrement') {
      setCount((prev) => prev - 1);
    }
  };

  useEffect(() => {
    (count > 0) ? 
    setBtnDisable(false) : 
    setBtnDisable(true)
  }, [count])

  return (
    <>
      <AmountDiv>
        <AmountBtn 
        onClick={() => handleChangeAmount('decrement')}
        disabled={btnDisable}
        >-
        </AmountBtn>
        <AmountInp type="number" value={count} min="0" readOnly />
        <AmountBtn 
        onClick={() => handleChangeAmount('increment')}
        >+
        </AmountBtn>
      </AmountDiv>
      <AmountContext.Provider value={{count, ...product}}>
        <TotalPrice />
        <BuyCartBtn/>
      </AmountContext.Provider>
    </>
  )
}
