import * as $ from 'jquery/dist/jquery.min'

function createAnalytics() {
  let counter = 0
  let destroyed = false

  // eslint-disable-next-line no-plusplus
  const listener = (): number => counter++
  $(document).on('click', listener)

  return {
    destroy() {
      $(document).off('click', listener)
      destroyed = true
    },
    getClicks() {
      if (destroyed) {
        return `Analytics is destroyed. Total clicks = ${counter}`
      }
      return counter
    },
  }
}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    analytics: ReturnType<typeof createAnalytics>
  }
}

window.analytics = createAnalytics()
