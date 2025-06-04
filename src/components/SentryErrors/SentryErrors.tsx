import { Component, type ErrorInfo, useState, type ReactNode } from 'react'

import * as styles from './SentryErrors.module.css'
import { captureReactException } from '@sentry/react'

console.log('styles', styles)

const handleClickUnhandled = () => {
  throw new Error('Sentry Test Unhandled Error')
}

const SentryErrors = () => {
  const [showCaughtTest, setShowCaughtTest] = useState(false)
  const [showUncaughtTest, setShowUncaughtTest] = useState(false)
  return (
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
      <button className={styles['sentry-button']} type="button" onClick={handleClickUnhandled}>
        Throw unhandled error
      </button>
      <button
        className={styles['sentry-button']}
        type="button"
        onClick={() => setShowUncaughtTest(true)}
      >
        Throw unhandled render error
      </button>
      {showUncaughtTest && <RenderError />}
      <ErrorBoundary>
        <button
          className={styles['sentry-button']}
          type="button"
          onClick={() => setShowCaughtTest(true)}
        >
          Throw caught render error
        </button>
        {showCaughtTest && <RenderError />}
      </ErrorBoundary>
    </div>
  )
}

export default SentryErrors

const RenderError = () => {
  throw new Error('Sentry Test Render Error')
}

class ErrorBoundary extends Component<{ children: ReactNode }> {
  state: { hasError: boolean } = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('😄 Neares ErrorBoundary caught error2')
    captureReactException(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <b style={{ color: 'red', alignContent: 'center' }}>Something went wrong.</b>
    }

    return this.props.children
  }
}
