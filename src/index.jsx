import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import AppProvider from './contexts/AppProvider'
import './styles/global.scss'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
)
