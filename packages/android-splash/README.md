# android-splash 

[![npm versions](https://img.shields.io/npm/v/@randy.tarampi/android-splash.svg?style=flat-square)](https://www.npmjs.org/package/@randy.tarampi/android-splash)
[![npm downloads](https://img.shields.io/npm/dt/@randy.tarampi/android-splash.svg?style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/android-splash)
[![npm license](https://img.shields.io/npm/l/@randy.tarampi/android-splash.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/android-splash)
[![Build status](https://img.shields.io/travis/com/randytarampi/pwa.svg?style=flat-square)](https://travis-ci.com/randytarampi/pwa)
[![Coverage status](https://img.shields.io/coveralls/randytarampi/pwa.svg?style=flat-square)](https://coveralls.io/github/randytarampi/pwa?branch=master)
[![Maintainability status](https://img.shields.io/codeclimate/maintainability-percentage/randytarampi/pwa.svg?style=flat-square)](https://codeclimate.com/github/randytarampi/pwa/maintainability)
[![Analytics](https://ga-beacon.appspot.com/UA-50921068-1/beacon/github/randytarampi/android-splash/?flat&useReferrer)](https://github.com/igrigorik/ga-beacon)


[![Install @randy.tarampi/android-splash](https://nodeico.herokuapp.com/@randy.tarampi/android-splash.svg)](https://www.npmjs.com/package/@randy.tarampi/android-splash)

> Get android splash screen files names and dimensions

The default splash screen image file names and required sizes for android are listed in a [JSON file](splash.json). This information is useful, for example, when you want to generate splash screen images with the required dimensons and/or to create a [`config.xml`](http://docs.phonegap.com/en/3.5.0/config_ref_images.md.html) file for a PhoneGap/Cordova project or if you just need to create the splash screen images for your android project from one source image.


## Install

```sh
$ npm install --save @randy.tarampi/android-splash
```


## Usage

```js
var splash = require('@randy.tarampi/android-splash');

splash();
//=> [{"name":"GooglePlayFeature.png","width":1024,"height":500}, ...]
```


## API

### splash()

Returns an array of splash screen images, each image being represented by an object with `name`, `width` and `height` properties.

## CLI
> android-splash logs to stdout in comma-separated values format (csv) by default so you can easy pipe to other commands in UNIX systems.

```sh
$ npm install --global @randy.tarampi/android-splash
```

```sh
$ android-splash --help

Usage: android-splash [options]

Options:
  -h, --help, --help  Show help                                                 
  -f, --format        format of the output to stdout (csv or json)              
  --fo, --format      format of the output to stdout (csv or json)              
  --for, --format     format of the output to stdout (csv or json)              
  --form, --format    format of the output to stdout (csv or json)              
  --forma, --format   format of the output to stdout (csv or json)              
  --he, --help        Show help                                                 
  --hel, --help       Show help                                                 

Examples:
  $ android-splash    GooglePlayFeature.png,1024,500 ...   
```

## License
MIT © [David Pfahler](http://excellenteasy.com), [Randy Tarampi](http://randytarampi.ca)
