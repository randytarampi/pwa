pwa-asset-service
---

[![Build status](https://img.shields.io/travis/com/randytarampi/pwa-asset-service.svg?style=flat-square)](https://travis-ci.com/randytarampi/pwa-asset-service)
[![Coverage status](https://img.shields.io/codeclimate/coverage/randytarampi/pwa-asset-service.svg?style=flat-square)](https://coveralls.io/github/randytarampi/pwa-asset-service?branch=master)
[![Maintainability status](https://img.shields.io/codeclimate/maintainability-percentage/randytarampi/pwa-asset-service.svg?style=flat-square)](https://codeclimate.com/github/randytarampi/pwa-asset-service/maintainability)
[![Analytics](https://ga-beacon.appspot.com/UA-50921068-1/beacon/github/randytarampi/pwa-asset-service/?flat&useReferrer)](https://github.com/igrigorik/ga-beacon)


Use [`@randy.tarampi/pwa-asset-generator`](https://www.npmjs.com/package/@randy.tarampi/pwa-asset-generator) to quickly generate image assets for a Progressive Web Application.

# Dependencies
```bash
brew cask install oracle-jdk
brew install gradle
```

# Installation

```bash
./gradlew assemble
```

# Usage

The basic tack here is to upload your assets and wait for a compressed package in return.

```bash
./gradlew start

# Hit the server side
curl --form icon=@./src/main/resources/icon.png --form splash=@./src/main/resources/splash.png http://localhost:3000/api/assets
```

# Testing

```bash
./gradlew test
```

# Deployment

```bash
# If you're me, run the equivalent of `npx sls deploy`
npm run deploy
```
