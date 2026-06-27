# Conventions

- Use Yarn 4 for installs and workspace scripts.
- Node 24 is the baseline for the JavaScript packages.
- JS workspaces should stay ESM and use flat ESLint config where present.
- Keep Kotlin/Gradle code in `asset-service` on its own build conventions.
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
