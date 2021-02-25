import { Reducer } from "react";
import { ChallengesActions, ChallengesActionTypes, ChallengesState } from "../types";
import { challenges } from "../../../challenges";

export const challengesReducer: Reducer<ChallengesState, ChallengesActions> = (state, action) => {
  switch (action.type) {
    case ChallengesActionTypes.LevelUp: {
      return {
        ...state,
        level: state.level + 1,
      };
    }
    case ChallengesActionTypes.StartNewChallenge: {
      const randomChallengeIndex = Math.floor(Math.random() * challenges.length);

      return {
        ...state,
        activeChallenge: challenges[randomChallengeIndex],
      };
    }
    case ChallengesActionTypes.CompletedChallenge: {
      return {
        ...state,
        currentExperience: state.currentExperience + action.payload.earnedExperience,
        challengesCompleted: state.challengesCompleted + 1,
        activeChallenge: null,
      };
    }
    case ChallengesActionTypes.FailedChallenge: {
      return {
        ...state,
        activeChallenge: null,
      };
    }
    default:
      return state;
  }
};
