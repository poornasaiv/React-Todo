import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk to fetch todos from external API
export const fetchInitialTodo = createAsyncThunk(
  "todo/fetchInitialTodo",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }
      const data = await response.json();
      return data.map((todo) => ({
        id: todo.id.toString(),
        value: todo.title,
        isCompleted: todo.completed,
      }));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const TodoSlice = createSlice({
  name: "Todo",
  initialState: {
    todoList: [],
    loading: false,
    error: null,
  },
  reducers: {
    add: (state, action) => {
      state.todoList.push(action.payload);
    },
    edit: (state, action) => {
      const todo = state.todoList.find((t) => t.id == action.payload.id);
      if (todo) {
        todo.value = action.payload.value;
      }
    },
    deleteT: (state, action) => {
      state.todoList = state.todoList.filter((t) => t.id !== action.payload.id);
    },
    toggle: (state, action) => {
      const todo = state.todoList.find((t) => t.id == action.payload.id);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInitialTodo.fulfilled, (state, action) => {
        state.todoList = action.payload;
        state.loading = false;
      })
      .addCase(fetchInitialTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch todos";
      });
  },
});

export const { add, edit, deleteT, toggle } = TodoSlice.actions;
