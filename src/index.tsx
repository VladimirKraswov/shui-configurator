import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import {BrowserRouter} from 'react-router-dom'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const theme = createTheme({
  // direction: 'rtl',
  // other theme properties
  spacing: 4,
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
