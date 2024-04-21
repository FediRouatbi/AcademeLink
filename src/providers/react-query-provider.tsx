"use client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
const queryClient = new QueryClient();

const ReactQueryProvider = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
};

export { ReactQueryProvider };
