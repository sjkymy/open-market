import { useLocation } from "react-router-dom";
import { createContext } from "react";
import MenuBar from "../../components/menuBar/MenuBar";
import OrderListHeader from "./orderListHeader/OrderListHeader";
import OrderList from "./orderList/OrderList";
import Order from "./orderForm/Order";
import { MainEl, Title, OrderListUl, TotalPriceTxt } from "./productPay.style";

export const ProductContext = createContext(null);
export default function ProductPay() {
  // const [count, setCount] = useState([])
  const location = useLocation();
  const { state } = location;

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
  if (state.type === "cart_order") {
    const { type, productDetailData, myCartIn } = state;

    let productPrice = 0;
    let shippingFee = 0;
    for(let i = 0; i < productDetailData.length; i++) {
      for (let j = 0; j < myCartIn.length; j++) {
        if (productDetailData[i].product_id === myCartIn[j].product_id) {
          productPrice = (myCartIn[j].quantity * productDetailData[i].price) + productPrice;
        }
      }
      shippingFee = productDetailData[i].shipping_fee + shippingFee;
    };

    let totalPay = productPrice + shippingFee;
    return (
      <>
        <MenuBar />
        <MainEl>
          <Title>주문/결제하기</Title>
          <OrderListHeader />
          <OrderListUl>
            {productDetailData && productDetailData.map((item) =>
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