import { useNavigate } from "react-router-dom";
import JoinIdPw from './JoinIdPw';
import JoinNamePhone from './JoinNamePhone';
import { useState } from 'react';
import axios from 'axios';
import { Button } from '../../../../components/button/Button';
import { Form, InformMsg } from '../../../../components/style/informMsg.style';

export default function Join() {
  const navigate = useNavigate()
  const [idval, setIdval] = useState("");
  const [pwVal, setPwVal] = useState("");
  const [pwCheckVal, setPwCheckVal] = useState("");
  const [phoneVal, setPhoneVal] = useState("");
  const [nameVal, setNameVal] = useState("");
  const [informMsg, setInformMsg] = useState(null)
  const [phoneError, setPhoneError] = useState(null)
  const [className, setClassName] = useState("");

  const handleOnChange = ((e) => {
    e.target.id === "joinId" && setIdval(e.target.value);
    e.target.id === "joinPw" && setPwVal(e.target.value);
    e.target.id === "joinPwCheck" && setPwCheckVal(e.target.value);
  });
  const handleNameChange = ((e) =>{
    e.target.id === "joinPhone" && setPhoneVal(e.target.value);
    e.target.id === "joinName" && setNameVal(e.target.value);
  });

  const handleJoin = (e) => {
    e.preventDefault()
    const JoinData = async () => {
      const joinData = {
        "username": idval,
        "password": pwVal,
        "password2": pwCheckVal,
        "phone_number": phoneVal,
        "name": nameVal
      };
      try {
        const response = await axios.post(
          "https://openmarket.weniv.co.kr/accounts/signup/", 
          joinData
        );
        alert("회원가입이 완료되었습니다:)");
        navigate("/")
        console.log(response);
      } catch (error) {
        console.log(error);
        setClassName("errorOpen")

        Object.values(error.config.data).includes("") && alert("빈 칸을 모두 입력해주세요.");

        const joinError = error.response.data;
        joinError.hasOwnProperty('phone_number') && setPhoneError("해당 사용자 전화번호는 이미 존재합니다.");
        
        const idRegExp = /^(?=.*[a-z])(?=.*[0-9]).{8,12}$/;
        !idRegExp.test(pwVal) && setInformMsg("영어 소문자와 숫자를 조합하여 8~12자리로 만들어주세요.");
        (pwVal !== pwCheckVal) && setInformMsg("비밀번호가 일치하지 않습니다.");
      }
    };
    JoinData();
  };
  
  return (
    <>
      <Form>
        <JoinIdPw 
          value={{idval, pwVal, pwCheckVal}}
          handleOnChange={handleOnChange}
        />
        <InformMsg className={className}>
          {informMsg}
        </InformMsg>
        <JoinNamePhone 
          value={{nameVal, phoneVal}}
          handleOnChange={handleNameChange}
        />
        <InformMsg className={className}>
          {phoneError}
        </InformMsg>
        <Button
          className="large btn_in"
          onClick={handleJoin}
        > 가입하기
        </Button>
      </Form>      
    </>
  )
}
