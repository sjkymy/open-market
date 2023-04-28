import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from "../button/Button";
import shoppinCartIcon from "../../assets/images/icon-shopping-cart.png";
import userIcon from "../../assets/images/icon-user.png";
import {IconDiv, ImgIcon, IconName} from "./iconImg.style";

export default function IconImg() {
    let isAuthorized = localStorage.getItem("Authorization");
    const navigate = useNavigate();

    const needLogin = () => {
      isAuthorized ? 
        navigate("/cart") :
        navigate("/account/login")
    };

    const handleLogout = () => {
      const logoutData = async () => {
        try {
          const response = await axios.post("https://openmarket.weniv.co.kr/accounts/logout/");
          localStorage.removeItem("Authorization");
          navigate("/")
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      };
      logoutData()
    }

  return (
    <IconDiv>
      <div 
        className="btn_icon"
        onClick={needLogin}
      >
        <ImgIcon src={shoppinCartIcon} alt="장바구니" />
        <IconName>장바구니</IconName>
      </div>
      {
        !isAuthorized ?
        null : 
        <div
          className="btn_icon"
          onClick={() => navigate("/mypage")}
        >
          <ImgIcon src={userIcon} alt="마이페이지" />
          <IconName>마이페이지</IconName>
        </div>
      }
      {
        !isAuthorized ? 
        <div
          className="btn_icon"
          onClick={() => navigate("/account/login")}
        >
          <ImgIcon src={userIcon} alt="로그인" />
          <IconName>로그인</IconName>
        </div> : 
        <Button className='ms' onClick={handleLogout}>로그아웃</Button>
      }

    </IconDiv>
  )
}
