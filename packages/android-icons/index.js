import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const icons = require('./icons.json')
const idRegEx = /^(.*)\.png$/
const widths = icons.map(function (icon) {
  return icon.width
})
const ids = icons.map(function (icon) {
  return icon.name.match(idRegEx)[1]
})

function getIconForSize (size) {
  const width = getWidthForSize(size)

  if (!width) {
    return null
  }

  return icons[widths.indexOf(width)] || null
}

function getWidthForSize (size) {
  if (typeof size === 'number') return size

  let width = Number(size)
  if (!isNaN(width)) return width

  width = widths[ids.indexOf(size)]
  if (width) return width

  return widths[ids.indexOf(size.match(idRegEx)[1])]
}

function androidIcons (options = {}) {
  const size = options.size

  if (!size) return icons

  return getIconForSize(size)
}

androidIcons.icons = icons
androidIcons.getIconForSize = getIconForSize
androidIcons.getWidthForSize = getWidthForSize

export default androidIcons
export { icons, getIconForSize, getWidthForSize }
