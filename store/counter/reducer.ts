import { createReducer } from "@reduxjs/toolkit";
import * as act from "./actions";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counter = createReducer(initialState, (builder) => {
  builder
    .addCase(act.increment, (state) => {
      if (state.value >= 100) {
        state.value = 100;
      } else {
        state.value += 1;
      }
    })
    .addCase(act.decrement, (state) => {
      if (state.value <= 0) {
        state.value = 0;
      } else {
        state.value -= 1;
      }
    });
});
