import React from 'react'
import ReactDOM from 'react-dom/client'
// import json from '@assets/json'
// import xml from '@assets/data.xml'
// import csv from '@assets/data.csv'

import { Header, Input, Post } from './components'

import './babel.js'
import '@styles/styles.css'
import '@styles/scss'

const App = () => (
  <div className="container">
    <h1>Webpack Course</h1>
    <hr />
    <div className="logo" />
    <hr />
    <Post />
    <hr />
    <div className="card">
      <h2>Scss</h2>
    </div>
    <hr />
    <Header />
    <Input />
  </div>
)

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// console.log('JSON:', json)
// console.log('XML:', xml)
// console.log('CSV:', xml)
