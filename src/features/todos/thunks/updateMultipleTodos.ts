import { createAsyncThunk } from '@reduxjs/toolkit'

import { TodoForUpdate } from '../types'

import updateTodo from './updateTodo'

const updateMultipleTodos = createAsyncThunk<void, TodoForUpdate[]>(
  'todos/updateMultiple',
  async (todos: TodoForUpdate[], thunkAPI) => {
    // dummy server does not support update multiple items in one request
    todos.forEach(todo => thunkAPI.dispatch(updateTodo(todo)))
  }
)

export default updateMultipleTodos
