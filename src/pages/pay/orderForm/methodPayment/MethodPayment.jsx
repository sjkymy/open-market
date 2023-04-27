import { useState } from "react";
import {PaymentTitle, PaymentForm, Label, RadioInput,
} from "./methodPayment.style";
import FinalInfo from "../../finalInfo/FinalInfo";

export default function MethodPayment({shippingValue}) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  console.log();

  return (
    <>
    <div>
      <PaymentTitle>결제수단</PaymentTitle>
      <PaymentForm>
        <Label>
          <RadioInput 
            type="radio" 
            name="option" 
            value="CARD" 
            checked={selectedOption === "CARD"}
            onChange={handleOptionChange}
          />신용/체크카드
        </Label>
        <Label>
          <RadioInput 
            type="radio" 
            name="option" 
            value="DEPOSIT"
            checked={selectedOption === "DEPOSIT"}
            onChange={handleOptionChange}
          />무통장 입금
        </Label>
        <Label>
          <RadioInput 
            type="radio" 
            name="option" 
            value="PHONE_PAYMENT"
            checked={selectedOption === "PHONE_PAYMENT"}
            onChange={handleOptionChange}
          />휴대폰 결제
        </Label>
        <Label>
          <RadioInput 
            type="radio" 
            name="option" 
            value="NAVERPAY"
            checked={selectedOption === "NAVERPAY"}
            onChange={handleOptionChange}
          />네이버페이
        </Label>
        <Label>
          <RadioInput 
            type="radio" 
            name="option" 
            value="KAKAOPAY"
            checked={selectedOption === "KAKAOPAY"}
            onChange={handleOptionChange}
          />카카오페이
        </Label>
      </PaymentForm>
    </div>
    <FinalInfo
      selectedOption={selectedOption}
      shippingValue={shippingValue}
    />
    </>
  );
}
