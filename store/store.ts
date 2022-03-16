import { configureStore, combineReducers, AnyAction } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

import { counter } from "./counter/reducer";

const reducer = (
  state: ReturnType<typeof combineReducers>,
  action: AnyAction
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return combineReducers({
    counter,
  })(state, action);
};

export const makeStore = () => configureStore({ reducer });

export const wrapper = createWrapper(makeStore, { debug: true });
