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
  t.plan(15)
  rimraf('tmp').then(function () {
    return mkdirp('tmp').then(function () {
      return resize('test/com.appbusinesspodcast.www.png', 'tmp/').then(function () {
        t.ok(fs.existsSync('tmp/icon-60@3x.png'), 'icon-60@3x.png created')
        t.ok(fs.existsSync('tmp/icon-60.png'), 'icon-60.png created')
        t.ok(fs.existsSync('tmp/icon-60@2x.png'), 'icon-60@2x.png created')
        t.ok(fs.existsSync('tmp/icon-76.png'), 'icon-76.png created')
        t.ok(fs.existsSync('tmp/icon-76@2x.png'), 'icon-76@2x.png created')
        t.ok(fs.existsSync('tmp/icon-40.png'), 'icon-40.png created')
        t.ok(fs.existsSync('tmp/icon-40@2x.png'), 'icon-40@2x.png created')
        t.ok(fs.existsSync('tmp/icon.png'), 'icon.png created')
        t.ok(fs.existsSync('tmp/icon@2x.png'), 'icon@2x.png created')
        t.ok(fs.existsSync('tmp/icon-72.png'), 'icon-72.png created')
        t.ok(fs.existsSync('tmp/icon-72@2x.png'), 'icon-72@2x.png created')
        t.ok(fs.existsSync('tmp/icon-small.png'), 'icon-small.png')
        t.ok(fs.existsSync('tmp/icon-small@2x.png'), 'icon-small@2x.png')
        t.ok(fs.existsSync('tmp/icon-50.png'), 'icon-50.png created')
        t.ok(fs.existsSync('tmp/icon-50@2x.png'), 'icon-50@2x.png created')
      })
        .catch(t.end)
    })
  })
})

test('cli all icons in tmp directory', function (t) {
  t.plan(45)
  rimraf('tmp').then(function () {
    return mkdirp('tmp').then(function () {
      exec(pkg.bin + ' --input test/com.appbusinesspodcast.www.png --output tmp', function (error, stdout, stderr) {
        const err = error || (stderr && new Error(stderr))
        if (err) {
          t.end(err)
          throw err
        }
        t.ok(fs.existsSync('tmp/icon-60@3x.png'), 'icon-60@3x.png created')
        t.ok(fs.existsSync('tmp/icon-60.png'), 'icon-60.png created')
        t.ok(fs.existsSync('tmp/icon-60@2x.png'), 'icon-60@2x.png created')
        t.ok(fs.existsSync('tmp/icon-76.png'), 'icon-76.png created')
        t.ok(fs.existsSync('tmp/icon-76@2x.png'), 'icon-76@2x.png created')
        t.ok(fs.existsSync('tmp/icon-40.png'), 'icon-40.png created')
        t.ok(fs.existsSync('tmp/icon-40@2x.png'), 'icon-40@2x.png created')
        t.ok(fs.existsSync('tmp/icon.png'), 'icon.png created')
        t.ok(fs.existsSync('tmp/icon@2x.png'), 'icon@2x.png created')
        t.ok(fs.existsSync('tmp/icon-72.png'), 'icon-72.png created')
        t.ok(fs.existsSync('tmp/icon-72@2x.png'), 'icon-72@2x.png created')
        t.ok(fs.existsSync('tmp/icon-small.png'), 'icon-small.png')
        t.ok(fs.existsSync('tmp/icon-small@2x.png'), 'icon-small@2x.png')
        t.ok(fs.existsSync('tmp/icon-50.png'), 'icon-50.png created')
        t.ok(fs.existsSync('tmp/icon-50@2x.png'), 'icon-50@2x.png created')

        rimraf('tmp').then(function () {
          return mkdirp('tmp').then(function () {
            exec(pkg.bin + ' --in test/com.appbusinesspodcast.www.png --ou tmp', function (error, stdout, stderr) {
              const err = error || (stderr && new Error(stderr))
              if (err) {
                t.fail(err)
                throw err
              }
              t.ok(fs.existsSync('tmp/icon-60@3x.png'), 'icon-60@3x.png created')
              t.ok(fs.existsSync('tmp/icon-60.png'), 'icon-60.png created')
              t.ok(fs.existsSync('tmp/icon-60@2x.png'), 'icon-60@2x.png created')
              t.ok(fs.existsSync('tmp/icon-76.png'), 'icon-76.png created')
              t.ok(fs.existsSync('tmp/icon-76@2x.png'), 'icon-76@2x.png created')
              t.ok(fs.existsSync('tmp/icon-40.png'), 'icon-40.png created')
              t.ok(fs.existsSync('tmp/icon-40@2x.png'), 'icon-40@2x.png created')
              t.ok(fs.existsSync('tmp/icon.png'), 'icon.png created')
              t.ok(fs.existsSync('tmp/icon@2x.png'), 'icon@2x.png created')
              t.ok(fs.existsSync('tmp/icon-72.png'), 'icon-72.png created')
              t.ok(fs.existsSync('tmp/icon-72@2x.png'), 'icon-72@2x.png created')
              t.ok(fs.existsSync('tmp/icon-small.png'), 'icon-small.png')
              t.ok(fs.existsSync('tmp/icon-small@2x.png'), 'icon-small@2x.png')
              t.ok(fs.existsSync('tmp/icon-50.png'), 'icon-50.png created')
              t.ok(fs.existsSync('tmp/icon-50@2x.png'), 'icon-50@2x.png created')

              rimraf('tmp').then(function () {
                return mkdirp('tmp').then(function () {
                  exec(pkg.bin + ' -i test/com.appbusinesspodcast.www.png -o tmp', function (error, stdout, stderr) {
                    const err = error || (stderr && new Error(stderr))
                    if (err) {
                      t.fail(err)
                      throw err
                    }
                    t.ok(fs.existsSync('tmp/icon-60@3x.png'), 'icon-60@3x.png created')
                    t.ok(fs.existsSync('tmp/icon-60.png'), 'icon-60.png created')
                    t.ok(fs.existsSync('tmp/icon-60@2x.png'), 'icon-60@2x.png created')
                    t.ok(fs.existsSync('tmp/icon-76.png'), 'icon-76.png created')
                    t.ok(fs.existsSync('tmp/icon-76@2x.png'), 'icon-76@2x.png created')
                    t.ok(fs.existsSync('tmp/icon-40.png'), 'icon-40.png created')
                    t.ok(fs.existsSync('tmp/icon-40@2x.png'), 'icon-40@2x.png created')
                    t.ok(fs.existsSync('tmp/icon.png'), 'icon.png created')
                    t.ok(fs.existsSync('tmp/icon@2x.png'), 'icon@2x.png created')
                    t.ok(fs.existsSync('tmp/icon-72.png'), 'icon-72.png created')
                    t.ok(fs.existsSync('tmp/icon-72@2x.png'), 'icon-72@2x.png created')
                    t.ok(fs.existsSync('tmp/icon-small.png'), 'icon-small.png')
                    t.ok(fs.existsSync('tmp/icon-small@2x.png'), 'icon-small@2x.png')
                    t.ok(fs.existsSync('tmp/icon-50.png'), 'icon-50.png created')
                    t.ok(fs.existsSync('tmp/icon-50@2x.png'), 'icon-50@2x.png created')
                  })
                })
              })
            })
          })
        })
      })
    })
      .catch(t.end)
  })
})
