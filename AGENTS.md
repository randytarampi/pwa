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
- Node 24, Yarn 4.18, and Lerna 10 are the baseline.
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

Setup / onboarding:
- Run `codegraph init` after cloning to enable semantic code search via CodeGraph.

## How to add/enrich/update guidance in this repo
- Keep this file as the entry point; expand the focused docs instead.
- Update `ARCHITECTURE.md` when package layout or dependencies change.
- Update `CONVENTIONS.md` when runner, module format, or lint rules change.
- Only document unresolved issues in `LIMITATIONS.md`.

<!-- Managed by configure-agent-guidance.py — do not edit between DOTFILES_REPO_GUIDANCE markers -->
<!-- DOTFILES_REPO_GUIDANCE_START -->
## Repository Guidance

These policies apply to work in every repository.

### Verification

- Run the repository's canonical verification command before claiming success.
- If verification fails, fix it before reporting the work as complete.
- Verify from the committed tree, never the working tree: when the tree is dirty, stash first (or verify `git show HEAD:<file>`) so in-flight content cannot satisfy a check the commit would fail.
- Treat a lane's verification claim as unproven until it is independently re-run: re-execute the repo's verify command (and `actionlint` on workflow changes) before accepting it.

### Commits and pushes

- Keep one concern per commit.
- Use Conventional Commits (`type(scope): description`).
- Never push unless the user explicitly authorizes it.

### Writing and ambiguity

- Use Canadian English in prose and Canadian Press style for formal artifacts.
- Ask before implementing when a flag or name has ambiguous semantics; do not guess when the cost of being wrong is high.

### Delegation and planning

- For unknown scope, delegate bounded discovery first; read expected edit targets directly.
- When changing AI tooling, assess every configured tool up front and enumerate the full tool fleet.
- Keep repository-specific facts and implementation details in the repository's own guidance and documentation.
- Dispatch discipline: never dispatch onto a repo another lane may own. When a background signal contradicts the Job Board, or the board shows `error`/unknown for a session, verify the repository's tip and dirty state directly before re-dispatching — a stale or ambiguous board signal is not proof a session is gone.
- Never run long `sleep`/poll loops in the orchestrator shell; dispatch a read-only watcher lane and end the turn.

### API verification notes

- Verified live 2026-09-05; recheck these facts before debugging around them.
- GitHub Actions `startup_failure` runs expose no check-run, job or annotation API artifacts; use the Actions UI.
- GitHub environment REST responses may omit required reviewers; trust a release run's `waiting` state or the Settings UI, and verify GraphQL types against the schema.
- GitHub Actions allowlists match the full `owner/repo/path@ref`; audit every `uses:` entry, including subpaths and aliases.
- AppVeyor build-job logs are raw text, not JSON.
- Coveralls badges can be stale; use project build JSON for current coverage.
- Unpublished npm versions cannot be republished; release a higher version.

### Communication

- Image and screenshot inputs are not supported in agent lanes; ask for text, a description, or a probed artifact (`pdftotext`, `xxd`) instead of accepting an unreadable file.

### Artifacts

- Probe binary artifacts with appropriate local tools before concluding they are unreadable; never ask the user to resend an unreadable artifact.
<!-- DOTFILES_REPO_GUIDANCE_END -->
