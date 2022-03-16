import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};
const todoreducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setAllTods: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export default todoreducer.reducer;
export const { setAllTods } = todoreducer.actions;
