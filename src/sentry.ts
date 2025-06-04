import { init } from '@sentry/react'

init({
  dsn: 'https://d4c9faf67f92fa0b42dc2656c8cd5e61@o4506605360775168.ingest.us.sentry.io/4509435044560896',
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
})
