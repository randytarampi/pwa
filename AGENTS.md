# AGENTS.md

`pwa` is the monorepo for the icon/splash asset tooling: generate the icons, splash screens, and service bits without making every app do the same resizing dance. Most packages are JavaScript workspaces, with one Kotlin/Gradle service that backs asset generation.

Canonical commands:
- `yarn bootstrap` — install workspace deps
- `yarn test` — run tests and merge reports
- `yarn lint` — run ESLint
- `yarn clean` — remove build/test junk
- `yarn cover` — run coverage
- `yarn coveralls` — publish coverage when needed

Constraints and sharp edges:
- Node 24, Yarn 4.17, and Lerna 9 are the baseline.
- JS workspaces are ESM; config files that need CommonJS stay `.cjs`.
- `packages/asset-service` is Kotlin/Gradle and keeps its own build conventions.
- The JS side is split into 10 generator/icon/splash packages plus `asset-generator`.
- `asset-service` links into `../me/packages/js`, `lambda-logger`, and `serverless` through `portal:` resolutions.
- Portal symlinks need `--preserve-symlinks` when you expect Node resolution to stay put.
- Immutable resolution is pinned for transitive deps; don’t casually loosen it.

Details:
- [Architecture](docs/ARCHITECTURE.md)
- [Conventions](docs/CONVENTIONS.md)
- [Limitations](docs/LIMITATIONS.md)
- CodeGraph: semantic code index available. Run `codegraph status` to check, `codegraph init` to rebuild. MCP tools available in OpenCode.

## How to add/enrich/update guidance in this repo
- Keep this file as the entry point; expand the focused docs instead.
- Update `ARCHITECTURE.md` when package layout or dependencies change.
- Update `CONVENTIONS.md` when runner, module format, or lint rules change.
- Only document unresolved issues in `LIMITATIONS.md`.
