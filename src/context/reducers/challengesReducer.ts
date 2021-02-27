import { Reducer } from "react";
import { ChallengesActions, ChallengesActionTypes, ChallengesState } from "../types";
import { challenges } from "../../db/data/challenges";
import { getNextLevelExperience } from "../providers/ChallengesProvider";

export const challengesReducer: Reducer<ChallengesState, ChallengesActions> = (state, action) => {
  switch (action.type) {
    case ChallengesActionTypes.StartNewChallenge: {
      const randomChallengeIndex = Math.floor(Math.random() * challenges.length);

      return {
        ...state,
        activeChallenge: challenges[randomChallengeIndex],
      };
    }
    case ChallengesActionTypes.CompletedChallenge: {
      let currentExperience = state.currentExperience + action.payload.earnedExperience;
      let currentLevel = state.level;

      const nextLevelExperience = getNextLevelExperience(state.level);

      if (currentExperience >= nextLevelExperience) {
        currentExperience -= nextLevelExperience;
        ++currentLevel;
      }

      return {
        level: currentLevel,
        currentExperience,
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
