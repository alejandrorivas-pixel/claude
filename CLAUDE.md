# CLAUDE.md — AI Assistant Guide for `magno`

## Project Overview

**Repository:** magno
**Owner:** alejandrorivas-pixel (alejandro.rivas@magnogi.com)
**Status:** Newly initialized — no application code, build system, or tooling has been set up yet.

## Repository Structure

```
magno/
├── CLAUDE.md          # This file — guidance for AI assistants
└── pro 1              # Placeholder file (empty)
```

## Current State

This repository is in its initial state. The following have **not** been configured:

- **Language / framework** — No tech stack chosen yet
- **Package manager** — No `package.json`, `requirements.txt`, `Cargo.toml`, or equivalent
- **Build system** — No build scripts or task runners
- **Testing** — No test framework or test files
- **Linting / formatting** — No ESLint, Prettier, or equivalent tools
- **CI/CD** — No GitHub Actions workflows or other pipelines
- **Documentation** — No README.md or docs/ directory
- **Git hygiene** — No `.gitignore` file

## Git Information

- **Default branch:** `master`
- **Remote:** `origin` (GitHub — alejandrorivas-pixel/magno)

## Conventions for AI Assistants

When contributing to this repository, follow these guidelines:

1. **Ask before assuming** — Since no tech stack is established, confirm the intended language, framework, and tooling before scaffolding a project.
2. **Keep commits atomic** — Each commit should represent a single logical change.
3. **Write clear commit messages** — Use imperative mood (e.g., "Add user authentication module").
4. **Add a `.gitignore`** — When a tech stack is chosen, create an appropriate `.gitignore` before adding generated/dependency files.
5. **Add a `README.md`** — When the project takes shape, create a README describing what it does, how to set it up, and how to contribute.
6. **Prefer standard tooling** — Use widely-adopted tools for the chosen ecosystem (e.g., ESLint for JS/TS, Black for Python, rustfmt for Rust).
7. **Don't over-scaffold** — Only add structure that is immediately needed. Avoid premature abstraction.

## Next Steps (Suggested)

When development begins, the following should be established early:

- [ ] Choose a tech stack and initialize the project (e.g., `npm init`, `cargo init`, etc.)
- [ ] Add a `.gitignore` appropriate for the chosen stack
- [ ] Add a `README.md` with project description and setup instructions
- [ ] Configure linting and formatting tools
- [ ] Set up a basic CI pipeline (e.g., GitHub Actions for lint + test)
- [ ] Add a testing framework and write initial tests
- [ ] Update this `CLAUDE.md` with build commands, test commands, and architecture details
