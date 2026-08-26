"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

export const QueryProvider = ({ children }: {children: React.ReactNode}) => {
  const [query, setQuery] = React.useState(() => new QueryClient());

  return <QueryClientProvider client={query}>{children}</QueryClientProvider>;
};