import React from 'react'
import JoinIdPw from './joinForm/JoinIdPw';
import JoinNamePhone from './joinForm/JoinNamePhone';
// import axios from 'axios';
import { useState } from 'react';
import { Button } from '../../../components/button/Button';
import { Form } from './join.style';

export default function Join() {
  const [idval, setIdval] = useState("");
  const [pwVal, setPwVal] = useState("");
  const [pwCheckVal, setPwCheckVal] = useState("");
  const [nameVal, setNameVal] = useState("");
  const [phoneVal, setPhoneVal] = useState("");

  const handleOnChange = ((e) => {
    e.target.id === "joinId" && setIdval(e.target.value);
    e.target.id === "joinPw" && setPwVal(e.target.value);
    e.target.id === "joinPwCheck" && setPwCheckVal(e.target.value);
    
  })
  const handleNameChange = ((e) =>{
    e.target.id === "joinName" && setNameVal(e.target.value);
    e.target.id === "joinPhone" && setPhoneVal(e.target.value);
  })
  return (
    <>
      <h2>회원가입</h2>
      <Form>
        <JoinIdPw 
          value={{idval, pwVal, pwCheckVal}}
          handleOnChange={handleOnChange}
        />
        <JoinNamePhone 
          value={{nameVal, phoneVal}}
          handleChange={handleNameChange}
        />
        <Button
          className="large"
        > 가입하기
        </Button>
      </Form>
      
    </>
  )
}
