// src/features/todos/todosSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    fetchTodosStart(state) {
      state.status = 'loading';
    },
    fetchTodosSuccess(state, action) {
      state.status = 'succeeded';
      state.items = action.payload;
    },
    fetchTodosFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { fetchTodosStart, fetchTodosSuccess, fetchTodosFailure } = todosSlice.actions;

export const fetchTodos = () => async (dispatch) => {
  dispatch(fetchTodosStart());
  try {
    const response = await fetch('https://dummyjson.com/todos');
    const data = await response.json();
    dispatch(fetchTodosSuccess(data.todos));
  } catch (error) {
    dispatch(fetchTodosFailure(error.toString()));
  }
};

export default todosSlice.reducer;
