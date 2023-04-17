import {
  ShippingInfoTitle,
  ShippingList,
  ShippingLabel,
} from "./shippingClass.style";

export default function ShippingClass() {
  return (
    <>
      <ShippingInfoTitle>배송지 정보</ShippingInfoTitle>
      <form>
        <ul>
          <ShippingList>
            <ShippingLabel htmlFor="ordererName">
              수령인
              <input
                type="text"
                id="ordererName"
                className="inp_orderer"
                required
              />
            </ShippingLabel>
          </ShippingList>
          <ShippingList>
            <ShippingLabel htmlFor="ordererPhone">
              휴대폰
              <input
                type="number"
                id="ordererPhone"
                className="inp_orderer"
                required
              />
            </ShippingLabel>
          </ShippingList>
          <ShippingList>
            <ShippingLabel htmlFor="ordererEmail">
              배송주소
              <input
                type="text"
                id="ordererEmail"
                className="inp_orderer"
                required
              />
            </ShippingLabel>
          </ShippingList>
          <ShippingList>
            <ShippingLabel htmlFor="ordererEmail">
              배송 메시지
              <input
                type="text"
                id="ordererEmail"
                className="inp_orderer"
                required
              />
            </ShippingLabel>
          </ShippingList>
        </ul>
      </form>
    </>
  );
}
