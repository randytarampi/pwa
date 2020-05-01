## [2.0.1](https://github.com/randytarampi/pwa-asset-service/compare/v2.0.0...v2.0.1) (2020-01-09)


### Bug Fixes

* Deploy our `serverless-domain-manager` uses the `*.randytarampi.ca` certificate in all environments. ([cbed709](https://github.com/randytarampi/pwa-asset-service/commit/cbed70976e6ba86451775942136885f2508089e9))

# [2.0.0](https://github.com/randytarampi/pwa-asset-service/compare/v1.0.0...v2.0.0) (2020-01-06)


### Features

* **package:** Blindly upgrade our dependencies for the new year and support node@10. ([c9e20e2](https://github.com/randytarampi/pwa-asset-service/commit/c9e20e28dc78d27d77429527e6180063ce4f7d6c))


### BREAKING CHANGES

* **package:** Really, this is more about dropping support for node@8, but AWS is disallowing creation of node@8 lambdas today anyways, per https://docs.aws.amazon.com/lambda/latest/dg/runtime-support-policy.html.

# 1.0.0 (2019-03-25)


### Bug Fixes

* **package:** Fix repository. ([c784029](https://github.com/randytarampi/pwa-asset-service/commit/c784029))
* **travis:** Just use JDK 11, since it doesn't have licensing restrictions. ([7e01ee9](https://github.com/randytarampi/pwa-asset-service/commit/7e01ee9))
* **travis:** Need to use a JDK 9 <= 13 – just use JDK 12. ([e81e435](https://github.com/randytarampi/pwa-asset-service/commit/e81e435))


### Features

* Initial commit. ([94c3154](https://github.com/randytarampi/pwa-asset-service/commit/94c3154))
