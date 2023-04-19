import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import GetCartData from "../../cart/CartData";
import { AmountContext } from "../amount/Amount";
import { Button } from "../../../components/button/Button";
import Modal from "../../../components/modal/Modal";
import { BtnGroup } from "./buyCart.style";

export default function BuyCartBtn() {
  const { count, ...product } = useContext(AmountContext);
  const navigate = useNavigate();
  const location = useLocation();
  const cartData = GetCartData();
  const [showModal, setShowModal] = useState(false);
  const isLogin = localStorage.getItem("Authorization");

  // 수량을 입력하고 바로구매 버튼 누르면 주문 페이지로 이동
  const handleOrder = () => {
    if (count === 0) {
      alert("수량을 입력하세요");
    } else {
      navigate("/order", { state: { count, product } });
    }
  };

  // 로그인 체크. 안되어있다면 로그인 페이지로 이동.
  const moveLogin = () => {
    const alertMsg = window.confirm("로그인 이후 구매가 가능합니다.");
    if (alertMsg) {
      localStorage.setItem('prevPath', location.pathname);
      navigate("/account/login")
    }
  };
  // console.log(product);
  // console.log(cartData.data?.results);
  // console.log(cartData.data);

  // cart에 상품이 있는지 확인.
  const cartItems = cartData.data
  const productIdsInCart = cartItems?.results.map((cartItem) => cartItem.product_id);
  console.log(productIdsInCart);
  console.log(cartData.data);

  // const isCartItemCheck = () => {
  //   const cartDataItem = cartData.data?.results
  //   const isCartItem = cartDataItem.filter((item) => item.product_id === product.product_id);
  //   return isCartItem;
  // };
  // const isCartItemCheck = () => {
  //   const isCartItem = cartData.data?.results;
  //   return isCartItem
  // }
  
  // cart에 상품 등록 API
  const handleAddCart = () => {
    const cartData = async () => {
      const url = "https://openmarket.weniv.co.kr/cart/";
      const cartBodyData = {
        "product_id": parseInt(product.product_id),
        "quantity": parseInt(count),
        "check": productIdsInCart.includes(product.product_id) ? "false" : "true",
      };
      const userToken = localStorage.getItem("Authorization");
      try {
        const response = await axios.post(
          url,cartBodyData,
          {
            headers: {
              "Authorization": userToken,
            },
          },
          
        )
        console.log(response);
        setShowModal(true);
      } catch (error) {
        console.log(error);
      }
    };
    cartData();
  };

  return (
    <BtnGroup>
      <Button 
      className="large" 
      onClick={isLogin ? handleOrder : moveLogin}
      >
        바로구매
      </Button>
      <Button 
        className="dark large"
        onClick={isLogin ? handleAddCart : moveLogin}
      >장바구니
      </Button>
      {showModal && (<Modal
        closeText={"아니요"}
        confirmText={"예"}
        modalClose={() => {
          setShowModal(false);
        }}
        modalConfirm={() => {
          navigate("/cart");
        }}
      >
        {productIdsInCart.includes(product.product_id) ? "이미 장바구니에 있는 상품입니다. 장바구니로 이동하시겠습니까?"
          : "장바구니에 상품이 담겼습니다. 장바구니로 이동하시겠습니까?"}
        </Modal>)}
    </BtnGroup>
  );
}
