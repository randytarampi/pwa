#!/usr/bin/env node
import abbrev from 'abbrev'
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import splash from '../index.js'

const parser = yargs(hideBin(process.argv))

// help
parser.help('help')
parser.alias('h', 'help')

// register abbreviated aliases
const abbrevs = abbrev(['width', 'height', 'size', 'format', 'help'])
Object.keys(abbrevs).forEach(function (alias) {
  if (alias !== abbrevs[alias]) {
    parser.alias(alias, abbrevs[alias])
  }
})

// document options
parser.option('width', {
  description: 'width of the image in pixels'
})
parser.option('height', {
  description: 'height of the image in pixels'
})
parser.option('size', {
  description: 'string identifiying the splash image'
})
parser.option('format', {
  description: 'format of the output to stdout (csv or json)'
})

parser.usage('Usage: ios-splash [options]')

parser.example('$ ios-splash --width 320', 'Default~iphone.png,320,480')
parser.example('$ ios-splash --width 320 --format json', '{"name":"Default~iphone.png","width":320,"height":480}')
parser.example('$ ios-splash --size ~iphone', 'Default~iphone.png,320,480')

const argv = parser.argv

function formatLog (splash, argv) {
  let format = argv.format
  if (format === 'json') {
    return JSON.stringify(splash)
  }
  if (!(format === 'csv' || format === 'json')) format = 'csv'
  if (!Array.isArray(splash)) {
    splash = [splash]
  }
  return splash.map(function (image) {
    return image.name + ',' + image.width + ',' + image.height
  }).join('\n')
}

function cli () {
  const options = {
    size: argv.size,
    width: argv.width,
    height: argv.height
  }

  const output = splash(options)
  if (output) console.log(formatLog(output, argv))
}

cli()
