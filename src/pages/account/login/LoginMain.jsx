import { useState } from 'react';
import { LoginTab, TabMenu, MenuList, LinkGroup, JoinLink } from "./loginMain.style";
import LoginForm from './loginForm/LoginForm';

export default function Login() {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { id: 0, name: '구매회원 로그인', content: <LoginForm loginType="BUYER" /> },
    { id: 1, name: '판매회원 로그인', content: <LoginForm loginType="SELLER" /> }
  ];

  const handleMenuSelect = (index) => {
    setCurrentTab(index);
  };

  return (
    <>
      <LoginTab>
        <TabMenu>
          {menuArr.map((el,index) => (
            <MenuList 
            key={el.id}
            className={index === currentTab ? "submenu focused" : "submenu"}
            onClick={() => handleMenuSelect(index)}
            >
              {el.name}
            </MenuList>
          ))}
        </TabMenu>
        <div>
          {menuArr[currentTab].content}
        </div>
      </LoginTab>
      <LinkGroup>
        <JoinLink to="../join">회원가입</JoinLink>
        <JoinLink to="#" className="divide">비밀번호 찾기</JoinLink>
      </LinkGroup>
    </>
  );
};