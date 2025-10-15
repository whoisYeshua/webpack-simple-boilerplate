import { useState, lazy } from 'react'
import { Tabs } from './components'
import json from '@assets/data/data.json' with { type: 'json' }

const EXPERIMENTAL_SHOW_POST_COMPONENT = JSON.parse(
  process.env.EXPERIMENTAL_SHOW_POST_COMPONENT ?? 'false',
)

const PostLazy = lazy(() => import('./components/Post'))
const HMRInputLazy = lazy(() => import('./components/HmrInput'))
const SvgExampleLazy = lazy(() => import('./components/SvgExample'))
const CardDataLazy = lazy(() => import('./components/CardData'))
const PostDataLazy = lazy(() => import('./components/PostData'))
const SentryErrorsLazy = lazy(() => import('./components/SentryErrors'))

export const App = () => {
  const [activeTab, setActiveTab] = useState('hmr-input')

  return (
    <div className="container">
      <h1>Webpack simple boilerplate</h1>
      <div className="logo" />
      <div className="scss-card">
        <h2>SCSS CARD</h2>
      </div>

      <Tabs value={activeTab} onChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Tab value="hmr-input">HMR Input</Tabs.Tab>
          <Tabs.Tab value="post">Post</Tabs.Tab>
          <Tabs.Tab value="svg-example">SVG Example</Tabs.Tab>
          <Tabs.Tab value="card-data">Card Data</Tabs.Tab>
          {EXPERIMENTAL_SHOW_POST_COMPONENT && <Tabs.Tab value="post-data">Post Data</Tabs.Tab>}
          <Tabs.Tab value="sentry-errors">Sentry Errors</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="hmr-input">
          <HMRInputLazy />
        </Tabs.Panel>

        <Tabs.Panel value="post">
          <PostLazy />
        </Tabs.Panel>

        <Tabs.Panel value="svg-example">
          <SvgExampleLazy />
        </Tabs.Panel>

        <Tabs.Panel value="card-data">
          <CardDataLazy title={json.title} body={`Example: ${String(json.example)}`} />
        </Tabs.Panel>

        {EXPERIMENTAL_SHOW_POST_COMPONENT && (
          <Tabs.Panel value="post-data">
            <PostDataLazy />
          </Tabs.Panel>
        )}

        <Tabs.Panel value="sentry-errors">
          <SentryErrorsLazy />
        </Tabs.Panel>
      </Tabs>
    </div>
  )
}
