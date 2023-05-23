import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { API_BASE_URL } from 'config/constants'
import getErrorMessage from 'helpers/getErrorMessage'

import { Todo, TodoForUpdate } from '../types'

const updateTodo = createAsyncThunk<Todo, TodoForUpdate>(
  'todos/update',
  async (todo: TodoForUpdate, thunkAPI) => {
    try {
      const response = await axios.patch(`${API_BASE_URL}/todos/${todo.id}`, todo)
      return response.data
    }
    catch (err) {
      return thunkAPI.rejectWithValue(getErrorMessage(err))
    }
  }
)

export default updateTodo
