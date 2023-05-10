import styled from "styled-components";
import searchImg from "../../assets/images/search.png"

const Inp = styled.input`
  background-color: none;
  border: none;
  padding: 5px 0 10px 4px;
  border-bottom: 1px solid #cdcbcb;
  margin: 10px 0;
  outline: none;
  width: 100%;
  ::placeholder{
    color: #cdcbcb;
  };
  :focus {
    outline: none;
    border-bottom: 1px teal solid;
  };

  &.search {
    border: 2px solid #14ae5c;
    border-radius: 20px;
    padding: 13px 237px 12px 22px;
    margin: 0 30px;
    background: url(${searchImg}) no-repeat 95% 50% / 6%;
    @media screen and (max-width: 768px) {
      display: none;
    };
  }
`;

const OverlapTest = styled.div`
  display: flex;
  justify-content: space-between;
`

export { Inp, OverlapTest };