import * as $ from 'jquery/dist/jquery.min'

function createAnalytics() {
  let counter = 0
  let destroyed = false

  const listener = () => counter++
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
  interface Window {
    analytics: ReturnType<typeof createAnalytics>
  }
}

window.analytics = createAnalytics()
