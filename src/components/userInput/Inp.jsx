import styled from "styled-components";

const Inp = styled.input`
    font-size: 16px;
    background-color: none;
    border: none;
    padding: 10px 0 10px 4px;
    border-bottom: 1px solid #cdcbcb;
    margin: 20px 0;
    outline: none;

    ::placeholder{
        color: #cdcbcb;
    };

    :focus {
        outline: none;
        border-bottom: 1px teal solid;
    };
`;

export { Inp };