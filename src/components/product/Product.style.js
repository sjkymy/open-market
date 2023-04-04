import styled from "styled-components";

const MainEl = styled.main `
    /* display: flex;
    justify-content: center; */
    width: 1080px;
    margin: 150px auto 0;
    padding-bottom: 156px;
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