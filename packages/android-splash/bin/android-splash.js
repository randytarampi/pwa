#!/usr/bin/env node
'use strict'
var abbrev = require('abbrev')
var argv = require('yargs')
var splash = require('../')

// help
argv.help('help')
argv.alias('h', 'help')

// register abbreviated aliases
var abbrevs = abbrev(['format', 'help'])
var aliases = Object.keys(abbrevs)
aliases.forEach(function (alias) {
  if (alias !== abbrevs[alias]) {
    argv.alias(alias, abbrevs[alias])
  }
})

// document options
argv.option('format', {
  description: 'format of the output to stdout (csv or json)'
})

argv.usage('Usage: android-splash [options]')

argv.example('$ android-splash', 'GooglePlayFeature.png,1024,500 ...')

argv = argv.argv

function formatLog (splash, argv) {
  var format = argv.format
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
  var output = splash()
  if (output) console.log(formatLog(output, argv))
}

cli()
