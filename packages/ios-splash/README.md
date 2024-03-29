# ios-splash 

[![npm versions](https://img.shields.io/npm/v/@randy.tarampi/ios-splash.svg?style=flat-square)](https://www.npmjs.org/package/@randy.tarampi/ios-splash)
[![npm downloads](https://img.shields.io/npm/dt/@randy.tarampi/ios-splash.svg?style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/ios-splash)
[![npm license](https://img.shields.io/npm/l/@randy.tarampi/ios-splash.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/ios-splash)
[![Build status](https://img.shields.io/travis/com/randytarampi/pwa.svg?style=flat-square)](https://travis-ci.com/randytarampi/pwa)
[![Coverage status](https://img.shields.io/coveralls/randytarampi/pwa.svg?style=flat-square)](https://coveralls.io/github/randytarampi/pwa?branch=master)
[![Maintainability status](https://img.shields.io/codeclimate/maintainability-percentage/randytarampi/pwa.svg?style=flat-square)](https://codeclimate.com/github/randytarampi/pwa/maintainability)
[![Analytics](https://ga-beacon.appspot.com/UA-50921068-1/beacon/github/randytarampi/pwa/?flat&useReferrer)](https://github.com/igrigorik/ga-beacon)


[![Install @randy.tarampi/ios-splash](https://nodeico.herokuapp.com/@randy.tarampi/ios-splash.svg)](https://www.npmjs.com/package/@randy.tarampi/ios-splash) 

> Get iOS splash screen files names and dimensions

The default splash screen image file names and required sizes for iOS are listed in a [JSON file](splash.json). This information is useful, for example, when you want to generate splash screen images with the required dimensons and/or to create a [`config.xml`](http://docs.phonegap.com/en/3.5.0/config_ref_images.md.html) file for a PhoneGap/Cordova project or if you just need to create the splash screen images for your iOS project from one source image.


## Install

```sh
$ npm install --save @randy.tarampi/ios-splash
```


## Usage

```js
var splash = require('@randy.tarampi/ios-splash');

splash();
//=> [{"name":"Default~iphone.png","width":320,"height":480}, ...]

splash({width: 640})
//=> {"name":"Default@2x~iphone.png","width":640,"height":960}

splash({height: 2048})
//=> {"name":"Default-Landscape@2x~ipad.png","width":2048,"height":1536}

splash({size: '~iphone'})
//=> {"name":"Default~iphone.png","width":320,"height":480}
```


## API

### splash()

Returns an array of splash screen images, each image being represented by an object with `name`, `width` and `height` properties.

### splash(options)
#### options

`size`: can be either a `Number` or `String` value. If it is a `Number`, it represents the width in pixels. If it is a `String`, you can use `"~iphone"` or `"Landscape~ipad"` notation to refer to a certain size or the complete file name, e.g. `Default-Landscape~ipad.png`.

`width`: should be a `Number` value. If this option is present, it supresses the `size` and `height` options.

`height`: should be a `Number` value.

Returns icon object for that size, width or height or `null`.

For example:

```js
icons({size: "Landscape~ipad"});
// ==> {"name":"Default-Landscape~ipad.png","width":1024,"height":768}
```


## CLI
> ios-splash logs to stdout in comma-separated values format (csv) by default so you can easy pipe to other commands in UNIX systems.

```sh
$ npm install --global @randy.tarampi/ios-splash
```

```sh
$ ios-splash --help

Examples:
    $ ios-splash --width 320 --format json
    {"name":"Default~iphone.png","width":320,"height":480}

    $ ios-splash --size Landscape~ipad
    Default-Landscape~ipad.png,1024,768

    $ ios-splash
    Default~iphone.png,320,480
    Default@2x~iphone.png,640,960
    Default-Portrait~ipad.png,768,1024
    Default-Portrait@2x~ipad.png,1536,2048
    Default-Landscape~ipad.png,1024,768
    Default-Landscape@2x~ipad.png,2048,1536
    Default-568h@2x~iphone.png,640,1136
    Default-667h.png,750,1334
    Default-736h.png,1242,2208
    Default-Landscape-736h.png,2208,1242
    Default@2x~universal~anyany.png,2732,2732

    $ ios-splash --format json
    [{"name":"Default~iphone.png","width":320,"height":480},{"name":"Default@2x~iphone.png","width":640,"height":960},{"name":"Default-Portrait~ipad.png","width":768,"height":1024},{"name":"Default-Portrait@2x~ipad.png","width":1536,"height":2048},{"name":"Default-Landscape~ipad.png","width":1024,"height":768},{"name":"Default-Landscape@2x~ipad.png","width":2048,"height":1536},{"name":"Default-568h@2x~iphone.png","width":640,"height":1136},{"name":"Default-667h.png","width":750,"height":1334},{"name":"Default-736h.png","width":1242,"height":2208},{"name":"Default-Landscape-736h.png","width":2208,"height":1242},{"name":"Default@2x~universal~anyany.png","width":2732,"height":2732}]
```

## License
This was originally based on [animals](https://github.com/boennemann/animals) by [Stephan Bönnemann](http://boennemann.me/).
MIT © [David Pfahler](http://excellenteasy.com), [Randy Tarampi](http://randytarampi.ca)
