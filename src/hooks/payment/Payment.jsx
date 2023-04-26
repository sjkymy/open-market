import axios from 'axios';
import { useEffect } from 'react';

export default function Payment(type) {
  useEffect(() => {
    const paymentData = async () => {
      const url = "https://openmarket.weniv.co.kr/order/";
      const userToken = localStorage.getItem("Authorization");
      try {
        const response = await axios.post(
          url,
          {
            "total_price": Int,
            "order_kind" : {type},
        
            "receiver": String,
            "receiver_phone_number": String,
            "address": String,
            "address_message": String,
            "payment_method": String,
          }
        )
      } catch (error) {
        console.log(error);
      }
    };
    paymentData()
  },[]);

  return (
    <div>Payment</div>
  )
}
