import { Header, Input, Post, CardData, SvgExample, PostData, SentryErrors } from './components'
import json from '@assets/data/data.json' with { type: 'json' }

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
    {EXPERIMENTAL_SHOW_POST_COMPONENT && <PostData />}
    <SentryErrors />
  </div>
)
