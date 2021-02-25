import { Reducer } from "react";
import { INITIAL_TIME } from "../providers/CountdownProvider";
import { CountdownActions, CountdownActionTypes, CountdownState } from "../types";

export const countdownReducer: Reducer<CountdownState, CountdownActions> = (state, action) => {
  switch (action.type) {
    case CountdownActionTypes.StartCountdown: {
      return {
        ...state,
        active: true,
      };
    }
    case CountdownActionTypes.ResetCountdown: {
      return {
        countdownEnded: false,
        active: false,
        time: INITIAL_TIME,
      };
    }
    case CountdownActionTypes.DecreaseTime: {
      return {
        ...state,
        time: state.time - 1,
      };
    }
    case CountdownActionTypes.EndCountdown: {
      return {
        ...state,
        countdownEnded: true,
        active: false,
      };
    }
    default:
      return state;
  }
};
