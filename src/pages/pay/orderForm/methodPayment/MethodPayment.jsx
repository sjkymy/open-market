import {
  PaymentTitle,
  PaymentForm,
  Label,
  RadioInput,
} from "./methodPayment.style";

export default function MethodPayment() {
  return (
    <>
      <PaymentTitle>결제수단</PaymentTitle>
      <PaymentForm>
        <Label>
          <RadioInput type="radio" name="option" value="option1" />
          신용/체크카드
        </Label>
        <Label>
          <RadioInput type="radio" name="option" value="option2" />
          무통장 입금
        </Label>
        <Label>
          <RadioInput type="radio" name="option" value="option3" />
          휴대폰 결제
        </Label>
        <Label>
          <RadioInput type="radio" name="option" value="option4" />
          네이버페이
        </Label>
        <Label>
          <RadioInput type="radio" name="option" value="option5" />
          카카오페이
        </Label>
      </PaymentForm>
    </>
  );
}
