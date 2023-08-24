"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

export const NextSessionProvider = ({ children }: ProviderProps) => (
  <SessionProvider>{children}</SessionProvider>
);
