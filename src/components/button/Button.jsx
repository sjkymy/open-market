import styled from "styled-components";

const Button = styled.button`
  background-color: var(--color-primary);
  color: #ffffff;
  font-family: "Pretendard";

  // 로그아웃 버튼에 쓰임
  &.ms {
    font-size: 18px;
    padding: 10px 30px;
    border-radius: 5px;
  }

  // 중복확인
  &.medium {
    font-size: 14px;
    padding: 8px 40px;
    border-radius: 30px;
    background-color: #767676;
    margin-top: 10px;
    @media screen and (max-width: 768px) {
      padding: 8px 24px;
    }
    @media screen and (max-width: 358px) {
      padding: 8px 16px;
    }
  }

  &.large {
    font-size: 18px;
    padding: 19px 172px;
    border-radius: 5px;
    @media screen and (max-width: 768px) {
      font-size: 14px;
      height: 44px;
    }
  }

  &.max {
    width: 100%;
  }

  &.dark {
    font-size: 18px;
    padding: 19px 66px;
    background-color: var(--color-dark);
  }

  &.L-button {
    padding: 19px 87px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    margin: 30px 0 34px;
  }

  /* &.small, &.medium {
        background-color: ${(props) =>
    props.active ? "var(--color-primary)" : "#fff"};
        color: ${(props) => (props.active ? "#fff" : "#767676")};
        box-shadow: ${(props) =>
    props.active ? "none" : "0 0 0 1px inset #DBDBDB;"};
    }; */

  :disabled {
    opacity: 0.4;
  }
`;

export { Button };
