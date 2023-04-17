import { useLocation } from "react-router-dom";
import { createContext } from "react";
import MenuBar from "../../components/menuBar/MenuBar";
import OrderListHeader from "./orderListHeader/OrderListHeader";
import OrderList from "./orderList/OrderList";
import Order from "./orderForm/Order";
import { MainEl, Title, TotalPriceTxt } from "./productPay.style";

export const ProductContext = createContext(null);
export default function ProductPay() {
  const location = useLocation();
  const { count, product } = location.state;
  console.log(product);
  return (
    <>
      <MenuBar />
      <MainEl>
        <Title>주문/결제하기</Title>
        <OrderListHeader />
        <OrderList count={count} {...product} />
        <TotalPriceTxt>
          총 주문금액 <span>{(count * product.price)?.toLocaleString()}원</span>
        </TotalPriceTxt>
        <ProductContext.Provider value={{ count, product }}>
          <Order />
        </ProductContext.Provider>
      </MainEl>
    </>
  );
}
