import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background-color: #00272d;
    }
    a {
    text-decoration: none;
    text-align: center;
    width: 100%;
    color: #ffff;
    margin-top: 5px;
    &:hover {
      cursor: pointer;
      filter: brightness(130%);
      text-decoration: underline;
    }
  }
`;

export default GlobalStyle;
