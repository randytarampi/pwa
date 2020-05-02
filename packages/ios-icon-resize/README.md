# ios-icon-resize 

[![npm versions](https://img.shields.io/npm/v/@randy.tarampi/ios-icon-resize.svg?style=flat-square)](https://www.npmjs.org/package/@randy.tarampi/ios-icon-resize)
[![npm downloads](https://img.shields.io/npm/dt/@randy.tarampi/ios-icon-resize.svg?style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/ios-icon-resize)
[![npm license](https://img.shields.io/npm/l/@randy.tarampi/ios-icon-resize.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/ios-icon-resize)
[![Build status](https://img.shields.io/travis/com/randytarampi/pwa.svg?style=flat-square)](https://travis-ci.com/randytarampi/pwa)
[![Coverage status](https://img.shields.io/coveralls/randytarampi/pwa.svg?style=flat-square)](https://coveralls.io/github/randytarampi/pwa?branch=master)
[![Maintainability status](https://img.shields.io/codeclimate/maintainability-percentage/randytarampi/pwa.svg?style=flat-square)](https://codeclimate.com/github/randytarampi/pwa/maintainability)
[![Analytics](https://ga-beacon.appspot.com/UA-50921068-1/beacon/github/randytarampi/pwa/?flat&useReferrer)](https://github.com/igrigorik/ga-beacon)


[![Install @randy.tarampi/ios-icon-resize](https://nodeico.herokuapp.com/@randy.tarampi/ios-icon-resize.svg)](https://www.npmjs.com/package/@randy.tarampi/ios-icon-resize) 

> Create all required icons from one icon. Right size, right file name.

The default icon file names and required sizes for iOS are retrieved from the [ios-icons](http://github.com/randytarampi/ios-icons) module. 

The files created have the default names as you might want to use them, for example, in [`config.xml`](http://docs.phonegap.com/en/3.5.0/config_ref_images.md.html) of a PhoneGap/Cordova project.

[This also exists for android](../android-icon-resize).

## Install

```sh
$ npm install --save @randy.tarampi/ios-icon-resize
```


## Usage

```js
var resize = require('@randy.tarampi/ios-icon-resize');

resize('path/to/icon-large.png', 'output/icons/').then(function() {
	// icons have been created
});

```


## CLI

```sh
$ npm install --global @randy.tarampi/ios-icon-resize
```

```sh
$ ios-icon-resize --help
Create all required icons from one icon. Right size, right file name.

Example
  $ ios-icon-resize -i path/to/icon.png -o path/to/output/
	
```


## License
MIT © [David Pfahler](http://excellenteasy.com), [Randy Tarampi](http://randytarampi.ca)
