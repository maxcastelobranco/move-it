import { Challenge } from "../db/data/challenges";

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

// Challenges

export type ChallengesState = {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: null | Challenge;
};

export enum ChallengesActionTypes {
  StartNewChallenge = "START_NEW_CHALLENGE",
  CompletedChallenge = "COMPLETED_CHALLENGE",
  FailedChallenge = "FAILED_CHALLENGE",
}

type ChallengesActionPayloads = {
  [ChallengesActionTypes.StartNewChallenge]: undefined;
  [ChallengesActionTypes.CompletedChallenge]: { earnedExperience: number };
  [ChallengesActionTypes.FailedChallenge]: undefined;
};

export type ChallengesActions = ActionMap<ChallengesActionPayloads>[keyof ActionMap<ChallengesActionPayloads>];

// Countdown

export type CountdownState = {
  time: number;
  active: boolean;
  countdownEnded: boolean;
};

export enum CountdownActionTypes {
  StartCountdown = "START_COUNTDOWN",
  ResetCountdown = "RESET_COUNTDOWN",
  DecreaseTime = "DECREASE_TIME",
  EndCountdown = "END_COUNTDOWN",
}

type CountdownActionPayloads = {
  [CountdownActionTypes.StartCountdown]: undefined;
  [CountdownActionTypes.ResetCountdown]: undefined;
  [CountdownActionTypes.DecreaseTime]: undefined;
  [CountdownActionTypes.EndCountdown]: undefined;
};

export type CountdownActions = ActionMap<CountdownActionPayloads>[keyof ActionMap<CountdownActionPayloads>];
