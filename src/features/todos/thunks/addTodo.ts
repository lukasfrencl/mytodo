import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { API_BASE_URL } from 'config/constants'
import getErrorMessage from 'helpers/getErrorMessage'

import { Todo } from '../types'

const addTodo = createAsyncThunk<Todo, string>(
  'todos/add',
  async (description: string, thunkAPI) => {
    // unhappy path test case
    if (description === 'tell me bad news') {
      return thunkAPI.rejectWithValue('Something unexpected has happened.')
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/todos`, {
        description,
        completed: false,
      })
      return response.data
    }
    catch (err) {
      return thunkAPI.rejectWithValue(getErrorMessage(err))
    }
  }
)

export default addTodo
