/**
 * electerm - Terminal/SSH client built with Electron
 * Main client entry point
 */

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/app'
import { initStore } from './store'
import './styles/index.styl'

// Initialize global store
const store = initStore()

// Mount the React application
const container = document.getElementById('container')
const root = createRoot(container)

root.render(
  <App store={store} />
)

// Handle hot module replacement in development
if (module.hot) {
  module.hot.accept('./components/app', () => {
    const NextApp = require('./components/app').default
    root.render(
      <NextApp store={store} />
    )
  })
}
