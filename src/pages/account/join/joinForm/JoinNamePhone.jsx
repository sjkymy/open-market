import UserInput from '../../../../components/userInput/UserInput';
import { Inp } from '../../../../components/userInput/Inp';

export default function JoinNamePhone({value, handleOnChange}) {
  return (
    <>
    <UserInput inputId="joinName" label="이름">
        <Inp 
        type="text"
        id="joinName"
        value={value.nameVal}
        onChange={handleOnChange}
        required
        />
    </UserInput>
    <UserInput inputId="joinPhone" label="휴대폰 번호">
        <Inp 
        type="text"
        id="joinPhone"
        value={value.phoneVal}
        onChange={handleOnChange}
        required
        />
    </UserInput>
    </>
  )
}
