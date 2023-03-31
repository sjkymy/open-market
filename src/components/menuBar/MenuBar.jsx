import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Inp } from "../userInput/Inp"
import { Button } from "../button/Button"
import axios from 'axios'

export default function MenuBar() {
    const Header = styled.header `
        border: 1px solid black;
    `

    let isAuthorized = localStorage.getItem("Authorization");

    const handleLogout = () => {
        const logoutData = async () => {
            try {
                const response = await axios.post("https://openmarket.weniv.co.kr/accounts/logout/");
                localStorage.removeItem("Authorization");
                window.location.reload();
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };
        logoutData()
    }

    return (
        <Header>
            <nav>
                <h1>logo</h1>
                <Inp type="text" className='search' />
                <div>
                    <Link>장바구니</Link>
                    {
                        !isAuthorized ?
                        null : <Link>마이페이지</Link>
                    }
                    {
                        !isAuthorized ? 
                        <Link to="/account/login">로그인</Link> : 
                        <Button className='ms' onClick={handleLogout}>로그아웃</Button>
                    }
                </div>
            </nav>
        </Header>
    )
}
