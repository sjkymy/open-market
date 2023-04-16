import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AmountContext } from '../amount/Amount';
import { Button } from '../../../components/button/Button';
import { BtnGroup } from './buyCart.style';

export default function BuyCartBtn() {
  const { count, ...product } = useContext(AmountContext);
  const navigate = useNavigate()

  const handleOrder = () => {
    if (count === 0 ) {
      alert("수량을 입력하세요");
    } else {
      navigate("/order", { state: { count, product } });
    }
  };

  return (
    <BtnGroup>
        <Button 
          className="large"
          onClick={handleOrder}
        >
          바로구매
          </Button>
        <Button className="dark large">장바구니</Button>
    </BtnGroup>
  )
}
