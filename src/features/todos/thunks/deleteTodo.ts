import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { API_BASE_URL } from 'config/constants'
import getErrorMessage from 'helpers/getErrorMessage'

const deleteTodo = createAsyncThunk<number, number>(
  'todos/delete',
  async (id: number, thunkAPI) => {
    try {
      await axios.delete(`${API_BASE_URL}/todos/${id}`)
      return id
    }
    catch (err) {
      return thunkAPI.rejectWithValue(getErrorMessage(err))
    }
  }
)

export default deleteTodo
