import { render, RenderOptions } from "@testing-library/react";
import React, { FC, ReactElement } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ThemeProvider } from "styled-components";
import { light } from "../../styles/theme";
import GlobalStyles from "../../styles/global";
import "@testing-library/jest-dom";

const AllTheProviders: FC = ({ children }) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      </ThemeProvider>
    </>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react"; // eslint-disable-line

export { customRender as render }; // eslint-disable-line
