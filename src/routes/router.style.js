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

const Main = styled.main `
    display: flex;
    justify-content: center;
    margin-top: 150px;
    padding-bottom: 156px;
`

export { Header, Main}