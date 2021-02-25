import React, { createContext, Dispatch, useContext, useMemo, useReducer } from "react";

import { challengesReducer } from "../reducers/challengesReducer";
import { ChallengesActions, ChallengesState } from "../types";

export const getNextLevelExperience = (level: number) => Math.pow((level + 1) * 5, 2);

const initialState: ChallengesState = {
  level: 1,
  currentExperience: 0,
  challengesCompleted: 0,
  activeChallenge: null,
};

const ChallengesContext = createContext<{
  state: ChallengesState;
  dispatch: Dispatch<ChallengesActions>;
  nextLevelExperience: number;
  nextLevelPercentage: number;
}>({
  state: initialState,
  dispatch: () => null,
  nextLevelExperience: getNextLevelExperience(initialState.level),
  nextLevelPercentage: 0,
});

const ChallengesProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(challengesReducer, initialState);

  const nextLevelExperience = useMemo(() => {
    return getNextLevelExperience(state.level);
  }, [state.level]);
  const nextLevelPercentage = useMemo(() => {
    return Number(((state.currentExperience * 100) / nextLevelExperience).toFixed(2));
  }, [nextLevelExperience, state.currentExperience]);

  return (
    <ChallengesContext.Provider
      value={{ state, dispatch, nextLevelExperience, nextLevelPercentage }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};

const useChallengesContext = () => useContext(ChallengesContext);

export { ChallengesProvider, useChallengesContext };
