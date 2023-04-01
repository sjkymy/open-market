import { Inp } from "../userInput/Inp";
import { Header, MenuNav, Logo } from './menuBar.style';
import logoImg from "../../assets/images/Logo-hodu.png";
import IconImg from '../icon/IconImg';

export default function MenuBar() {

    return (
        <Header>
            <MenuNav>
                <Logo>
                    <img src={logoImg} alt="로고 이미지" />
                    <Inp type="text" className='search' placeholder='상품을 검색해보세요.' />
                </Logo>
                <IconImg />
            </MenuNav>
        </Header>
    )
}
