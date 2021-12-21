import { createSlice } from "@reduxjs/toolkit";

const toolkitAuth = createSlice({
  name: "auth",

  initialState: {
    auth: false,
    count: 0,
        todos: ['снять видео', "смонтировать видео", "рассказать про toolkit"]
  },
  reducers: {
    login(state) {
      state.auth = true;
    },
    logout(state) {
      state.auth = false;
    },
    increment(state) {
      state.count = state.count + 1;
    },
    decrement(state) {
      state.count = state.count - 1;
    },
    addTodo(state, action) {
      if(action.payload == ""){
        alert("Please Check Todos")
      }else{
        state.todos.push(action.payload);
      }
    },
    removeLastTodo(state) {
      state.todos.pop();
    },
  },
});

export default toolkitAuth.reducer;

export const { login, logout, increment, decrement, addTodo, removeLastTodo } = toolkitAuth.actions;
