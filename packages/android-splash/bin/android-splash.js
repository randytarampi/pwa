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
const abbrevs = abbrev(['format', 'help'])
Object.keys(abbrevs).forEach(function (alias) {
  if (alias !== abbrevs[alias]) {
    parser.alias(alias, abbrevs[alias])
  }
})

// document options
parser.option('format', {
  description: 'format of the output to stdout (csv or json)'
})

parser.usage('Usage: android-splash [options]')

parser.example('$ android-splash', 'GooglePlayFeature.png,1024,500 ...')

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
  const output = splash()
  if (output) console.log(formatLog(output, argv))
}

cli()
