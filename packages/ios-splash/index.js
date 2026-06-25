import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const splash = require('./splash.json')
const idRegEx = /^Default-?(.*)\.png$/
const widths = splash.map(function (image) {
  return image.width
})
const heights = splash.map(function (image) {
  return image.height
})
const ids = splash.map(function (image) {
  return image.name.match(idRegEx)[1]
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
  let width = Number(size)
  if (!isNaN(width) && size !== '') {
    return width
  }
  width = widths[ids.indexOf(size)]
  if (width) {
    return width
  }
  const id = size.match(idRegEx)
  if (id && id[1]) {
    return widths[ids.indexOf(id[1])]
  }

  return null
}

function iosSplash (options = {}) {
  const size = options.size
  const width = options.width
  const height = options.height

  if (!width && !height && !size) {
    return splash
  }
  return getSplashForSize(width || size, height)
}

iosSplash.splash = splash
iosSplash.getSplashForSize = getSplashForSize
iosSplash.getWidthForSize = getWidthForSize

export default iosSplash
export { splash, getSplashForSize, getWidthForSize }
