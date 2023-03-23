import { Container, LoginTit, LoginForm, LinkGroup, JoinLink } from "./login.style";
import { Inp } from "../../../components/userInput/Inp"
import { Button } from "../../../components/button/Button"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Login() {
  const navigate = useNavigate()
  const [emailVal, setEmailVal] = useState("");
  const [pwVal, setPwVal] = useState("");
  const [emailValid, setEmailValid] = useState(false)
  const [btnDisable, setBtnDisable] = useState(true)
  const handleOnChange = (e) => {
    setEmailVal(e.target.value)
    !e.currentTarget.validity.typeMismatch ?
      setEmailValid(true) : setEmailValid(false)
  }

  useEffect(() => {
    emailValid && pwVal.length >= 6 ?
      setBtnDisable(false) : setBtnDisable(true)
  })

  return (
    <Container>
      <LoginTit>로그인</LoginTit>
      <LoginForm>
        <Inp 
          type="email" 
          placeholder="이메일 계정"
          value={emailVal}
          onChange={handleOnChange}
        />
        <Inp 
          type="password" 
          placeholder="비밀번호"
          value={pwVal}
          onChange={(e) => {setPwVal(e.target.value)}}
        />
        <Button
          type="button"
          className="large"
          disabled={btnDisable}
        >로그인</Button>
      </LoginForm>
      <LinkGroup>
        <JoinLink to="../join">회원가입</JoinLink>
        <JoinLink to="#" className="divide">비밀번호 찾기</JoinLink>
      </LinkGroup>
    </Container>
  )
}
