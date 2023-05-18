import styled from "styled-components";

const BannerSlideWrapper = styled.div `
  width: 1280px;
  margin: 0 auto;
  position: relative;
  .prevBtn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    height: 50px;
    cursor: pointer;
  }
  .nextBtn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    height: 50px;
    cursor: pointer;
  }
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  .pagination span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: gray;
    margin: 0 5px;
    cursor: pointer;
  }
  .pagination span.active {
    background-color: var(--color-primary);
  }
`

const Img = styled.img `
  height: 500px;
  width: 1280px;
  object-fit: cover;
`

export { BannerSlideWrapper, Img }