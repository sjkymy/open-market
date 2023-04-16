import { useLocation } from 'react-router-dom';
import MenuBar from '../../components/menuBar/MenuBar';
// import Table from './table/Table';
// import { columns } from './table/Columns';
import { MainEl, Title, TotalPriceTxt } from './productPay.style';
import OrderListHeader from './orderListHeader/OrderListHeader';
import OrderList from './orderList/OrderList';

export default function ProductPay() {
    const location = useLocation();
    const {count, product} = location.state;
    console.log(product);
  return (
    <>
      <MenuBar/>
      <MainEl>
        <Title>주문/결제하기</Title>
        <OrderListHeader/>
        <OrderList 
          count = {count}
          {...product}
        />
        <TotalPriceTxt>총 주문금액 <span>{(count * product.price)?.toLocaleString()}원</span></TotalPriceTxt>
      </MainEl>
    </>
  )
}
