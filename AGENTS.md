# AGENTS.md

`pwa` is the monorepo for the icon/splash asset tooling. Most packages are JavaScript workspaces, with one Kotlin/Gradle service that backs asset generation.

Canonical commands:
- `yarn bootstrap`
- `yarn test`
- `yarn cover`
- `yarn coveralls`

Details:
- [Architecture](docs/ARCHITECTURE.md)
- [Conventions](docs/CONVENTIONS.md)
- [Limitations](docs/LIMITATIONS.md)

## How to add/enrich/update guidance in this repo
- Keep this file as the entry point; expand the focused docs instead.
- Update `ARCHITECTURE.md` when package layout or dependencies change.
- Update `CONVENTIONS.md` when runner, module format, or lint rules change.
- Only document unresolved issues in `LIMITATIONS.md`.
