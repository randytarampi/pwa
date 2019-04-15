'use strict'
var test = require('tape')
var splash = require('./')
var exec = require('child_process').exec

test('returns all splash images in array', function (t) {
  t.plan(2)
  var images = splash()
  t.ok(Array.isArray(images), 'returned an array')
  t.equal(images.length, 13, '13 images returned')
})

test('cli returns all splash images as csv', function (t) {
  t.plan(1)
  var expected = [
    'GooglePlayFeature.png,1024,500',
    'splash-port-hdpi.png,480,800',
    'splash-port-ldpi.png,240,400',
    'splash-port-mdpi.png,320,480',
    'splash-port-xhdpi.png,720,1280',
    'splash-port-xxhdpi.png,960,1600',
    'splash-port-xxxhdpi.png,1280,1920',
    'splash-land-hdpi.png,800,480',
    'splash-land-ldpi.png,400,240',
    'splash-land-mdpi.png,480,320',
    'splash-land-xhdpi.png,1280,720',
    'splash-land-xxhdpi.png,1600,960',
    'splash-land-xxxhdpi.png,1920,1280\n'
  ].join('\n')
  exec('./bin/android-splash.js', function (error, stdout, stderr) {
    var err = error || stderr
    if (err) {
      return t.fail('calling cli produced an error: ' + err)
    }
    t.equal(stdout, expected, 'cli returned the expected output')
  })
})

test('cli returns all splash images as json w/ & w/o abbreviated flags', function (t) {
  t.plan(6)
  var expected = '[{"name":"GooglePlayFeature.png","width":1024,"height":500},{"name":"splash-port-hdpi.png","width":480,"height":800},{"name":"splash-port-ldpi.png","width":240,"height":400},{"name":"splash-port-mdpi.png","width":320,"height":480},{"name":"splash-port-xhdpi.png","width":720,"height":1280},{"name":"splash-port-xxhdpi.png","width":960,"height":1600},{"name":"splash-port-xxxhdpi.png","width":1280,"height":1920},{"name":"splash-land-hdpi.png","width":800,"height":480},{"name":"splash-land-ldpi.png","width":400,"height":240},{"name":"splash-land-mdpi.png","width":480,"height":320},{"name":"splash-land-xhdpi.png","width":1280,"height":720},{"name":"splash-land-xxhdpi.png","width":1600,"height":960},{"name":"splash-land-xxxhdpi.png","width":1920,"height":1280}]\n'
  exec('./bin/android-splash.js --format json', function (error, stdout, stderr) {
    var err = error || stderr
    if (err) {
      return t.fail('calling cli produced an error: ' + err)
    }
    t.equal(stdout, expected, 'cli returned the expected output')
  })
  exec('./bin/android-splash.js --forma json', function (error, stdout, stderr) {
    var err = error || stderr
    if (err) {
      return t.fail('calling cli produced an error: ' + err)
    }
    t.equal(stdout, expected, 'cli returned the expected output')
  })
  exec('./bin/android-splash.js --form json', function (error, stdout, stderr) {
    var err = error || stderr
    if (err) {
      return t.fail('calling cli produced an error: ' + err)
    }
    t.equal(stdout, expected, 'cli returned the expected output')
  })
  exec('./bin/android-splash.js --for json', function (error, stdout, stderr) {
    var err = error || stderr
    if (err) {
      return t.fail('calling cli produced an error: ' + err)
    }
    t.equal(stdout, expected, 'cli returned the expected output')
  })
  exec('./bin/android-splash.js --fo json', function (error, stdout, stderr) {
    var err = error || stderr
    if (err) {
      return t.fail('calling cli produced an error: ' + err)
    }
    t.equal(stdout, expected, 'cli returned the expected output')
  })
  exec('./bin/android-splash.js --f json', function (error, stdout, stderr) {
    var err = error || stderr
    if (err) {
      return t.fail('calling cli produced an error: ' + err)
    }
    t.equal(stdout, expected, 'cli returned the expected output')
  })
})
