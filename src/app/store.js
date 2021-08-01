import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';
import formReducer from '../features/formSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    forms: formReducer,
  },
});
