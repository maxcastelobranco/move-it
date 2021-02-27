import React, { createContext, Dispatch, useContext, useMemo, useReducer } from "react";

import { challengesReducer } from "../reducers/challengesReducer";
import { ChallengesActions, ChallengesState } from "../types";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  avatarUrl: string;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const getNextLevelExperience = (level: number) => Math.pow((level + 1) * 5, 2);

interface ChallengesContextData {
  state: ChallengesState;
  dispatch: Dispatch<ChallengesActions>;
  nextLevelExperience: number;
  nextLevelPercentage: number;
  currentUser: User;
}

const ChallengesContext = createContext<ChallengesContextData>({} as ChallengesContextData);

const ChallengesProvider: React.FC<{ user: User }> = ({ children, user }) => {
  const [state, dispatch] = useReducer(challengesReducer, {
    level: user.level,
    currentExperience: user.currentExperience,
    challengesCompleted: user.challengesCompleted,
    activeChallenge: null,
  });

  const nextLevelExperience = useMemo(() => {
    return getNextLevelExperience(state.level);
  }, [state.level]);
  const nextLevelPercentage = useMemo(() => {
    return Number(((state.currentExperience * 100) / nextLevelExperience).toFixed(2));
  }, [nextLevelExperience, state.currentExperience]);

  return (
    <ChallengesContext.Provider
      value={{ state, dispatch, nextLevelExperience, nextLevelPercentage, currentUser: user }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};

const useChallengesContext = () => useContext(ChallengesContext);

export { ChallengesProvider, useChallengesContext };
