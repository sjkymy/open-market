import { useLocation } from "react-router-dom";
import { createContext } from "react";
import MenuBar from "../../components/menuBar/MenuBar";
import OrderListHeader from "./orderListHeader/OrderListHeader";
import OrderList from "./orderList/OrderList";
import Order from "./orderForm/Order";
import { MainEl, Title, OrderListUl, TotalPriceTxt } from "./productPay.style";

export const ProductContext = createContext(null);
export default function ProductPay() {
  const location = useLocation();
  const { state } = location;

  // 장바구니를 거치지 않고 바로 구매할 경우.
  if (state.type === "direct_order") {
    const { type, count, product } = state;
    return (
      <>
        <MenuBar />
        <MainEl>
          <Title>주문/결제하기</Title>
          <OrderListHeader />
          <OrderListUl>
            <OrderList 
            count={count} 
            {...product} 
            type={type}
          />
          </OrderListUl>
          <TotalPriceTxt>
            총 주문금액 <span>{(count * product.price)?.toLocaleString()}원</span>
          </TotalPriceTxt>
          <ProductContext.Provider value={{ type, count, product }}>
            <Order />
          </ProductContext.Provider>
        </MainEl>
      </>
    );
  };

  // 장바구니에서 구매할 경우
  if (state.type === "cart_order") {
    const { type, productData, myCartIn } = state;
    let productPrice = 0;
    let shippingFee = 0;
    for (let i = 0; i < productData.length; i++) {
      for (let j = 0; j < myCartIn.length; j++) {
        if (productData[i].product_id === myCartIn[j].product_id) {
          productPrice = (myCartIn[j].quantity * productData[i].price) + productPrice;
          shippingFee = productData[i].shipping_fee + shippingFee;
        };
        if (productData[i].product_id !== myCartIn[j].product_id) {
          
        }
      }
    };
    let totalPay = productPrice + shippingFee;
    return (
      <>
        <MenuBar />
        <MainEl>
          <Title>주문/결제하기</Title>
          <OrderListHeader />
          <OrderListUl>
            {productData && productData.map((item) =>
              <OrderList 
                key={item.product_id}
                {...item} 
                myCartIn={myCartIn}
                type={type}
              />
            )}
          </OrderListUl>
          <TotalPriceTxt>
            총 주문금액 <span>{totalPay?.toLocaleString()}원</span>
          </TotalPriceTxt>
          <ProductContext.Provider value={{ type, productPrice, shippingFee }}>
            <Order />
          </ProductContext.Provider>
        </MainEl>
      </>
    );
  }
};