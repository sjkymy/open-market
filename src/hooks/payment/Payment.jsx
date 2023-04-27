import axios from 'axios';
// import { useEffect } from 'react';

export default function usePayment(type, totalPrice, shippingName, shippingPhone, shippingAddress, shippingMsg, selectedOption) {

    const handlePaymentData = async () => {
      const url = "https://openmarket.weniv.co.kr/order/";
      const userToken = localStorage.getItem("Authorization");
      try {
        const response = await axios.post(
          url,
          {
            headers: {
              "Authorization": userToken,
            }
          },
          {
            "total_price": parseInt(totalPrice),
            "order_kind" : type,
            "receiver": shippingName,
            "receiver_phone_number": shippingPhone,
            "address": shippingAddress,
            "address_message": shippingMsg,
            "payment_method": selectedOption,
          }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

  return {handlePaymentData}
};