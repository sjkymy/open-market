import styled from "styled-components";
import closeIcon from "../../assets/images/icon-close.svg";

const ModalArticle = styled.article `
  width: 360px;
  height: 200px;
  border: 1px solid #c4c4c4;
  padding: 50px 0 40px;
  background: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  .close_btn {
    width: 22px;
    height: 22px;
    position: absolute;
    padding: 0;
    margin: 0;
    right: 18px;
    top: 18px;
    background: none;
    border: none;
    background-image: url(${closeIcon});
    background-position: center center;
  }
  .modal_text {
    width: 251px;
    line-height: 20px;
    margin: 0 auto;
    text-align: center;
    word-break: keep-all;
  }
  .btn_group {
    width: 210px;
    margin: 30px auto 0;
    display: flex;
    gap: 10px;
  }
`

export { ModalArticle }