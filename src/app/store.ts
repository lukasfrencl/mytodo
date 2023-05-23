import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit'

import notificationsReducer from 'features/notifications/notificationsSlice'
import todosReducer from 'features/todos/todosSlice'

export const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
    todos: todosReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
