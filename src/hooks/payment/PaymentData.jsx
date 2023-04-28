import axios from 'axios';

export default function useHandlePaymentData(type, directBodyData, cartBodyData) {
  const handlePaymentData = async () => {
    const url = "https://openmarket.weniv.co.kr/order/";
    const userToken = localStorage.getItem("Authorization");
    try {
      const response = await axios.post(
        url,
        (type === "direct_order") ?
        directBodyData :
        (type === "cart_order") ?
        cartBodyData :
        null,
        {
          headers: {
            "Authorization": userToken,
          }
        },
      );
      console.log(response);
    } catch (error) {
      console.log(error);
      if (error.response.status === 406) {
        alert("해당 상품은 품절입니다.")
      }
      if (error.response.status === 400) {
        alert("배송지 정보와 결제수단을 정확히 입력해주세요.")
      }
    }
  };
  return [handlePaymentData]
};