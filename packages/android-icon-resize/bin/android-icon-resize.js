#!/usr/bin/env node
import abbrev from 'abbrev'
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import { createRequire } from 'node:module'
import resize from '../index.js'

const require = createRequire(import.meta.url)
const pkg = require('../package.json')
const parser = yargs(hideBin(process.argv))

// help
parser.help('help')
parser.alias('h', 'help')

// register abbreviated aliases
const abbrevs = abbrev(['input', 'output', 'help'])
Object.keys(abbrevs).forEach(function (alias) {
  if (alias !== abbrevs[alias]) {
    parser.alias(alias, abbrevs[alias])
  }
})

// document options
parser.option('input', {
  description: 'input path for the original icon file'
})
parser.option('output', {
  description: 'output directory'
})

parser.usage('Usage: $ android-icon-resize [options]')

parser.example('$ android-icon-resize -i path/to/icon.png -o path/to/output/')

const argv = parser.argv

function cli (argv) {
  if (argv.version) {
    return console.log(pkg.version)
  }

  if (argv.input) {
    return resize(argv.input, argv.output)
  }

  console.error('Please specify an input icon file witht the `-i` option.')
}

cli(argv)
