#!/usr/bin/env node
import abbrev from 'abbrev'
import minimist from 'minimist'
import { createRequire } from 'node:module'
import generate from '../index.js'

const require = createRequire(import.meta.url)
const pkg = require('../package.json')

const opts = {
  alias: abbrev('help', 'input', 'output', 'version')
}

const argv = minimist(process.argv.slice(2), opts)

function help () {
  console.log([
    pkg.description,
    '',
    'Example',
    '  $ ios-splash-generate -i path/to/source.png -o path/to/output/'
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

  if (argv.input) {
    // minimist will produce an array of values for args with full --options
    // smush it down to a single string that resize() can use
    if (argv.input.constructor === Array) {
      argv.input = argv.input[0]
    }
    if (argv.output.constructor === Array) {
      argv.output = argv.output[0]
    }

    generate(argv.input, argv.output)
  } else {
    console.error('Please specify an input icon file witht the `-i` option.')
  }
}

cli()
