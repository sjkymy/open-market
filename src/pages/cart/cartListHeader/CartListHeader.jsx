import { CartHeader } from "./cartListHeader.style"

export default function CartListHeader() {
  return (
    <CartHeader>
        <li><input type="radio" /></li>
        <li>상품정보</li>
        <li>수량</li>
        <li>주문금액</li>
    </CartHeader>
  )
}
