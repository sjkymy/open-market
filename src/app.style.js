import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  :root {
    --color-primary: #21BF48;
    --color-text: #3F3F46;
    --color-dark: #767676;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
  }

  * {
    box-sizing: border-box;
  }

  .ir {
    position: absolute;
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
  button {
    font-family: "Pretendard";
    border: none;
    cursor: pointer;
    :disabled {
      cursor: default;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyles;