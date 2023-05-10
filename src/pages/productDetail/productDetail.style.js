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

const Image = styled.img `
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

const ProductStock = styled.p `
  margin: 150px 0 10px;
  font-size: 20px;
  color: var(--color-text);
  strong {
    font-weight: bold;
    color: var(--color-primary);
  }
`

export { MainEl, ProductInfoSection, ProductImage, Image, ProductOeder, StoreName, ProductName, ProductPrice, ProductStock }