import Head from "next/head";
import { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { AppProps } from "next/dist/shared/lib/router/router";
import { light } from "../../styles/theme";
import GlobalStyles from "../../styles/global";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
      },
    },
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>

      <ThemeProvider theme={light}>
        <QueryClientProvider client={client}>
          <GlobalStyles />
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
