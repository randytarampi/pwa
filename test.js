'use strict'
var test = require('tape')
var resize = require('./')
var fs = require('fs')
var rimraf = require('rimraf')
var mkdirp = require('mkdirp')
var exec = require('child_process').exec

test('creates all icons in tmp directory', function (t) {
  t.plan(5)
  rimraf('tmp', function () {
    return mkdirp('tmp').then(function () {
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

test('cli all icons in tmp directory', function (t) {
  t.plan(15)
  rimraf('tmp', function () {
    return mkdirp('tmp').then(function () {
      exec('./bin/android-icon-resize.js --input test/com.appbusinesspodcast.www.png --output tmp', function (error, stdout, stderr) {
        var err = error || stderr
        if (err) {
          return t.fail('calling cli produced an error: ' + err)
        }
        t.ok(fs.existsSync('tmp/mdpi.png'), 'mdpi.png created')
        t.ok(fs.existsSync('tmp/hdpi.png'), 'hdpi.png created')
        t.ok(fs.existsSync('tmp/xhdpi.png'), 'xhdpi.png created')
        t.ok(fs.existsSync('tmp/xxhdpi.png'), 'xxhdpi.png created')
        t.ok(fs.existsSync('tmp/xxxhdpi.png'), 'xxxhdpi.png created')

        rimraf('tmp', function () {
          return mkdirp('tmp').then(function () {
            exec('./bin/android-icon-resize.js --in test/com.appbusinesspodcast.www.png --ou tmp', function (error, stdout, stderr) {
              var err = error || stderr
              if (err) {
                return t.fail('calling cli produced an error: ' + err)
              }
              t.ok(fs.existsSync('tmp/mdpi.png'), 'mdpi.png created')
              t.ok(fs.existsSync('tmp/hdpi.png'), 'hdpi.png created')
              t.ok(fs.existsSync('tmp/xhdpi.png'), 'xhdpi.png created')
              t.ok(fs.existsSync('tmp/xxhdpi.png'), 'xxhdpi.png created')
              t.ok(fs.existsSync('tmp/xxxhdpi.png'), 'xxxhdpi.png created')

              rimraf('tmp', function () {
                return mkdirp('tmp').then(function () {
                  exec('./bin/android-icon-resize.js -i test/com.appbusinesspodcast.www.png -o tmp', function (error, stdout, stderr) {
                    var err = error || stderr
                    if (err) {
                      return t.fail('calling cli produced an error: ' + err)
                    }
                    t.ok(fs.existsSync('tmp/mdpi.png'), 'mdpi.png created')
                    t.ok(fs.existsSync('tmp/hdpi.png'), 'hdpi.png created')
                    t.ok(fs.existsSync('tmp/xhdpi.png'), 'xhdpi.png created')
                    t.ok(fs.existsSync('tmp/xxhdpi.png'), 'xxhdpi.png created')
                    t.ok(fs.existsSync('tmp/xxxhdpi.png'), 'xxxhdpi.png created')
                  })
                })
              })
            })
          })
        })
      })
    })
  })
})
