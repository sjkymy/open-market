import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useLoginData(idVal, pwVal, loginType) {
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  const LoginData = async() => {
    const loginData = {
      "username": idVal,
      "password": pwVal,
      "login_type": loginType
    };
    try {
      const response = await axios.post("https://openmarket.weniv.co.kr/accounts/login/", loginData
      );
      const userToken = response.data.token;
      localStorage.setItem("Authorization", "JWT "+ userToken);
      
      // 로그인 이후 직전 페이지로 이동
      const prevPath = localStorage.getItem('prevPath');
      if (prevPath) {
        navigate(prevPath);
        localStorage.removeItem("prevPath");
      } else {
        navigate('/');
      };
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        setErrorMsg("* 아이디 또는 비밀번호가 일치하지 않습니다.")
      }
    }
  };
  return [errorMsg, LoginData]
}
