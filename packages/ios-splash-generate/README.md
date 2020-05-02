# ios-splash-generate 

[![npm versions](https://img.shields.io/npm/v/@randy.tarampi/ios-splash-generate.svg?style=flat-square)](https://www.npmjs.org/package/@randy.tarampi/ios-splash-generate)
[![npm downloads](https://img.shields.io/npm/dt/@randy.tarampi/ios-splash-generate.svg?style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/ios-splash-generate)
[![npm license](https://img.shields.io/npm/l/@randy.tarampi/ios-splash-generate.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/ios-splash-generate)
[![Build status](https://img.shields.io/travis/com/randytarampi/pwa.svg?style=flat-square)](https://travis-ci.com/randytarampi/pwa)
[![Coverage status](https://img.shields.io/coveralls/randytarampi/pwa.svg?style=flat-square)](https://coveralls.io/github/randytarampi/pwa?branch=master)
[![Maintainability status](https://img.shields.io/codeclimate/maintainability-percentage/randytarampi/pwa.svg?style=flat-square)](https://codeclimate.com/github/randytarampi/pwa/maintainability)
[![Analytics](https://ga-beacon.appspot.com/UA-50921068-1/beacon/github/randytarampi/pwa/?flat&useReferrer)](https://github.com/igrigorik/ga-beacon)


[![Install @randy.tarampi/ios-splash-generate](https://nodeico.herokuapp.com/@randy.tarampi/ios-splash-generate.svg)](https://www.npmjs.com/package/@randy.tarampi/ios-splash-generate) 

> Generate all required splash screen images from one source. Right size, right file name.

The default splash screen image file names and required sizes for iOS are retrieved from the [ios-splash](http://github.com/randytarampi/ios-splash) module. 

The files created have the default names as you might want to use them, for example, in [`config.xml`](http://docs.phonegap.com/en/3.5.0/config_ref_images.md.html) of a PhoneGap/Cordova project and the correct dimensions.

## How does it work?

A 2208x2208 source image gets scaled first and then cropped to the target dimensions. If you put the relevant part (logo, text, etc.) of your splash screen in the exact center of your source image, this means that the resulting images are all going to be centered as well.


## Install

```sh
$ npm install --save @randy.tarampi/ios-splash-generate
```


## Usage

```js
var generate = require('@randy.tarampi/ios-splash-generate');

generate('path/to/source.png', 'output/splash/').then(function() {
	// splash images created
});

```


## CLI

```sh
$ npm install --global @randy.tarampi/ios-splash-generate
```

```sh
$ ios-splash-generate --help
Generate all required splash screen images from one source. Right size, right file name.

Example
  $ ios-splash-generate -i path/to/source.png -o path/to/output/
	
```


## License
MIT © [David Pfahler](http://excellenteasy.com), [Randy Tarampi](http://randytarampi.ca)
