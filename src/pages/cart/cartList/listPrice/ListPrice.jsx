import { ListPriceDiv, PriceTxt } from "./listPrice.style";
import { Button } from "../../../../components/button/Button";

export default function ListPrice({price, quantity}) {

  return (
    <ListPriceDiv>
        <PriceTxt>{(price * quantity)?.toLocaleString()}원</PriceTxt>
        <Button 
          className="ms"
          onClick={
            () => alert("기능을 구현하는 중입니다. 잠시만 기다려주세요.")
          }
        >주문하기
        </Button>
    </ListPriceDiv>
  )
}
