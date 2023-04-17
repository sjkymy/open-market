import { useContext } from "react";
import { ProductContext } from "../ProductPay";
import { Button } from "../../../components/button/Button";
import {
  FinalInfoTitle,
  FinalInfoDiv,
  FinalInfoUl,
  FinalInfoList,
  PayBtnDiv,
} from "./finalInfo.style";

export default function FinalInfo() {
  const { count, product } = useContext(ProductContext);

  const shippingFee = product.shipping_fee ? product.shipping_fee : 0;
  const productPrice = count * product.price;
  const totalPrice = productPrice + shippingFee;

  return (
    <article>
      <FinalInfoTitle>최종결제 정보</FinalInfoTitle>
      <FinalInfoDiv>
        <FinalInfoUl>
          <FinalInfoList>
            <span>- 상품금액</span>
            <span>
              <strong>{(count * product.price)?.toLocaleString()}</strong>원
            </span>
          </FinalInfoList>
          <FinalInfoList>
            <span>- 할인금액</span>
            <span>
              <strong>0</strong>원
            </span>
          </FinalInfoList>
          <FinalInfoList className="shipping-fee">
            <span>- 배송비</span>
            <span>
              <strong>{shippingFee}</strong>원
            </span>
          </FinalInfoList>

          <FinalInfoList className="total-price">
            <span>- 결제금액</span>
            <span>
              <strong className="pay-price">
                {totalPrice.toLocaleString()}원
              </strong>
            </span>
          </FinalInfoList>
        </FinalInfoUl>
        <PayBtnDiv>
          <label htmlFor="agree">
            <input type="checkbox" id="agree" />
            주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
          </label>
          <Button className="L-button">결제하기</Button>
        </PayBtnDiv>
      </FinalInfoDiv>
    </article>
  );
}
