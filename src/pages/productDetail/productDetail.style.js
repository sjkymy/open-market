import styled from "styled-components";

const MainEl = styled.main `
    width: 1280px;
    margin: 150px auto 0;
    padding-bottom: 156px;
`

const ProductInfoSection = styled.section `
    display: flex;
    width: 100%;
`

const ProductImage = styled.div `
    width: 600px;
    height: 600px;
`

const ProductOeder = styled.div `
    margin-left: 50px;
    width: 100%;
`

const StoreName = styled.p `
    font-size: 18px;
    margin-bottom: 16px;
`

const ProductName = styled.h3 `
    font-size: 36px;
`

const ProductPrice = styled.p `
    font-size: 36px;
    font-weight: bold;
    margin-top: 20px;
`

export { MainEl, ProductInfoSection, ProductImage, ProductOeder, StoreName, ProductName, ProductPrice }