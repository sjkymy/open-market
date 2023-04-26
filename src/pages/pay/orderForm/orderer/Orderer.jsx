import { OrdererInfoTitle, OrdererList, OrdererLabel } from "./orderer.style";

export default function Orderer({orderValue, handleOnChange}) {


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
                value={orderValue.orderName}
                onChange={handleOnChange}
                className="inp_orderer"
              />
            </OrdererLabel>
          </OrdererList>
          <OrdererList>
            <OrdererLabel htmlFor="ordererPhone">
              휴대폰
              <input
                type="number"
                id="ordererPhone"
                value={orderValue.orderPhone}
                onChange={handleOnChange}
                className="inp_orderer"
              />
            </OrdererLabel>
          </OrdererList>
          <OrdererList>
            <OrdererLabel htmlFor="ordererEmail">
              이메일
              <input
                type="email"
                id="ordererEmail"
                value={orderValue.orderEmail}
                onChange={handleOnChange}
                className="inp_orderer"
              />
            </OrdererLabel>
          </OrdererList>
        </ul>
      </form>
    </>
  );
}
