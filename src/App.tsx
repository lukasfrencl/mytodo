import React from 'react'

import { styled } from '@mui/material/styles'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import Todos from 'features/todos/components/Todos'
import Notifications from 'features/notifications/components/Notifications'

const FullHeightContainer = styled(Container)(({ theme }) => ({
  flexGrow: 1,
  height: window.innerHeight,
  backgroundColor: theme.palette.grey['100'],
}))

export default function App() {
  return (
    <FullHeightContainer maxWidth="sm">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center" color="secondary">my<strong>Todo</strong></Typography>
        <Todos />
        <Notifications />
      </Box>
    </FullHeightContainer>
  )
}
