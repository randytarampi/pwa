#!/usr/bin/env node
import abbrev from 'abbrev'
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import icons from '../index.js'

const parser = yargs(hideBin(process.argv))

// help
parser.help('help')
parser.alias('h', 'help')

// register abbreviated aliases
const abbrevs = abbrev(['help', 'size', 'format'])
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
parser.usage('Usage: android-icons [options]')

parser.example('$ android-icons --size 48', 'mdpi.png,48')
parser.example('$ android-icons --size 48 --format json', '{"name":"mdpi.png","width":48}')
parser.example('$ android-icons --size xhdpi', 'xhdpi.png,96')

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
  const options = {
    size: argv.size
  }

  const output = icons(options)
  if (output) console.log(formatLog(output, argv))
}

cli()
