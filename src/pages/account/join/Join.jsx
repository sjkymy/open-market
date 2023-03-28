import React from 'react'
import JoinIdPw from './joinForm/JoinIdPw';
import JoinNamePhone from './joinForm/JoinNamePhone';
import { useState } from 'react';
import axios from 'axios';
import { Button } from '../../../components/button/Button';
import { Form } from './join.style';
// import CheckId from './joinForm/CheckId';

export default function Join() {
  const [idval, setIdval] = useState("");
  const [pwVal, setPwVal] = useState("");
  const [pwCheckVal, setPwCheckVal] = useState("");
  const [phoneVal, setPhoneVal] = useState("");
  const [nameVal, setNameVal] = useState("");

  const handleOnChange = ((e) => {
    e.target.id === "joinId" && setIdval(e.target.value);
    e.target.id === "joinPw" && setPwVal(e.target.value);
    e.target.id === "joinPwCheck" && setPwCheckVal(e.target.value);
    
  })
  const handleNameChange = ((e) =>{
    e.target.id === "joinPhone" && setPhoneVal(e.target.value);
    e.target.id === "joinName" && setNameVal(e.target.value);
  })

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
        console.log("회원가입 성공");
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    JoinData();
  };
  
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
          handleOnChange={handleNameChange}
        />
        <Button
          className="large"
          onClick={handleJoin}
        > 가입하기
        </Button>
      </Form>      
    </>
  )
}
