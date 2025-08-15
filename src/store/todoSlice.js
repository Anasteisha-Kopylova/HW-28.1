import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ text: action.payload });
    },
  },
});

export const { addTask } = todoSlice.actions;
export default todoSlice.reducer;
