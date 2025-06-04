import './sentry'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { reactErrorHandler } from '@sentry/react'

import { App } from './App'

import './babelTest'
import '@styles/styles.css'
import '@styles/scss.scss'

const rootElement = document.querySelector('#root') as HTMLElement
const root = ReactDOM.createRoot(rootElement, {
  onUncaughtError: reactErrorHandler((error, errorInfo) => {
    console.warn('⚠️⚠️⚠️ Root uncaught error', error, errorInfo.componentStack)
  }), // Callback called when an error is thrown and not caught by an ErrorBoundary.
  onCaughtError: reactErrorHandler(), // Callback called when React catches an error in an ErrorBoundary.
  onRecoverableError: reactErrorHandler(), // Callback called when React automatically recovers from errors.
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
