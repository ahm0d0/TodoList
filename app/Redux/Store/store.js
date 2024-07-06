import { configureStore } from "@reduxjs/toolkit";
import TodoListReducer from '../Reducer/todo-listReducer';
import colorsReducer from "../Reducer/colorsReducer";

// Middleware to save state to localStorage
const saveToLocalStorage = store => next => action => {
  const result = next(action);
  try {
    const state = store.getState();
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todoApp', serializedState);
  } catch (e) {
    console.warn('Unable to save state', e);
  }
  return result;
};

// Function to load state from localStorage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('todoApp');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn('Unable to load state', e);
    return undefined;
  }
};

const preloadedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    todo: TodoListReducer,
    colors: colorsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saveToLocalStorage),
  preloadedState,
  devTools: true,
});

export default store;
