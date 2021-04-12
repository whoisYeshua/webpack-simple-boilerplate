const $ = require('jquery/dist/jquery.min')
import Post from '@models/Post'
// import json from '@assets/json'
// import xml from '@assets/data.xml'
// import csv from '@assets/data.csv'
import WebpackLogo from '@assets/webpack-logo'
import React from 'react'
import { render } from 'react-dom'
import './babel'
import '@styles/styles'
import '@styles/scss'

const App = () => (
  <div className="container">
    <h1>Webpack Course</h1>
    <hr />
    <div className="logo" />
    <hr />
    <pre />
    <hr />
    <div className="card">
      <h2>Scss</h2>
    </div>
    <hr />
    <input type="text" placeholder="type" />
  </div>
)

render(<App />, document.getElementById('app'))

const post = new Post('Webpack Post Title test', WebpackLogo)
$('pre').addClass('code').html(post.toString())

// console.log('JSON:', json)
// console.log('XML:', xml)
// console.log('CSV:', xml)
