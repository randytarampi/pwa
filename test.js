'use strict'
var test = require('tape')
var resize = require('./')
var fs = require('fs')
var rimraf = require('rimraf')
var mkdirp = require('mkdirp')

test('creates all icons in tmp directory', function (t) {
  t.plan(5)
  rimraf('tmp', function () {
    mkdirp('tmp', function () {
      resize('test/com.appbusinesspodcast.www.png', 'tmp/').then(function () {
        t.ok(fs.existsSync('tmp/mdpi.png'), 'mdpi.png created')
        t.ok(fs.existsSync('tmp/hdpi.png'), 'hdpi.png created')
        t.ok(fs.existsSync('tmp/xhdpi.png'), 'xhdpi.png created')
        t.ok(fs.existsSync('tmp/xxhdpi.png'), 'xxhdpi.png created')
        t.ok(fs.existsSync('tmp/xxxhdpi.png'), 'xxxhdpi.png created')
      })
    })
  })
})
