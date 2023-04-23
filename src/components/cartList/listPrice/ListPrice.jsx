import { ListPriceDiv, PriceTxt } from "./listPrice.style";
import { Button } from "../../button/Button";

export default function ListPrice({price, quantity}) {
  return (
    <ListPriceDiv>
        <PriceTxt>{(price * quantity)?.toLocaleString()}원</PriceTxt>
        <Button className="ms">주문하기</Button>
    </ListPriceDiv>
  )
}
