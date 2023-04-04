import styled from "styled-components";

const ImgProduct = styled.div `
    position: relative;
    width: 300px;
    height: 300px;
    border: 1px solid #C4C4C4;
    border-radius: 10px;
    overflow: hidden;
    @media screen and (max-width: 768px) {
        width: 90%;
        height: 90%;
    }
`

const CardList = styled.li `
    cursor: pointer;
`

export { ImgProduct, CardList }