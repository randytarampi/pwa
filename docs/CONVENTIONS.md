# Conventions

## ESM rules

- ESM is the default for the JS workspaces because the repo is `type: module`.
- Config files that need CommonJS should use `.cjs`.
- `asset-service` is Kotlin/Gradle and should keep its own build conventions.

## Dependency management

- Use `workspace:*` for internal workspace deps.
- Use `portal:` for the cross-repo links into `../me/packages/*`.
- Keep versions aligned with `syncpack`; don’t let the workspace drift just because it compiles today.

## Baseline

- Use Yarn 4 for installs and workspace scripts.
- Node 24 is the baseline for the JavaScript packages.
- Follow conventional commits so release tooling stays predictable.

## Voice and Style

We use conventional commits with personality. Be practical and candid. Explain WHY, not just WHAT.

Good examples from this repo's history:
- `chore(package): Upgrade packages for 2020-11-22.`
- `fix: webpack-node-externals expects an allowlist, not a whitelist. ✊🏿`
- `chore(www): Transition to webpack-dev-server. Finally.`

Rules:
- Subject line: `type(scope): brief description.` — sentence case, period optional
- Body: explain the why, not just the what. Be yourself.
- Emojis are fine when they add personality, not as decoration
- Don't be corporate. Don't be robotic.
- PR descriptions: thorough but relaxed. Show your work.
