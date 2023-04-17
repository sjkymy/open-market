import FinalInfo from "../finalInfo/FinalInfo";
import MethodPayment from "./methodPayment/MethodPayment";
import Orderer from "./orderer/Orderer";
import { ShippingTitle } from "./orderForm.style";
import ShippingClass from "./shippingClass/ShippingClass";

export default function Order() {
  return (
    <section>
      <ShippingTitle>배송정보</ShippingTitle>
      <Orderer />
      <ShippingClass />
      <MethodPayment />
      <FinalInfo />
    </section>
  );
}
