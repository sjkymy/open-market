import styled from "styled-components";

const IconDiv = styled.div `
  display: flex;
  gap: 30px;
  text-align: center;
  .btn_icon {
    cursor: pointer;
  }
`

const ImgIcon = styled.img `
  width: 32px;
  height: 32px;
`

const IconName = styled.p `
  font-size: 14px;
  margin-top: 4px;
`

export {IconDiv, ImgIcon, IconName}