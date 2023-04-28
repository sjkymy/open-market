import { useNavigate } from "react-router-dom";
import { Inp } from "../userInput/Inp";
import { Header, MenuNav, Logo } from './menuBar.style';
import logoImg from "../../assets/images/Logo-hodu.png";
import IconImg from '../icon/IconImg';

export default function MenuBar() {
  const navigate = useNavigate();
  const handleMoveHome = () => {
      navigate("/");
  };
  return (
    <Header>
      <MenuNav>
        <Logo>
          <img 
            src={logoImg} 
            alt="로고 이미지" 
            onClick={handleMoveHome}
          />
          <Inp 
            type="text" 
            className="search"
            placeholder="상품을 검색해보세요." 
          />
        </Logo>
        <IconImg />
      </MenuNav>
    </Header>
  )
}
