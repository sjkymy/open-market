import axios from 'axios';
import { useEffect, useState } from 'react';
import UserInput from '../../../../components/userInput/UserInput';
import { Inp } from '../../../../components/userInput/Inp';
import { InformMsg } from '../../../../components/style/informMsg.style';
import { Button } from '../../../../components/button/Button';

export default function JoinCompany({value, handleOnChange}) {
  const [btnDisable, setBtnDisable] = useState(true);
  const [className, setClassName] = useState("");
  const [informMsg, setInformMsg] = useState(null)

    useEffect(() => {
      value.companyVal.length >= 10 ? setBtnDisable(false) : setBtnDisable(true)
    },[value.companyVal])

    const handleOverlapCheck = (e) => {
      e.preventDefault();
      const OverlapCheck = async () => {
        try {
            const response = await axios.post("https://openmarket.weniv.co.kr/accounts/signup/valid/company_registration_number/",
            {
                company_registration_number : value.companyVal
            }
            );
            console.log(response);
            setInformMsg(response.data.Success);
            setClassName("okOpen");
        } catch (error) {
            console.log(error);
            setClassName("errorOpen");
            setInformMsg(error.response.data.FAIL_Message);
        }
      };
      OverlapCheck()
    }

  return (
    <>
        <UserInput inputId="joinCompany" label="사업자 등록번호">
          <Inp 
            type="string"
            id="joinCompany"
            value={value.companyVal}
            onChange={handleOnChange}
            placeholder="하이픈(-) 없이 숫자만 입력하세요."
            required
          />
        </UserInput>
        <InformMsg className={className}>
          {informMsg}
        </InformMsg>
        <Button 
          className="medium"
          disabled={btnDisable}
          onClick={handleOverlapCheck}
        >
          인증
        </Button>
        <UserInput inputId="joinStore" label="스토어 이름">
            <Inp 
                type="string"
                id="joinStore"
                value={value.storeVal}
                onChange={handleOnChange}
                required
            />
        </UserInput>
    </>
  )
}
