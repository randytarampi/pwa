import test from 'tape'
import resize from './index.js'
import fs from 'node:fs'
import { rimraf } from 'rimraf'
import { mkdirp } from 'mkdirp'
import { createRequire } from 'node:module'
import { exec } from 'node:child_process'
const require = createRequire(import.meta.url)
const pkg = require('./package.json')

test('creates all icons in tmp directory', function (t) {
  t.plan(13)
  rimraf('tmp').then(function () {
    return mkdirp('tmp').then(function () {
      return resize('test/com.appbusinesspodcast.www.png', 'tmp/').then(function () {
        t.ok(fs.existsSync('tmp/splash-port-hdpi.png'), 'splash-port-hdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-port-mdpi.png'), 'splash-port-mdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-port-ldpi.png'), 'splash-port-ldpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-port-xhdpi.png'), 'splash-port-xhdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-port-xxhdpi.png'), 'splash-port-xxhdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-port-xxxhdpi.png'), 'splash-port-xxxhdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-land-hdpi.png'), 'splash-land-hdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-land-mdpi.png'), 'splash-land-mdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-land-ldpi.png'), 'splash-land-ldpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-land-xhdpi.png'), 'splash-land-xhdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-land-xxhdpi.png'), 'splash-land-xxhdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-land-xxxhdpi.png'), 'splash-land-xxxhdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/GooglePlayFeature.png'), 'GooglePlayFeature.png' + ' created')
      })
    })
      .catch(t.end)
  })
})

test('cli creates all icons in tmp directory', function (t) {
  t.plan(13)
  rimraf('tmp').then(function () {
    return mkdirp('tmp').then(function () {
      exec(pkg.bin + ' --input test/com.appbusinesspodcast.www.png --output tmp', function () {
        t.ok(fs.existsSync('tmp/splash-port-hdpi.png'), 'splash-port-hdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-port-mdpi.png'), 'splash-port-mdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-port-ldpi.png'), 'splash-port-ldpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-port-xhdpi.png'), 'splash-port-xhdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-port-xxhdpi.png'), 'splash-port-xxhdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-port-xxxhdpi.png'), 'splash-port-xxxhdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-land-hdpi.png'), 'splash-land-hdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-land-mdpi.png'), 'splash-land-mdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-land-ldpi.png'), 'splash-land-ldpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-land-xhdpi.png'), 'splash-land-xhdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-land-xxhdpi.png'), 'splash-land-xxhdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-land-xxxhdpi.png'), 'splash-land-xxxhdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/GooglePlayFeature.png'), 'GooglePlayFeature.png' + ' created')
      })
    })
      .catch(t.end)
  })
})
