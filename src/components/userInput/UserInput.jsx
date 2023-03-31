import styled from "styled-components";

const InpLabel = styled.label`
    color: #767676;
    font-weight: 500;
    display: block;
    margin-top: 30px;
    @media screen and (max-width: 768px) {
        font-size: 14px;
    };
`;

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px){
        margin-top: 0px;
    };
`;


export default function UserInput(props) {
    return (
        <Cont className={props.className}>
            <InpLabel htmlFor={props.inputId}>
                {props.label}
            </InpLabel>
            {props.children}
        </Cont>
    );
};