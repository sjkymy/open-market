import { useState } from 'react';
import axios from 'axios';
// import usePayment from '../../../../hooks/payment/Payment';
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
  console.log(typeof(shippingValue.shippingPhone));
  console.log(shippingValue.shippingPhone);

  const handleFinalPayment = () => {
    const handlePaymentData = async () => {
      const url = "https://openmarket.weniv.co.kr/order/";
      const userToken = localStorage.getItem("Authorization");
      try {
        const response = await axios.post(
          url,
          {
            "product_id": parseInt(product.product_id),
            "quantity" : parseInt(count),
            "order_kind" : type,
            "total_price": parseInt(totalPrice),
            "receiver": shippingValue.shippingName,
            "receiver_phone_number": shippingValue.shippingPhone,
            "address": shippingValue.shippingAddress,
            "address_message": shippingValue.shippingMsg,
            "payment_method": selectedOption,
          },
          {
            headers: {
              "Authorization": userToken,
            }
          },
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    handlePaymentData();
  }
  

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
        onClick={handleFinalPayment}
      >결제하기
      </Button>
    </PayBtnDiv>
    </>
  )
}
