import styled from "styled-components";

const ProductMain = styled.main `
    display: flex;
    justify-content: center;
    margin-top: 160px;
    padding-bottom: 156px;
`

const ProductList = styled.ul `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 60px;
    width: 1260px;
    /* margin-right: 60px; */
`

export { ProductMain, ProductList }