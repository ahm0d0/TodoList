import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  id: 1,
  tasks: [],
  colors: {},
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTextToTask: (state, action) => {
      state.text = action.payload;
    },
    addTaskToPage: (state) => {
      if(state.text.trim() !== ""){
        if (typeof state.tasks !== 'undefined' && Array.isArray(state.tasks)) {
        const newId = state.id + 1;
        state.tasks.push({ text: state.text, id: newId, cheak: true });
        state.text = ""; // Reset text after adding task
        state.id = newId; // Update state.id
      } else {
        console.log("tasks is undefined or not an array");
      }
      }
      
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, text, cheak } = action.payload;
      const taskToUpdate = state.tasks.find((task) => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.text = text;
        taskToUpdate.cheak = cheak;
      }
    },
    editButtonText: (state, action) => {
      const { cheak, id } = action.payload;
      const taskToUpdate = state.tasks.find((task) => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.cheak = cheak;
      }
    },
    markUpColor: (state, action) => {
      const { id, color } = action.payload;
      state.colors[id] = color;
    },
  },
});

export const {
  addTextToTask,
  addTaskToPage,
  deleteTask,
  editTask,
  editButtonText,
  markUpColor,
} = todoSlice.actions;

export default todoSlice.reducer;
