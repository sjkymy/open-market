import styled from "styled-components";

const ProductMain = styled.main `
    display: flex;
    justify-content: center;
    margin-top: 100px;
    padding-bottom: 156px;
`

const ProductList = styled.ul `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 60px;
    width: 1260px;
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        gap: 90px;
    }
`

export { ProductMain, ProductList }