import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div `
    width: 87%;
    max-width: 500px;
    margin: 100px auto;
    border: 1px solid black;
`

const LoginTit = styled.h2 `
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
`

const LoginForm = styled.form `
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    /* align-items: center; */
    width: 90%;
`

const LinkGroup = styled.div `
    text-align: center;
    margin: 40px 0;
`

const JoinLink = styled(Link) `
    color: var(--color-text);
    position: relative;
    &.divide {
        margin-left: 15px;
        padding-left: 15px;
        ::after {
            position:absolute;
            left: 0;
            top: 3px;
            content: " ";
            width: 1px;
            height: 80%;
            background-color: var(--color-text);
        }
    }
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`



export { Container, LoginTit, LoginForm, LinkGroup, JoinLink }