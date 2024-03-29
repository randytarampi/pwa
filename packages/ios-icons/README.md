# ios-icons 

[![npm versions](https://img.shields.io/npm/v/@randy.tarampi/ios-icons.svg?style=flat-square)](https://www.npmjs.org/package/@randy.tarampi/ios-icons)
[![npm downloads](https://img.shields.io/npm/dt/@randy.tarampi/ios-icons.svg?style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/ios-icons)
[![npm license](https://img.shields.io/npm/l/@randy.tarampi/ios-icons.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/ios-icons)
[![Build status](https://img.shields.io/travis/com/randytarampi/pwa.svg?style=flat-square)](https://travis-ci.com/randytarampi/pwa)
[![Coverage status](https://img.shields.io/coveralls/randytarampi/pwa.svg?style=flat-square)](https://coveralls.io/github/randytarampi/pwa?branch=master)
[![Maintainability status](https://img.shields.io/codeclimate/maintainability-percentage/randytarampi/pwa.svg?style=flat-square)](https://codeclimate.com/github/randytarampi/pwa/maintainability)
[![Analytics](https://ga-beacon.appspot.com/UA-50921068-1/beacon/github/randytarampi/pwa/?flat&useReferrer)](https://github.com/igrigorik/ga-beacon)


[![Install @randy.tarampi/ios-icons](https://nodeico.herokuapp.com/@randy.tarampi/ios-icons.svg)](https://www.npmjs.com/package/@randy.tarampi/ios-icons) 

> Get iOS icon file names and dimensions (width)

The default icon file names and required sizes for iOS are listed in a [JSON file](icons.json). This information is useful, for example, when you want to generate icons with the required sizes or to create a [`config.xml`](http://docs.phonegap.com/en/3.5.0/config_ref_images.md.html) file for a PhoneGap/Cordova project or if you just need to create the icons for your iOS project from one source icon.
This information also exists for [android icons](../android-icons).

## Install

```sh
$ npm install --save @randy.tarampi/ios-icons
```


## Usage

```js
var icons = require('@randy.tarampi/ios-icons');

icons();
//=> [{name: 'icon-60@3x.png', width: 180}, {name: 'icon-60.png', width: 60, ...}]

icons({size: '72'})
//=> {name: 'icon-72.png', width: 72}

icons({size: 'small'})
//=> {name: 'icon-small.png', width: 29}
```


## API

### icons()

Returns an array of icons, each icon being represented by an object with `name` and `width` properties.

> Notice that icons are always squares, so no `height` property is provided.

### icons(options)
#### options

Only option for now is `size`, which can be either a `Number` or `String` value. If it is a `Number`, it represents the width in pixels. If it is a `String`, you can use `"@2x"` or `"@3x"` notation to refer to a certain size or the complete file name, e.g. `icon-small.png`.

Returns icon object for that size or `null`.

For example:

```js
icons({size: "60@3x"});
// ==> {name: "icon-60@3x.png", width: 180}
```


## CLI
> ios-icons logs to stdout in comma-separated values format (csv) by default so you can easy pipe to other commands in UNIX systems.

```sh
$ npm install --global @randy.tarampi/ios-icons
```

```sh
$ ios-icons --help

Examples:
    $ ios-icons --format json --size 60
    { name: 'icon-60.png', width: 60 }

    $ ios-icons --size 60@3x
    icon-60@3x.png,180

    $ ios-icons
    icon-60@3x.png,180
    icon-60.png,60
    icon-60@2x.png,120
    icon-76.png,76
    icon-76@2x.png,152
    icon-40.png,40
    icon-40@2x.png,80
    icon.png,57
    icon@2x.png,114
    icon-72.png,72
    icon-72@2x.png,144
    icon-small.png,29
    icon-small@2x.png,58
    icon-50.png,50
    icon-50@2x.png,100

    $ ios-icons --format json
    [{"name":"icon-60@3x.png","width":180},{"name":"icon-60.png","width":60},{"name":"icon-60@2x.png","width":120},{"name":"icon-76.png","width":76},{"name":"icon-76@2x.png","width":152},{"name":"icon-40.png","width":40},{"name":"icon-40@2x.png","width":80},{"name":"icon.png","width":57},{"name":"icon@2x.png","width":114},{"name":"icon-72.png","width":72},{"name":"icon-72@2x.png","width":144},{"name":"icon-small.png","width":29},{"name":"icon-small@2x.png","width":58},{"name":"icon-50.png","width":50},{"name":"icon-50@2x.png","width":100}]
```

## Semantic Releases
Since version 2.0.0, this module is being [semantically released](https://github.com/boennemann/semantic-release). You can safely use `"^2.0.0"` in your `package.json`.

## License
This was originally based on [animals](https://github.com/boennemann/animals) by [Stephan Bönnemann](http://boennemann.me/).
MIT © [David Pfahler](http://excellenteasy.com), [Randy Tarampi](http://randytarampi.ca)
