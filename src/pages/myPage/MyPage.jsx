import axios from 'axios';
import { useEffect } from 'react';
import MenuBar from '../../components/menuBar/MenuBar';
import { MainEl, Title } from './mypage.style';

export default function MyPage() {
  useEffect(() => {
    const orderListData = async () => {
      const url = "https://openmarket.weniv.co.kr/order/";
      const userToken = localStorage.getItem("Authorization");
      try {
        const response = await axios.get(
          url,
          {
            headers: {
              Authorization: userToken,
            },
          }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    orderListData();
  }, [])

  return (
    <>
      <MenuBar/>
      <MainEl>
        <Title>마이페이지</Title>
      </MainEl>
    </>
  )
}
