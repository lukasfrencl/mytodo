import React from 'react'
import { Provider } from 'react-redux'

import { render, screen } from '@testing-library/react'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import { store } from 'app/store'
import theme from 'app/theme'

import App from './App'

test('renders learn react link', () => {
  render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  )

  expect(screen.getByText(/Todo/i)).toBeInTheDocument()
})
