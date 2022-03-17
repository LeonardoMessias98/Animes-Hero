import "antd/dist/antd.less";
import { useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import Theme from "shared/styles/Theme";
import Layout from "shared/providers/Layout";
import GlobalStyle from "shared/styles/GlobalStyle";
import GlobalContext from "shared/providers/context/GlobalContext";
import GlobalType from "shared/providers/context/GlobalContext/type";
import Head from "shared/seo/Head";

function MyApp({ Component, pageProps }: AppProps) {
  const [state, setState] = useState({} as GlobalType);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      <ThemeProvider theme={Theme("light")}>
        <Head />
        <GlobalStyle />

        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
