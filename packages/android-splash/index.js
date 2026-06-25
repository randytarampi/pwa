import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const splash = require('./splash.json')
const widths = splash.map(function (image) {
  return image.width
})
const heights = splash.map(function (image) {
  return image.height
})

function getSplashForSize (width, height) {
  if (width) {
    width = getWidthForSize(width)
    if (!width) {
      return null
    }
    return splash[widths.indexOf(width)] || null
  }

  height = Number(height)
  return splash[heights.indexOf(height)] || null
}

function getWidthForSize (size) {
  if (typeof size === 'number') {
    return size
  }
  const width = Number(size)
  if (!isNaN(width) && size !== '') {
    return width
  }
  return null
}

function androidSplash (options = {}) {
  const width = options.width
  const height = options.height

  if (!width && !height) {
    return splash
  }
  return getSplashForSize(width, height)
}

androidSplash.splash = splash
androidSplash.getSplashForSize = getSplashForSize
androidSplash.getWidthForSize = getWidthForSize

export default androidSplash
export { splash, getSplashForSize, getWidthForSize }
