import { createGlobalStyle } from "styled-components";

type GlobalStyleProps = {
  theme: string;
};

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  * {
    margin:0;
    padding: 0;
  }

  html,
  body {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }

  .ant-layout-content  {
    background-color: ${(props) => props.theme.colors.backgroundColor};
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    transition: color .3s;
  }


`;

export default GlobalStyle;
