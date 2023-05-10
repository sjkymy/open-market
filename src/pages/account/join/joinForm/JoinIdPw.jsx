import { useEffect, useState } from 'react';
import axios from 'axios';
import UserInput from '../../../../components/userInput/UserInput';
import { Inp, OverlapTest } from '../../../../components/userInput/Inp';
import { Button } from '../../../../components/button/Button';
import { InformMsg } from '../../../../components/style/informMsg.style';

export default function JoinIdPw({value, handleOnChange}) {
  const [btnDisable, setBtnDisable] = useState(true);
  const [className, setClassName] = useState("");
  const [informMsg, setInformMsg] = useState(null)

  useEffect(() => {
    const idRegExp = /^[a-zA-Z](?=.*[a-zA-Z])(?=.*[0-9]).{3,12}$/;
    idRegExp.test(value.idval) ? 
    setBtnDisable(false) : setBtnDisable(true)
  }, [value.idval]);

  const handleOverlapCheck = (e) => {
    e.preventDefault()
    const OverlapCheck = async () => {
      try {
        const response = await axios.post(
          "https://openmarket.weniv.co.kr/accounts/signup/valid/username/", 
          {
            username : value.idval
          }
        );
        console.log(response);
        setInformMsg(response.data.Success)
        setClassName("okOpen")
      } catch (error) {
        console.log(error);
        setInformMsg(error.response.data.FAIL_Message);
        setClassName("errorOpen")
      }
    };
    OverlapCheck();
  }

  return (
    <>
      <UserInput inputId="joinId" label="아이디">
        <OverlapTest>
          <Inp 
            type="text"
            id="joinId"
            value={value.idval}
            onChange={handleOnChange}
            placeholder="영문자+숫자 조합으로 4~12자리를 입력하세요."
            required
          />
          <Button 
            className="medium"
            onClick={handleOverlapCheck}
            disabled={btnDisable}
          >중복확인
          </Button>
        </OverlapTest>
        <InformMsg className={className}>
          {informMsg}
        </InformMsg>
      </UserInput>
      
      <UserInput inputId="joinPw" label="비밀번호">
        <Inp 
          type="password"
          id="joinPw"
          value={value.pwVal}
          onChange={handleOnChange}
          placeholder="영소문자+숫자 조합으로 8~12자리를 입력하세요."
          required
        />
      </UserInput>
      <UserInput inputId="joinPwCheck" label="비밀번호 재확인">
        <Inp 
          type="password"
          id="joinPwCheck"
          value={value.pwCheckVal}
          onChange={handleOnChange}
          required
        />
      </UserInput>
    </>
  )
}
