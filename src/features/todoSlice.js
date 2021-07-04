import { createSlice } from '@reduxjs/toolkit';

// let url = 'https://jsonplaceholder.typicode.com/todos/1';

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList = [...state.todoList, action.payload];
    },
    setCheck: (state, action) => {
      state.todoList.forEach((item) => {
        if (action.payload === item.id) {
          if (item.done) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
      });
    },
  },
});

export const { saveTodo, setCheck } = todoSlice.actions;
export const selectTodoList = (state) => state.todos.todoList;
export default todoSlice.reducer;
