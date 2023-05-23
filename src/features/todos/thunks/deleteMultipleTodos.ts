import { createAsyncThunk } from '@reduxjs/toolkit'

import deleteTodo from './deleteTodo'

const deleteMultipleTodos = createAsyncThunk<void, number[]>(
  'todos/deleteMultiple',
  async (ids: number[], thunkAPI) => {
    // dummy server does not support delete multiple items in one request
    ids.forEach(id => thunkAPI.dispatch(deleteTodo(id)))
  }
)

export default deleteMultipleTodos
