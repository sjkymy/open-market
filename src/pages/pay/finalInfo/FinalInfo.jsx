import { useContext } from "react";
import { ProductContext } from "../ProductPay";
import PayBtn from "./payBtn/PayBtn";
import { FinalInfoArticle, FinalInfoTitle, FinalInfoDiv, FinalInfoUl, FinalInfoList } from "./finalInfo.style";

export default function FinalInfo() {
  const { type, count, product, productPrice, shippingFee } = useContext(ProductContext);

  if (type === "direct_order") {
    const directShippingFee = product.shipping_fee ? product.shipping_fee : 0;
    const directProductPrice = count * product.price;
    const totalPrice = directProductPrice + directShippingFee;
  
    return (
      <FinalInfoArticle>
        <FinalInfoTitle>최종결제 정보</FinalInfoTitle>
        <FinalInfoDiv>
          <FinalInfoUl>
            <FinalInfoList>
              <span>- 상품금액</span>
              <span>
                <strong>{directProductPrice?.toLocaleString()}</strong>원
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
                <strong>{directShippingFee?.toLocaleString()}</strong>원
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
          <PayBtn />
        </FinalInfoDiv>
      </FinalInfoArticle>
    );
  };
  if (type === "cart_order") {
    return (
      <FinalInfoArticle>
        <FinalInfoTitle>최종결제 정보</FinalInfoTitle>
        <FinalInfoDiv>
          <FinalInfoUl>
            <FinalInfoList>
              <span>- 상품금액</span>
              <span>
                <strong>{productPrice?.toLocaleString()}</strong>원
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
                <strong>{shippingFee?.toLocaleString()}</strong>원
              </span>
            </FinalInfoList>
  
            <FinalInfoList className="total-price">
              <span>- 결제금액</span>
              <span>
                <strong className="pay-price">
                  {(shippingFee+productPrice)?.toLocaleString()}원
                </strong>
              </span>
            </FinalInfoList>
          </FinalInfoUl>
          <PayBtn />
        </FinalInfoDiv>
      </FinalInfoArticle>
    );
  };
};