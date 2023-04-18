import { useState, useEffect } from 'react';
import axios from 'axios';

export default function GetCartData() {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const url = "https://openmarket.weniv.co.kr/accounts/cart/";
      const userToken = localStorage.getItem("Authorization");
      try {
        const response = await axios.get(
          url, 
          {"Authroization": userToken}
        );
        setCartData(response);
      } catch (error) {
        console.log(error);
      };
    };
    getData();
  }, []);

  return cartData
}
