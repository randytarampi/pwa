# Architecture

`pwa` is a Yarn + Lerna workspace for asset generation. The JS packages build the icon/splash pipeline; `asset-service` handles the Kotlin/Gradle side without dragging that tooling into the JS graph.

## Packages
- `android-icon-resize` — resize helpers for Android icon variants.
- `android-icons` — Android icon file names and dimensions.
- `android-splash` — Android splash file names and dimensions.
- `android-splash-generate` — generate Android splash images.
- `asset-generator` — orchestrates the asset generation flow.
- `asset-service` — Kotlin/Gradle service for on-demand generation.
- `generic-icon-splash-generate` — shared Sharp-based icon/splash generation helpers.
- `ios-icon-resize` — resize helpers for iOS icon variants.
- `ios-icons` — iOS icon file names and dimensions.
- `ios-splash` — iOS splash file names and dimensions.
- `ios-splash-generate` — generate iOS splash images.

## Dependency shape
- `asset-generator` → `android-icons`, `android-splash`, `generic-icon-splash-generate`, `ios-icons`, `ios-splash`.
- `android-icon-resize` → `android-icons`, `generic-icon-splash-generate`.
- `android-splash-generate` → `android-splash`, `generic-icon-splash-generate`.
- `ios-icon-resize` → `generic-icon-splash-generate`, `ios-icons`.
- `ios-splash-generate` → `generic-icon-splash-generate`, `ios-splash`.
- `asset-service` sits beside the JS graph and depends on `asset-generator` plus `../me/packages/js`, `lambda-logger`, and `serverless` through `portal:` links.
- Keep the Kotlin/Gradle build isolated; don’t make JS assumptions bleed into it.
