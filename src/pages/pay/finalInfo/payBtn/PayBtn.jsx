import React from 'react';
import { Button } from '../../../../components/button/Button';
import { PayBtnDiv } from './payBtn.style';

export default function PayBtn() {
  return (
    <>
    <PayBtnDiv>
      <label htmlFor="agree">
        <input type="checkbox" id="agree" />
        주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
      </label>
      <Button 
        className="L-button"
      >결제하기
      </Button>
    </PayBtnDiv>
    </>
  )
}
