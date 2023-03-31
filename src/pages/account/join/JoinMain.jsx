import { useState } from 'react';
import { LoginTab, TabMenu, MenuList } from "./joinMain.style";
import JoinFormBuyer from "./joinForm/JoinFormBuyer";
import JoinFormSeller from './joinForm/JoinFormSeller';

export default function JoinMain() {
    const [currentTab, setCurrentTab] = useState(0);

    const menuArr = [
        { id: 0, name: '구매회원가입', content: <JoinFormBuyer /> },
        { id: 1, name: '판매회원가입', content: <JoinFormSeller /> }
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
        </>
    )
}
