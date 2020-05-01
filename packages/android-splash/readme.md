# android-splash 
[![Build Status](https://travis-ci.com/randytarampi/android-splash.svg?branch=master)](https://travis-ci.com/randytarampi/android-splash)
[![Dependency Status](https://david-dm.org/randytarampi/android-splash.svg)](https://david-dm.org/randytarampi/android-splash)
[![devDependency Status](https://david-dm.org/randytarampi/android-splash/dev-status.svg)](https://david-dm.org/randytarampi/android-splash#info=devDependencies)
[![Semantically Released](https://img.shields.io/badge/versioning-semantically%20released-brightgreen.svg)](https://github.com/boennemann/semantic-release) 

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
MIT © [David Pfahler](http://excellenteasy.com)
