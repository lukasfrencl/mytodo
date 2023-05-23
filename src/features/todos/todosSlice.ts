import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from 'app/store'

import fetchTodos from './thunks/fetchTodos'
import addTodo from './thunks/addTodo'
import updateTodo from './thunks/updateTodo'
import deleteTodo from './thunks/deleteTodo'

import { Todo } from './types'

export interface TodosState {
  items: Todo[]
}

const initialState: TodosState = {
  items: [],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.items = action.payload
      })
      .addCase(addTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.items.push(action.payload)
      })
      .addCase(updateTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.items = state.items.map(i => i.id === action.payload.id ? action.payload : i)
      })
      .addCase(deleteTodo.fulfilled, (state, action: PayloadAction<number>) => {
        state.items = state.items.filter(i => i.id !== action.payload)
      })
  },
})

export const selectTodos = (state: RootState) => state.todos.items

export default todosSlice.reducer
