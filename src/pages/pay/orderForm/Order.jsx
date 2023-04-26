import { useState } from "react";
import FinalInfo from "../finalInfo/FinalInfo";
import MethodPayment from "./methodPayment/MethodPayment";
import Orderer from "./orderer/Orderer";
import { ShippingTitle, FinalDiv } from "./orderForm.style";
import ShippingClass from "./shippingClass/ShippingClass";

export default function Order() {
  const [orderName, setOrderName] = useState("");
  const [orderPhone, setOrderPhone] = useState("");
  const [orderEmail, setOrderEmail] = useState("");
  const handleOrdererChange = ((e) => {
    e.target.id === "ordererName" && setOrderName(e.target.value);
    e.target.id === "ordererPhone" && setOrderPhone(e.target.value);
    e.target.id === "ordererEmail" && setOrderEmail(e.target.value);
  });

  const [shippingName, setShippingName] = useState("");
  const [shippingPhone, setShippingPhone] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [shippingMsg, setShippingMsg] = useState("");
  const handleShippingChange = ((e) => {
    e.target.id === "shippingName" && setShippingName(e.target.value);
    e.target.id === "shippingPhone" && setShippingPhone(e.target.value);
    e.target.id === "shippingAddress" && setShippingAddress(e.target.value);
    e.target.id === "shippingMsg" && setShippingMsg(e.target.value);
  });

  return (
    <section>
      <ShippingTitle>배송정보</ShippingTitle>
      <Orderer 
        orderValue={{orderName, orderPhone, orderEmail}}
        handleOnChange={handleOrdererChange}
      />
      <ShippingClass 
        shippingValue={{shippingName, shippingPhone, shippingAddress, shippingMsg}}
        handleOnChange={handleShippingChange}
      />
      <FinalDiv>
        <MethodPayment />
      </FinalDiv>
    </section>
  );
}
