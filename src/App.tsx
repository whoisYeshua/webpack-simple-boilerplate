import { Header, Input, Post, CardData } from './components'
import json from '@assets/data/data.json'
import xml from '@assets/data/data.xml'
import csv from '@assets/data/data.csv'

console.log('json', json)
console.log('xml', xml)
console.log('csv', csv)

export const App = () => (
  <div className="container">
    <h1>Webpack simple boilerplate</h1>
    <hr />
    <div className="logo" />
    <hr />
    <Post />
    <hr />
    <div className="scss-card">
      <h2>SCSS CARD</h2>
    </div>
    <hr />
    <Header />
    <Input />
    <hr />
    <CardData title={json.title} example={String(json.example)} />
    <CardData title={xml.root.title} example={xml.root.example} />
    <CardData title={csv[1][0]} example={String(csv[1][1])} />
  </div>
)
