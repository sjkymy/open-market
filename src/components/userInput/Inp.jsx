import styled from "styled-components";

const Inp = styled.input`
    background-color: none;
    border: none;
    padding: 5px 0 10px 4px;
    border-bottom: 1px solid #cdcbcb;
    margin: 10px 0;
    outline: none;
    ::placeholder{
        color: #cdcbcb;
    };
    :focus {
        outline: none;
        border-bottom: 1px teal solid;
    };

    &.search {
        position: relative;
        border: 2px solid #14ae5c;
        border-radius: 20px;
        padding: 10px 15px;
    }
    &.logout{

    }
`;

export { Inp };