// import { useEffect, useState } from 'react';
import UserInput from '../../../../components/userInput/UserInput';
import { Inp } from '../../../../components/userInput/Inp';

export default function JoinIdPw({value, handleOnChange}) {
  return (
    <>
      <UserInput inputId="joinId" label="아이디">
        <Inp 
          type="text"
          id="joinId"
          value={value.idval}
          onChange={handleOnChange}
          required
        />
      </UserInput>
      <UserInput inputId="joinPw" label="비밀번호">
        <Inp 
          type="password"
          id="joinPw"
          value={value.pwVal}
          onChange={handleOnChange}
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
