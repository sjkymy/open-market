import { Container, LoginTit, LoginForm, LinkGroup, JoinLink } from "./loginMain.style";
import { Inp } from "../../../components/userInput/Inp"
import { Button } from "../../../components/button/Button"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"

export default function Login() {
  const navigate = useNavigate()
  const [emailVal, setEmailVal] = useState("");
  const [pwVal, setPwVal] = useState("");
  const [loginType, setLoginType] = useState("")
  // const [emailValid, setEmailValid] = useState(false)
  const [btnDisable, setBtnDisable] = useState(true)
  const handleOnChange = (e) => {
    if (e.target.type === "password") {
      setPwVal(e.target.value)
    } else if (e.target.id === "inpLoginType") {
      setLoginType(e.target.value)
    } else {
      setEmailVal(e.target.value)
      // !e.currentTarget.validity.typeMismatch ?
      // setEmailValid(true) : setEmailValid(false)
    }
  }
  useEffect(() => {
    pwVal.length >= 6 ?
      setBtnDisable(false) : setBtnDisable(true)
  }, [pwVal])

  const handleLogin = (e) => {
    const loginData = async() => {
      const loginData = {
        "username": emailVal,
        "password": pwVal,
        "login_type": loginType
      }
      try {
        const response = await axios.post("https://openmarket.weniv.co.kr/accounts/login/", loginData
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    loginData()
  }

  return (
    <Container>
      <LoginTit>로그인</LoginTit>
      <LoginForm>
      <Inp 
          type="text" 
          placeholder="로그인 타입"
          value={loginType}
          onChange={handleOnChange}
          id="inpLoginType"
        />
        <Inp 
          type="text" 
          placeholder="아이디"
          value={emailVal}
          onChange={handleOnChange}
        />
        <Inp 
          type="password" 
          placeholder="비밀번호"
          value={pwVal}
          onChange={handleOnChange}
        />
        <Button
          type="button"
          className="large"
          disabled={btnDisable}
          onClick={handleLogin}
        >로그인</Button>
      </LoginForm>
      <LinkGroup>
        <JoinLink to="../join">회원가입</JoinLink>
        <JoinLink to="#" className="divide">비밀번호 찾기</JoinLink>
      </LinkGroup>
    </Container>
  )
}
