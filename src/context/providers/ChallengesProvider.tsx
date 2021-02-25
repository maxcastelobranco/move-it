import React, { createContext, Dispatch, useContext, useReducer } from "react";

import { challengesReducer } from "../reducers/challengesReducer";
import { ChallengesActions, ChallengesState } from "../types";

const initialState: ChallengesState = {
  level: 1,
  currentExperience: 0,
  challengesCompleted: 0,
  activeChallenge: null,
};

const ChallengesContext = createContext<{
  state: ChallengesState;
  dispatch: Dispatch<ChallengesActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const ChallengesProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(challengesReducer, initialState);

  return (
    <ChallengesContext.Provider value={{ state, dispatch }}>{children}</ChallengesContext.Provider>
  );
};

const useChallengesContext = () => useContext(ChallengesContext);

export { ChallengesProvider, useChallengesContext };
