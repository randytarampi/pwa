# android-icons

[![npm versions](https://img.shields.io/npm/v/@randy.tarampi/android-icons.svg?style=flat-square)](https://www.npmjs.org/package/@randy.tarampi/android-icons)
[![npm downloads](https://img.shields.io/npm/dt/@randy.tarampi/android-icons.svg?style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/android-icons)
[![npm license](https://img.shields.io/npm/l/@randy.tarampi/android-icons.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/android-icons)
[![Build status](https://img.shields.io/travis/com/randytarampi/pwa.svg?style=flat-square)](https://travis-ci.com/randytarampi/pwa)
[![Coverage status](https://img.shields.io/coveralls/randytarampi/pwa.svg?style=flat-square)](https://coveralls.io/github/randytarampi/pwa?branch=master)
[![Maintainability status](https://img.shields.io/codeclimate/maintainability-percentage/randytarampi/pwa.svg?style=flat-square)](https://codeclimate.com/github/randytarampi/pwa/maintainability)
[![Analytics](https://ga-beacon.appspot.com/UA-50921068-1/beacon/github/randytarampi/android-icons/?flat&useReferrer)](https://github.com/igrigorik/ga-beacon)


[![Install @randy.tarampi/android-icons](https://nodeico.herokuapp.com/@randy.tarampi/android-icons.svg)](https://www.npmjs.com/package/@randy.tarampi/android-icons) 

> Get android icon file names and dimensions (width)

The default icon file names (as used by [cordova](https://cordova.apache.org/docs/en/4.0.0/config_ref_images.md.html#Icons%20and%20Splash%20Screens)) and required sizes for android are listed in a [JSON file](icons.json). This information is useful, for example, when you want to generate icons with the required sizes or to create a [`config.xml`](http://docs.phonegap.com/en/3.5.0/config_ref_images.md.html) file for a PhoneGap/Cordova project or if you just need to create the icons for your android project from one source icon.
This information also exists for [iOS icons](../ios-icons).


## Install

```sh
$ npm install --save @randy.tarampi/android-icons
```


## Usage

```js
var icons = require('@randy.tarampi/android-icons');

icons();
//=> [{ "name": "mdpi.png", "width": 48 }, { "name": "hdpi.png", "width": 72 }, ... ]

icons({size: '48'})
//=> {name: 'mdpi.png', width: 48}

icons({size: 'xhdpi'})
//=> {name: 'xhdpi.png', width: 96}
```


## API

### icons()

Returns an array of icons, each icon being represented by an object with `name` and `width` properties.

> Notice that icons are always squares, so no `height` property is provided.

### icons(options)
#### options

Only option for now is `size`, which can be either a `Number` or `String` value. If it is a `Number`, it represents the width in pixels. If it is a `String`, you can use `"mdpi"`, `"hdpi"` etc. to refer to a certain size or the complete file name, e.g. `xhdpi.png`.

Returns icon object for that size or `null`.

For example:

```js
icons({size: 'xhdpi'})
//=> {name: 'xhdpi.png', width: 96}
```


## CLI
> android-icons logs to stdout in comma-separated values format (csv) by default so you can easy pipe to other commands in UNIX systems.

```sh
$ npm install --global @randy.tarampi/android-icons
```

```sh
$ android-icons --help
Get android icon file names and dimensions (width)

Use `--format json` to set output to JSON.
Get specifc icon by size or name by using `--size`.

Examples:
  $ android-icons --size 48
  icon-40@2x.png,80

  $ android-icons --size 80 --format json
  {"name":"icon-40@2x.png","width":80}

  $ android-icons --size small
  icon-small.png,29
```

## Semantic Releases
This module is being [semantically released](https://github.com/boennemann/semantic-release). You can safely use `"^1.0.0"` in your `package.json`.

## License
MIT © [David Pfahler](http://excellenteasy.com), [Randy Tarampi](http://randytarampi.ca)
