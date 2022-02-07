import NextApp from "next/app";
import Head from "next/head";
import ReactQueryProvider from "providers/ReactQuery";
import React from "react";
import GlobalStyles from "../../styles/global";
import { ThemeProvider } from "styled-components";
import { light } from "../../styles/theme";

class App extends NextApp {
  render() {
    const Component = this.props.Component;
    const pageProps = this.props.pageProps;

    return (
      <>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=1240" />
        </Head>

        <ThemeProvider theme={light}>
          <ReactQueryProvider>
            <GlobalStyles />
            <Component {...pageProps} />
          </ReactQueryProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
