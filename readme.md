# android-icon-resize 
[![Build Status](https://travis-ci.com/randytarampi/android-icon-resize.svg?branch=master)](https://travis-ci.com/randytarampi/android-icon-resize)
[![Dependency Status](https://david-dm.org/randytarampi/android-icon-resize.svg)](https://david-dm.org/randytarampi/android-icon-resize)
[![devDependency Status](https://david-dm.org/randytarampi/android-icon-resize/dev-status.svg)](https://david-dm.org/randytarampi/android-icon-resize#info=devDependencies)
[![Semantically Released](https://img.shields.io/badge/versioning-semantically%20released-brightgreen.svg)](https://github.com/boennemann/semantic-release) 

> Create all required icons from one icon. Right size, right file name.

The default icon file names and required sizes for android are retrieved from the [android-icons](http://github.com/randytarampi/android-icons) module. 

The files created have the default names as you might want to use them, for example, in [`config.xml`](http://docs.phonegap.com/en/3.5.0/config_ref_images.md.html) of a PhoneGap/Cordova project.

[This also exists for iOS](https://github.com/randytarampi/ios-icon-resize).

## Install

```sh
$ npm install --save @randy.tarampi/android-icon-resize
```


## Usage

```js
var resize = require('@randy.tarampi/android-icon-resize');

resize('path/to/icon-large.png', 'output/icons/').then(function() {
	// icons have been created
});

```


## CLI

```sh
$ npm install --global @randy.tarampi/android-icon-resize
```

```sh
$ android-icon-resize --help
Create all required icons from one icon. Right size, right file name.

Example
  $ android-icon-resize -i path/to/icon.png -o path/to/output/
	
```


## License
MIT © [David Pfahler](http://excellenteasy.com)
