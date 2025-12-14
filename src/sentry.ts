import { init } from '@sentry/react'

const dsn = process.env.SENTRY_DSN

if (dsn && process.env.NODE_ENV === 'production') {
  init({
    dsn,
    environment: process.env.NODE_ENV,
    // Adds request headers and IP for users, for more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/react/configuration/options/#sendDefaultPii
    sendDefaultPii: true,
    tracesSampleRate: 0.5,
  })
}
