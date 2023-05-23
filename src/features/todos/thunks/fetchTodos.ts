import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { API_BASE_URL } from 'config/constants'
import getErrorMessage from 'helpers/getErrorMessage'

import { Todo } from '../types'

const fetchTodos = createAsyncThunk<Todo[]>(
  'todos/fetch',
  async (obj, thunkAPI) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/todos`)
      return response.data
    }
    catch (err) {
      return thunkAPI.rejectWithValue(getErrorMessage(err))
    }
  }
)

export default fetchTodos
