import { useState } from 'react';
import useHandlePaymentData from '../../../../hooks/payment/PaymentData'; 
import { Button } from '../../../../components/button/Button';
import { PayBtnDiv } from './payBtn.style';

export default function PayBtn({type, count, product, totalPrice, selectedOption, shippingValue}) {
  const [isAgree, setisAgree] = useState(false)
  const handleCheck = (e) => {
    if (e.target.checked) {
      setisAgree(true)
    } else {
      setisAgree(false)
    };
  };

  const directBodyData = {
    "product_id": parseInt(product?.product_id),
    "quantity" : parseInt(count),
    "order_kind" : type,
    "total_price": parseInt(totalPrice),
    "receiver": shippingValue.shippingName,
    "receiver_phone_number": shippingValue.shippingPhone,
    "address": shippingValue.shippingAddress,
    "address_message": shippingValue.shippingMsg,
    "payment_method": selectedOption,
  };
  const cartBodyData = {
    "total_price": parseInt(totalPrice),
    "order_kind" : type,
    "receiver": shippingValue.shippingName,
    "receiver_phone_number": shippingValue.shippingPhone,
    "address": shippingValue.shippingAddress,
    "address_message": shippingValue.shippingMsg,
    "payment_method": selectedOption,
  };

  const [handlePaymentData] = useHandlePaymentData(type, directBodyData, cartBodyData)

  // const handleFinalPayment = () => {
  //   const handlePaymentData = async () => {
  //     const url = "https://openmarket.weniv.co.kr/order/";
  //     const userToken = localStorage.getItem("Authorization");
  //     try {
  //       const response = await axios.post(
  //         url,
  //         (type === "direct_order") ?
  //         directBodyData :
  //         (type === "cart_order") ?
  //         cartBodyData :
  //         null,
  //         {
  //           headers: {
  //             "Authorization": userToken,
  //           }
  //         },
  //       );
  //       console.log(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   handlePaymentData();
  // };
  

  return (
    <>
    <PayBtnDiv>
      <label htmlFor="agree">
        <input 
          type="checkbox" 
          id="agree"
          checked={isAgree}
          onChange={handleCheck}
        />
        주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
      </label>
      <Button 
        className="L-button"
        onClick={() => {
          return isAgree ?
          handlePaymentData() :
          alert("개인정보 제공 동의란을 확인해주세요.")
        }}
      >결제하기
      </Button>
    </PayBtnDiv>
    </>
  )
}
