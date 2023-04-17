import { OrdererInfoTitle, OrdererList, OrdererLabel } from "./orderer.style";

export default function Orderer() {
  return (
    <>
      <OrdererInfoTitle>주문자 정보</OrdererInfoTitle>
      <form>
        <ul>
          <OrdererList>
            <OrdererLabel htmlFor="ordererName">
              이름
              <input
                type="text"
                id="ordererName"
                className="inp_orderer"
                required
              />
            </OrdererLabel>
          </OrdererList>
          <OrdererList>
            <OrdererLabel htmlFor="ordererPhone">
              휴대폰
              <input
                type="number"
                id="ordererPhone"
                className="inp_orderer"
                required
              />
            </OrdererLabel>
          </OrdererList>
          <OrdererList>
            <OrdererLabel htmlFor="ordererEmail">
              이메일
              <input
                type="email"
                id="ordererEmail"
                className="inp_orderer"
                required
              />
            </OrdererLabel>
          </OrdererList>
        </ul>
      </form>
    </>
  );
}
