#!/usr/bin/env node
'use strict'
var abbrev = require('abbrev')
var argv = require('yargs')
var pkg = require('../package.json')
var resize = require('../')

// help
argv.help('help')
argv.alias('h', 'help')

// register abbreviated aliases
var abbrevs = abbrev(['input', 'output', 'help'])
var aliases = Object.keys(abbrevs)
aliases.forEach(function (alias) {
  if (alias !== abbrevs[alias]) {
    argv.alias(alias, abbrevs[alias])
  }
})

// document options
argv.option('input', {
  description: 'input path for the original icon file'
})
argv.option('output', {
  description: 'output directory'
})

argv.usage('Usage: $ android-icon-resize [options]')

argv.example('$ android-icon-resize -i path/to/icon.png -o path/to/output/')

argv = argv.argv

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
