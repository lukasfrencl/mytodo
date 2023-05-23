import React from 'react'

import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'

import { useAppSelector, useAppDispatch } from 'app/hooks'

import { selectNotifications, deleteNotification } from '../notificationsSlice'

export default function Notifications() {
  const notifications = useAppSelector(selectNotifications)
  const dispatch = useAppDispatch()

  return (
    <Box sx={{ position: 'fixed', bottom: 10, right: 10 }}>
      {notifications.map(notification => (
        <Alert
          key={notification.id}
          variant="filled"
          severity={notification.type}
          sx={{ mt: 1 }}
          onClose={() => dispatch(deleteNotification(notification.id))}
        >
          {notification.message}
        </Alert>
      ))}
    </Box>
  )
}
