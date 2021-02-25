import React, { createContext, Dispatch, useContext, useReducer } from "react";

import { countdownReducer } from "../reducers/countdownReducer";
import { CountdownActions, CountdownState } from "../types";

export const INITIAL_TIME = 0.05 * 60;

const initialState: CountdownState = {
  time: INITIAL_TIME,
  active: false,
  countdownEnded: false,
};

const CountdownContext = createContext<{
  state: CountdownState;
  dispatch: Dispatch<CountdownActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const CountdownProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(countdownReducer, initialState);

  return (
    <CountdownContext.Provider value={{ state, dispatch }}>{children}</CountdownContext.Provider>
  );
};

const useCountdownContext = () => useContext(CountdownContext);

export { CountdownProvider, useCountdownContext };
