import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginTab = styled.div `
  width: 87%;
  max-width: 500px;
  margin: 100px auto 20px;
  border: 1px solid #BDBDBD;
  border-radius: 10px;
  padding-bottom: 30px;
`

const TabMenu = styled.ul`
  background-color: #dcdcdc;
  color: #000;
  border-radius: 10px 10px 0px 0px;
  font-weight: bold;
  display: flex;
  /* align-items: center; */
  list-style: none;

  .submenu {
    width: calc(100% /2);
    text-align: center;
    padding: 15px 0 15px;
    transition: 0.3s;
    border-radius: 10px 10px 0px 0px;
  }

  .focused {
    background-color: #fff;
  }

  & div.desc {
    text-align: center;
  }
`;

const MenuList = styled.li `
  cursor: pointer;
`;

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

export { TabMenu, LoginTab, MenuList, LinkGroup, JoinLink }