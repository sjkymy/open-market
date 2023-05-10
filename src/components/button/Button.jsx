import styled from "styled-components";

const Button = styled.button`
  background-color: var(--color-primary);
  color: #ffffff;
  font-family: "Pretendard";

  // 로그아웃 버튼에 쓰임
  &.ms {
    font-size: 16px;
    padding: 10px 35px;
    border-radius: 5px;
  }

  // 중복확인
  &.medium {
    font-size: 14px;
    /* padding: 17px 32px; */
    width: 140px;
    height: 54px;
    border-radius: 5px;
    background-color: #767676;
    margin: 0 0 0 12px;
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

  &.btn_in {
    margin-top: 34px;
  }

  &.dark {
    font-size: 18px;
    padding: 19px 66px;
    background-color: var(--color-dark);
  }

  &.total {
    padding: 19px 65px;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    background: #21BF48;
    border-radius: 5px;
    color: #fff;
    display: flex;
    margin: 0 auto;
  }

  &.L-button {
    padding: 19px 87px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    margin: 30px 0 34px;
  }

  &.yes {
    background: var(--color-primary);
    border-radius: 5px;
    width: 100px;
    height: 40px;
    line-height: 20px;
  }
  &.no {
    background: #FFFFFF;
    color: #767676;
    border: 1px solid #C4C4C4;
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
