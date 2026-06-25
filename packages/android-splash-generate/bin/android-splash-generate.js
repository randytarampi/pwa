#!/usr/bin/env node
import minimist from 'minimist'
import { createRequire } from 'node:module'
import generate from '../index.js'

const require = createRequire(import.meta.url)
const pkg = require('../package.json')
const argv = minimist(process.argv.slice(2))
const input = argv.input || argv.i
const output = argv.output || argv.o

function help () {
  console.log([
    pkg.description,
    '',
    'Example',
    '  $ android-splash-generate -i path/to/source.png -o path/to/output/'
  ].join('\n'))
}

function cli () {
  if (argv.help) {
    help()
    return
  }

  if (argv.version) {
    console.log(pkg.version)
    return
  }

  if (input) {
    generate(argv.input || argv.i, output)
  } else {
    console.error('Please specify an input icon file witht the `-i` option.')
  }
}

cli()
