# Architecture

`pwa` is a Yarn + Lerna workspace for asset generation.

## Layout
- `packages/asset-generator` coordinates generation flows.
- `packages/asset-service` is the Kotlin/Gradle service layer.
- Platform packages handle the assets themselves: `android-icon-resize`, `android-icons`, `android-splash-generate`, `android-splash`, `ios-icon-resize`, `ios-icons`, `ios-splash-generate`, `ios-splash`, and `generic-icon-splash-generate`.

## Dependency shape
- The generator package orchestrates the platform-specific workspaces.
- The service package sits outside the JS/ESM stack and follows Gradle conventions.
