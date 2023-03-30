import styled from "styled-components";

const Form = styled.form `
    display: flex;
    flex-direction: column;
    margin: 30px auto 0;
    width: 90%;
`

const InformMsg = styled.strong `
    display: none;
    font-size: 14px;
    font-weight: bold;
    line-height: 14px;
    color: #eb5757;
    &.errorOpen {
        display: block;
    }
    &.okOpen {
        display: block;
        color: blue;
    }
    @media screen and (max-width: 768px) {
        font-size: 12px;
    };
`;

export { Form, InformMsg }