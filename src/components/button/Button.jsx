import styled from "styled-components";

const Button = styled.button`
    background-color: #14ae5c;
    color: #FFFFFF;
    font-family: "Pretendard";
    &.small {
        font-size: 12px;
        padding: 7px 11px;
        border-radius: 26px;
    };

    &.ms {
        font-size: 14px;
        padding: 7px 32px;
        border-radius: 32px;
    };

    &.medium {
        font-size: 14px;
        padding: 8px 40px;
        border-radius: 30px;
        @media screen and (max-width: 768px) {
            padding: 8px 24px;
        };
        @media screen and (max-width: 358px) {
            padding: 8px 16px;
        };
    };
    
    &.large {
        font-size: 18px;
        padding: 12px 35px;
        border-radius: 10px;
        margin-top: 30px;

        @media screen and (max-width: 768px) {
            font-size: 14px;
            height: 44px;
        };
    };

    &.max {
        width: 100%;
    };

    // <Button className="large" active={false}>follow</Button>
    &.small, &.medium {
        background-color: ${(props) => (props.active ? "var(--color-primary)" : '#fff')};
        color: ${(props) => (props.active ? '#fff' : '#767676')};
        box-shadow: ${(props) => (props.active ? 'none' : '0 0 0 1px inset #DBDBDB;')};
    };

    :disabled {
        opacity: 0.4;
    };
`

export { Button };