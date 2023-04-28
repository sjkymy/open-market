import { useState, useEffect } from "react";
import { Inp } from "../../../../components/userInput/Inp";
import { Button } from "../../../../components/button/Button"
import useLoginData from "../../../../hooks/login/LoginData";
import { Form, InformMsg } from "../../../../components/style/informMsg.style";

export default function LoginForm(props) {
  const [idVal, setIDVal] = useState("");
  const [pwVal, setPwVal] = useState("");
  const [btnDisable, setBtnDisable] = useState(true)
  const loginType = props.loginType;

  const handleOnChange = (e) => {
    (e.target.type === "password") ?
      setPwVal(e.target.value) : setIDVal(e.target.value)
  };

  useEffect(() => {
    pwVal.length >= 6 ?
      setBtnDisable(false) : setBtnDisable(true)
  }, [pwVal]);

  const [errorMsg, LoginData] = useLoginData(idVal, pwVal, loginType)

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
        <InformMsg className={errorMsg ? "errorOpen" : null}>
          {errorMsg}
        </InformMsg>
        <Button
          type="button"
          className="large"
          disabled={btnDisable}
          onClick={() => LoginData()}
        >로그인</Button>
      </Form>
    </>
  )
}
