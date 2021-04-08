const $ = require('jquery')
import Post from '@models/Post'
// import json from '@assets/json'
// import xml from '@assets/data.xml'
// import csv from '@assets/data.csv'
import WebpackLogo from '@assets/webpack-logo'
import '@styles/styles.css'

const post = new Post('Webpack Post Title test', WebpackLogo)

$('pre').html(post.toString())

// console.log('JSON:', json)
// console.log('XML:', xml)
// console.log('CSV:', xml)
