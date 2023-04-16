import styled from "styled-components";
import { useState, useEffect, createContext } from "react";
import TotalPrice from "../totalPrice/TotalPrice";
import BuyCartBtn from "../btnBuyCart/BuyCartBtn";

const AmountDiv = styled.div `
    height: 110px;
    display: flex;
    align-items: center;
    margin-top: 178px;
    border-top: 2px solid #C4C4C4;
    border-bottom: 2px solid #C4C4C4;
`

const AmountInp = styled.input `
    width: 50px;
    height: 50px;
    padding: 10px 10px;
    border: 1px solid #C4C4C4;
    font-size: 18px;
    text-align: center;
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

const AmountBtn = styled.button `
    width: 50px;
    height: 50px;
    border: 1px solid #C4C4C4;
`
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
