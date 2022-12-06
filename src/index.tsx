import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'
import './babelTest'
import '@styles/styles.css'
import '@styles/scss.scss'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.querySelector('#root')!
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
