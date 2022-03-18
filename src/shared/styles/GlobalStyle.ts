import { createGlobalStyle } from "styled-components";

type GlobalStyleProps = {
  theme: { colors: { backgroundColor: string } };
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

  #__next,
  .ant-layout-content  {
    background-color: ${(props) => props.theme.colors.backgroundColor};
  }

  .ant-layout-content  {
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

  @media(max-width: 1980px) {
    html {
      font-size: 81.25%;
    }
  }

  @media(max-width: 1680px) {
    html {
      font-size: 78.125%;
    }
  }

  @media(max-width: 1440px) {
    html {
      font-size: 75%;
    }
  }

  @media(max-width: 1360px) {
    html {
      font-size: 68.75%;
    }
  }

  @media(max-width: 1280px) {
    html {
      font-size: 62.5%;
    }
  }

  @media(max-width: 1024px) {
    html {
      font-size: 56.25%;
    }
  }
  
  @media(max-width: 960px) {
    html {
      font-size: 50%;
    }
  }


`;

export default GlobalStyle;
