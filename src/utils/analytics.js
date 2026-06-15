const GA_ID = 'G-9S7QPKP9QJ'

const getGtag = () => (typeof window !== 'undefined' ? window.gtag : undefined)

const normalizeParams = (params) => Object.fromEntries(
  Object.entries(params).filter(([, value]) => value !== undefined).map(([key, value]) => {
    if (value === null) return [key, null]
    if (typeof value === 'object') return [key, JSON.stringify(value)]
    return [key, value]
  })
)

export const trackEvent = (name, params = {}) => {
  const gtag = getGtag()
  if (typeof gtag !== 'function') return
  gtag('event', name, normalizeParams(params))
}

export const trackPageView = (pagePath) => {
  const gtag = getGtag()
  if (typeof gtag !== 'function') return
  gtag('config', GA_ID, { page_path: pagePath })
}
