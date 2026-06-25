#!/usr/bin/env node
import abbrev from 'abbrev'
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import { createRequire } from 'node:module'
import icons from '../index.js'

const require = createRequire(import.meta.url)
const pkg = require('../package.json')
const parser = yargs(hideBin(process.argv))

// help
parser.help('help')
parser.alias('h', 'help')

// register abbreviated aliases
const abbrevs = abbrev(['size', 'format', 'help', 'version'])
Object.keys(abbrevs).forEach(function (alias) {
  if (alias !== abbrevs[alias]) {
    parser.alias(alias, abbrevs[alias])
  }
})

// document options
parser.option('size', {
  description: 'number of pixels (width) or string identifiying the icon image'
})
parser.option('format', {
  description: 'format of the output to stdout (csv or json)'
})

// will show up in help
parser.usage('Usage: ios-icons [options]')

parser.example('$ ios-icons --size 180', 'icon-60@3x.png,180')
parser.example('$ ios-icons --size 180 --format json', '{"name":"icon-60@3x.png","width":180}')
parser.example('$ ios-icons --size 60@3x', 'icon-60@3x.png,180')

const argv = parser.argv

function formatLog (icons, argv) {
  const format = (argv.format || 'csv').toLowerCase()
  if (format === 'json') {
    return JSON.stringify(icons)
  }
  if (!Array.isArray(icons)) {
    icons = [icons]
  }
  return icons.map(function (icon) {
    return icon.name + ',' + icon.width
  }).join('\n')
}

function cli () {
  if (argv.version) {
    return console.log(pkg.version)
  }

  const options = {
    size: argv.size
  }

  const output = icons(options)
  if (output) console.log(formatLog(output, argv))
}

cli()
