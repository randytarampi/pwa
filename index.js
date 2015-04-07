'use strict'
var splash = require('./splash.json')
var widths = splash.map(function (image) {
  return image.width
})
var heights = splash.map(function (image) {
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
  var width = Number(size)
  if (!isNaN(width) && size !== '') {
    return width
  }
  return null
}

module.exports = function (options) {
  options = options || {}
  var width = options.width
  var height = options.height
  if (!width && !height) {
    return splash
  }
  return getSplashForSize(width, height)
}

module.exports.splash = splash
module.exports.getSplashForSize = getSplashForSize
module.exports.getWidthForSize = getWidthForSize
