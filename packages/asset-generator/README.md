pwa-asset-generator
---

[![npm versions](https://img.shields.io/npm/v/@randy.tarampi/pwa-asset-generator.svg?style=flat-square)](https://www.npmjs.org/package/@randy.tarampi/pwa-asset-generator)
[![npm downloads](https://img.shields.io/npm/dt/@randy.tarampi/pwa-asset-generator.svg?style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/pwa-asset-generator)
[![npm license](https://img.shields.io/npm/l/@randy.tarampi/pwa-asset-generator.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/pwa-asset-generator)
[![Build status](https://img.shields.io/travis/com/randytarampi/pwa-asset-generator.svg?style=flat-square)](https://travis-ci.com/randytarampi/pwa-asset-generator)
[![Coverage status](https://img.shields.io/coveralls/randytarampi/pwa-asset-generator.svg?style=flat-square)](https://coveralls.io/github/randytarampi/pwa-asset-generator?branch=master)
[![Maintainability status](https://img.shields.io/codeclimate/maintainability-percentage/randytarampi/pwa-asset-generator.svg?style=flat-square)](https://codeclimate.com/github/randytarampi/pwa-asset-generator/maintainability)
[![Analytics](https://ga-beacon.appspot.com/UA-50921068-1/beacon/github/randytarampi/pwa-asset-generator/?flat&useReferrer)](https://github.com/igrigorik/ga-beacon)


[![Install @randy.tarampi/pwa-asset-generator](https://nodeico.herokuapp.com/@randy.tarampi/pwa-asset-generator.svg)](https://www.npmjs.com/package/@randy.tarampi/pwa-asset-generator)

Use `sharp` to quickly generate image assets for a Progressive Web Application.

A single solution that wholly replaces [`@randy.tarampi/android-icon-resize`](https://www.npmjs.com/package/@randy.tarampi/android-icon-resize), [`@randy.tarampi/android-splash-generate`](https://www.npmjs.com/package/@randy.tarampi/android-splash-generate), [`@randy.tarampi/ios-icon-resize`](https://www.npmjs.com/package/@randy.tarampi/ios-icon-resize) and [`@randy.tarampi/ios-splash-generate`](https://www.npmjs.com/package/@randy.tarampi/ios-splash-generate), or their old `lwip` relatives [`android-icon-resize`](https://www.npmjs.com/package/android-icon-resize), [`android-splash-generate`](https://www.npmjs.com/package/android-splash-generate), [`ios-icon-resize`](https://www.npmjs.com/package/ios-icon-resize) and [`ios-splash-generate`](https://www.npmjs.com/package/ios-splash-generate).

# Dependencies
```bash
brew install nvm
nvm install 8
npm install -g npm
```

# Installation

```bash
npm install -g @randy.tarampi/pwa-asset-generator
```

# Usage

```bash
# Generate icons and splash screens from a single file to the current working directory
pwa-asset-generator ./path/to/input/file

# Generate icons and splash screens from a single file to a specific directory
pwa-asset-generator ./path/to/input/file ./path/to/output/directory

# Generate splash screens from `./path/to/input/file` and icons from `./path/to/icon/file`
pwa-asset-generator ./path/to/input/file --icon ./path/to/icon/file

# Generate splash screens from `./path/to/splash/file` and icons from `./path/to/input/file`
pwa-asset-generator ./path/to/input/file --splash ./path/to/splash/file

# Generate icons and splash screens for a given format
pwa-asset-generator ./path/to/input/file --format webp
```

# Testing

```bash
npm test
```
