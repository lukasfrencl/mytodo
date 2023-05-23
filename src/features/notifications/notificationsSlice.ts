import { createSlice, PayloadAction, isRejected } from '@reduxjs/toolkit'

import { RootState } from 'app/store'
import { DEFAULT_ERROR_MESSAGE } from 'config/constants'

import { Notification, NotificationType } from './types'

const getErrorMessage = (action: PayloadAction<unknown>): string => {
  if (typeof action.payload === 'string') {
    return action.payload
  }
  return DEFAULT_ERROR_MESSAGE
}

export interface NotificationsState {
  items: Notification[]
  sequence: number,
}

const initialState: NotificationsState = {
  items: [],
  sequence: 1,
}

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    pushNotification: (state, action: PayloadAction<Notification>) => {
      state.items.push(action.payload)
    },
    pushErrorNotification: (state, action: PayloadAction<string>) => {
      state.items.push({ id: state.sequence, type: NotificationType.ERROR, message: action.payload })
      state.sequence = state.sequence + 1
    },
    deleteNotification: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(i => i.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isRejected, (state, action: PayloadAction<unknown>) => {
      state.items.push({ id: state.sequence, type: NotificationType.ERROR, message: getErrorMessage(action) })
      state.sequence = state.sequence + 1
    })
  },
})

export const {
  pushNotification,
  pushErrorNotification,
  deleteNotification,
} = notificationsSlice.actions

export const selectNotifications = (state: RootState) => state.notifications.items

export default notificationsSlice.reducer
