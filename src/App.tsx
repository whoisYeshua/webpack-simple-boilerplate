import { Header, Input, Post, CardData, SvgExample, PostData } from './components'
import json from '@assets/data/data.json'
import xml from '@assets/data/data.xml'
import csv from '@assets/data/data.csv'

console.log('json', json)
console.log('xml', xml)
console.log('csv', csv)

const EXPERIMENTAL_SHOW_POST_COMPONENT = JSON.parse(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  process.env.EXPERIMENTAL_SHOW_POST_COMPONENT!,
)

export const App = () => (
  <div className="container">
    <h1>Webpack simple boilerplate</h1>
    <div className="logo" />
    <Post />
    <div className="scss-card">
      <h2>SCSS CARD</h2>
    </div>
    <Header />
    <Input />
    <SvgExample />
    <CardData title={json.title} body={`Example: ${String(json.example)}`} />
    <CardData title={xml.root.title} body={`Example: ${xml.root.example}`} />
    <CardData title={csv[1][0]} body={`Example: ${String(csv[1][1])}`} />
    {EXPERIMENTAL_SHOW_POST_COMPONENT && <PostData />}
  </div>
)
