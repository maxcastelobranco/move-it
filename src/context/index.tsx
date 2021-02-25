import React from "react";
import { ChallengesProvider } from "./providers/ChallengesProvider";
import { CountdownProvider } from "./providers/CountdownProvider";

interface AppProviderProps {
  children: React.ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <ChallengesProvider>
      <CountdownProvider>{children}</CountdownProvider>
    </ChallengesProvider>
  );
}
