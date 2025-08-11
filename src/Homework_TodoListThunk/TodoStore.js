import { configureStore } from "@reduxjs/toolkit";
import { TodoSlice } from "./TodoSlice";

const TodoStore = configureStore({
  reducer: {
    todos: TodoSlice.reducer,
  },
});

export default TodoStore;
