import { FC } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

const ReactQueryProvider: FC = ({ children }) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
      },
    },
  });

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
