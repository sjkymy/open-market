import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"
import { Inp } from "../../../../components/userInput/Inp";
import { Button } from "../../../../components/button/Button"
import { Form, Warning } from "./LoginForm.style";

export default function LoginForm(props) {
  const navigate = useNavigate()
  const [idVal, setIDVal] = useState("");
  const [pwVal, setPwVal] = useState("");
  const [btnDisable, setBtnDisable] = useState(true)
  const [errorMsg, setErrorMsg] = useState(null)
  const loginType = props.loginType;
  
  const handleOnChange = (e) => {
    (e.target.type === "password") ?
      setPwVal(e.target.value) : setIDVal(e.target.value)
  };

  useEffect(() => {
    pwVal.length >= 6 ?
      setBtnDisable(false) : setBtnDisable(true)
  }, [pwVal]);

  const handleLogin = (e) => {
    const loginData = async() => {
      const loginData = {
        "username": idVal,
        "password": pwVal,
        "login_type": loginType
      };
      try {
        const response = await axios.post("https://openmarket.weniv.co.kr/accounts/login/", loginData
        );
        console.log("로그인 성공");
        const userToken = response.data.token;
        localStorage.setItem("Authorization", "JWT "+ userToken)
      } catch (error) {
        console.log(error);
        if (error.response.status === 401) {
          setErrorMsg("* 아이디 또는 비밀번호가 일치하지 않습니다.")
        }
      }
    }
    loginData()
  };

  return (
    <>
      <Form>
        <Inp 
          type="text" 
          placeholder="아이디"
          value={idVal}
          onChange={handleOnChange}
        />
        <Inp 
          type="password" 
          placeholder="비밀번호"
          value={pwVal}
          onChange={handleOnChange}
        />
        <Warning className={errorMsg ? "errorOpen" : null}>
          {errorMsg}
        </Warning>
        <Button
          type="button"
          className="large"
          disabled={btnDisable}
          onClick={handleLogin}
        >로그인</Button>
      </Form>
    </>
  )
}
