import "antd/dist/antd.less";
import { useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import Theme from "shared/styles/Theme";
import GlobalStyle from "shared/styles/GlobalStyle";
import GlobalContext from "shared/providers/context/GlobalContext";
import GlobalType from "shared/providers/context/GlobalContext/type";

function MyApp({ Component, pageProps }: AppProps) {
  const [state, setState] = useState({} as GlobalType);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      <ThemeProvider theme={Theme("light")}>
        <GlobalStyle />
        <Component {...pageProps} />;
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
