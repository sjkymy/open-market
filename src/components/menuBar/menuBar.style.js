import styled from 'styled-components'

const Header = styled.header `
    width: 100%;
    z-index: 10;
    position: fixed;
    top: 0;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    padding: 20px 0;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
    background: #fff;
`

const MenuNav = styled.nav `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1280px;
    margin: 0 auto;
`

const Logo = styled.div `
    display: flex;
    width: 124px;
    height: 38px;
    margin-right: auto;
`

export { Header, MenuNav, Logo }