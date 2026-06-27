pwa-asset-service
---

[![CI](https://github.com/randytarampi/pwa/actions/workflows/ci.yml/badge.svg)](https://github.com/randytarampi/pwa/actions/workflows/ci.yml)
[![Coverage status](https://img.shields.io/coveralls/randytarampi/pwa.svg?style=flat-square)](https://coveralls.io/github/randytarampi/pwa?branch=master)
[![Maintainability status](https://img.shields.io/codeclimate/maintainability-percentage/randytarampi/pwa.svg?style=flat-square)](https://codeclimate.com/github/randytarampi/pwa/maintainability)
[![Analytics](https://ga-beacon.appspot.com/UA-50921068-1/beacon/github/randytarampi/pwa-asset-service/?flat&useReferrer)](https://github.com/igrigorik/ga-beacon)


Use [`@randy.tarampi/pwa-asset-generator`](https://www.npmjs.com/package/@randy.tarampi/pwa-asset-generator) to quickly generate image assets for a Progressive Web Application.

# Dependencies

- **Node.js**: `>=20`
- **Java Development Kit (JDK)**: Java 11 - 21 is required to compile and run the project using the Gradle wrapper.
- **Gradle**: The project includes the Gradle `8.5` wrapper (`./gradlew`), so there is no need to install Gradle manually.

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
yarn run deploy
```
