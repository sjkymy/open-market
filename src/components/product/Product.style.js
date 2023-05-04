import styled from "styled-components";

const MainEl = styled.main `
    /* display: flex;
    justify-content: center; */
    width: 1280px;
    margin: 150px auto 70px;
    /* padding-bottom: 156px; */
`

const ProductList = styled.ul `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 60px;
    width: 100%;
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        gap: 90px;
    }
`

export { MainEl, ProductList }