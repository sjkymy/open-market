import styled from "styled-components";

const Form = styled.form `
    display: flex;
    flex-direction: column;
    margin: 30px auto 0;
    width: 90%;
`

const Warning = styled.strong `
    display: none;
    margin-top: 6px;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    color: #eb5757;
    &.errorOpen {
        display: block;
    }
    @media screen and (max-width: 768px) {
        font-size: 12px;
    };
`;

export { Form, Warning }