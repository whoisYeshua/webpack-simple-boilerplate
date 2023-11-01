import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'
import './babelTest'
import '@styles/styles.css'
import '@styles/scss.scss'

const rootElement = document.querySelector('#root') as HTMLElement
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
