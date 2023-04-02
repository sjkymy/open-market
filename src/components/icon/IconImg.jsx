import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from "../button/Button";
import shoppinCartIcon from "../../assets/images/icon-shopping-cart.png";
import userIcon from "../../assets/images/icon-user.png"
import {IconDiv, ImgIcon, IconName} from "./iconImg.style"

export default function IconImg() {
    let isAuthorized = localStorage.getItem("Authorization");

    const handleLogout = () => {
        const logoutData = async () => {
            try {
                const response = await axios.post("https://openmarket.weniv.co.kr/accounts/logout/");
                localStorage.removeItem("Authorization");
                window.location.reload();
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };
        logoutData()
    }

  return (
    <IconDiv>
        <Link to="/cart">
            <ImgIcon src={shoppinCartIcon} alt="장바구니" />
            <IconName>장바구니</IconName>
        </Link>
        {
            !isAuthorized ?
            null : 
            <Link to="/cart">
                <ImgIcon src={userIcon} alt="마이페이지" />
                <IconName>마이페이지</IconName>
            </Link>
        }
        {
            !isAuthorized ? 
            <Link to="/account/login">
                <ImgIcon src={userIcon} alt="로그인" />
                <IconName>로그인</IconName>
            </Link> : 
            <Button className='ms' onClick={handleLogout}>로그아웃</Button>
        }

    </IconDiv>
  )
}
