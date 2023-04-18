import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AmountContext } from "../amount/Amount";
import { Button } from "../../../components/button/Button";
import { BtnGroup } from "./buyCart.style";

export default function BuyCartBtn() {
  const { count, ...product } = useContext(AmountContext);
  const navigate = useNavigate();
  console.log(product);

  const handleOrder = () => {
    if (count === 0) {
      alert("수량을 입력하세요");
    } else {
      navigate("/order", { state: { count, product } });
    }
  };
  
  const handleAddCart = () => {
    const cartData = async () => {
      const url = "https://openmarket.weniv.co.kr/accounts/cart/";
      const bodyData = {
        "product_id": product.product_id,
        "quantity": count,
        "check" : "Bool"
      };
      const userToken = localStorage.getItem("Authorization");
      try {
        const response = await axios.post(
          url, 
          {"Authroization": userToken}, 
          bodyData
        )
      } catch (error) {
        console.log(error);
      }
    };
    cartData();
  };

  return (
    <BtnGroup>
      <Button className="large" onClick={handleOrder}>
        바로구매
      </Button>
      <Button className="dark large">장바구니</Button>
    </BtnGroup>
  );
}
