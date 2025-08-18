import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    },
    fetchFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    addStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addSuccess: (state, action) => {
      state.loading = false;
      state.tasks.push(action.payload);
    },
    addFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteSuccess: (state, action) => {
      state.loading = false;
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
    deleteFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    toggleStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    toggleSuccess: (state, action) => {
      state.loading = false;
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) task.completed = action.payload.completed;
    },
    toggleFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    editStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    editSuccess: (state, action) => {
      state.loading = false;
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) task.text = action.payload.text;
    },
    editFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchStart,
  fetchSuccess,
  fetchFailure,
  addStart,
  addSuccess,
  addFailure,
  deleteStart,
  deleteSuccess,
  deleteFailure,
  toggleStart,
  toggleSuccess,
  toggleFailure,
  editStart,
  editSuccess,
  editFailure,
} = todosSlice.actions;

export default todosSlice.reducer;
