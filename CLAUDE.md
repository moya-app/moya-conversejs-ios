# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project Overview

This repo packages a **custom Converse.js headless build** plus its sibling libraries (`@converse/skeletor`, `@converse/openpromise`) into a single npm-installable bundle consumed by the `moya-client-ios` Ionic/Capacitor app via:

```jsonc
// moya-client-ios/package.json
"converse": "github:binuadmin/moya-conversejs-ios"
```

The iOS app imports `converseInit` from `@converse/headless` and creates one or more isolated Converse instances (`window.converse0`, `window.converse1`, …) for multi-account support.

## Directory Layout

```
moya-conversejs-ios/
├── headless/           # @converse/headless — TARGET v13.0.1 (in-flight retarget from v12.0.0)
│   ├── plugins/        # MUC, chat, OMEMO, roster, vcard, disco, ping, emoji, blocklist, bookmarks, reactions
│   ├── shared/         # API surface, connection, model-with-messages, actions
│   ├── utils/          # init, storage, session
│   ├── dist/           # esbuild output: ESM + CJS, .min and unminified
│   └── build.js        # Custom esbuild script (preserves TOFIND legal comments)
├── headless-old/       # @converse/headless v7.0.6 — ARCHIVED reference
├── skeletor/           # @converse/skeletor — TARGET v3.0.x (currently v0.0.9, must upgrade alongside v13)
├── skeletor-old/       # @converse/skeletor v0.0.5 — ARCHIVED
├── openpromise/        # @converse/openpromise v0.0.1
└── AGENTS.md           # Deep migration / customisation reference — READ FIRST
```

**Target versions:** `@converse/headless@13.0.1` (npm latest, released 2026-05-27) + `@converse/skeletor@^3.0.0` (peer dep). Tarball staged at `/Users/taylorvanderwesthuizen/Downloads/converse-headless-13.0.1.tgz`.

**Current branch:** `tay/testing` carries an in-flight v12.0.0 build with 16 iOS modifications applied. The retarget to v13.0.1 is documented in `MIGRATION.md`. `main` on `binuadmin/moya-conversejs-ios` still points at the v7-era commit; iOS installs from the default GitHub URL resolve to v7 until either `main` is updated or the iOS `package.json` pins `#tay/testing`.

## Commands

```bash
cd headless && npm run build     # esbuild → dist/converse-headless.{esm,}.{,min.}js
cd headless && npm test          # Karma/Jasmine in Chrome
cd headless && npm run types     # Emit TS declarations into types/
```

The build script verifies that all TOFIND legal comments survive into `dist/converse-headless.esm.js`. esbuild strips ordinary comments, so all custom mods use `/*! TOFIND */ // …` form to be preserved. Expected marker count: **16** under v12 build, **17** under v13 build (new mod #17a drops v13's OMEMO plugin auto-registration to avoid pluggable.js duplicate-name throw).

## iOS-Specific Customisations

The v12 headless build carries 16 modifications, all flagged with `/*! TOFIND */`. The v13 retarget adds a 17th (drop OMEMO plugin auto-registration). They exist because the iOS client manages presence, receipts, markers, vcards, subscriptions, MUC join, and emoji handling **manually** — Converse must be a passive XMPP engine, not an opinionated chat client.

See `AGENTS.md` for the full mod list with file/line citations and rationale. The short version:

- Disable auto: chat markers, message receipts, MUC join presence, MUC invite handler, vcard get/update, roster subscription handling
- Bypass: `await this.messages.fetched` (iOS controls message lifecycle), MUC `isJoined()` ping check (server rejects ping)
- Silence: disco query errors (don't crash on missing services)
- Return `[]` from emoji shortname processing (iOS handles emojis later)
- Remove: ping plugin registration (server doesn't support XEP-0199)
- Add: `_converse.state.roster` null check in headlines flow
- Multi-instance: `converseInit(index)` wrapper exposing `window.converse${index}`
- Connection: `mode: 'no-cors'` on host-meta fetch
- Storage: deterministic IndexedDB name for multi-instance isolation

## iOS App Integration Boundary

The iOS-side codebase (`moya-client-ios`) has restructured significantly since the original migration plan:

- `src/app/xmpp/` is a new top-level layer holding XMPP-protocol services (stanza builders, presence, discovery, pubsub, push) that have no chat-feature coupling.
- `src/app/xmpp/converse-boundary/` is **the single chokepoint** between the app and Converse runtime internals. `ConverseAdapter` (a static class) wraps every `_converse.*`, `converse.env.*`, `instance.connection.*`, and `api.*` access the app needs.
- OMEMO is split across `submodules/chat/services/xmpp/converse-plugins/omemo/{types,models,helpers,services,overrides}/`. Models (`OMEMOStore`, `Device`, `Devices`, `DeviceList`, `DeviceLists`) currently use `Model.extend()` / `Collection.extend()` — skeletor v0.0.9 keeps that API. **The v13 target requires skeletor v3.x, which removed `.extend()`; the OMEMO models must be rewritten as ES6 classes alongside the swap.**

**Implication for v7 → v13.0.1:** the swap is concentrated in (1) a fresh v13.0.1 headless drop with iOS TOFIND mods re-applied, (2) skeletor 0.0.9 → 3.0.1 upgrade plus OMEMO model ES6-class rewrite, (3) adapter rewrite for v11-era moves (`_converse.connection` → `api.connection.get()`), (4) OMEMO bootstrap closure rewrite for `state.*` relocations.

See `MIGRATION.md` for the full swap-in path, breaking-changes tracker (v7 → v13.0.1), and iOS change inventory.

## v7 → v13.0.1 API Changes Affecting the Adapter

Verified against the v12 source in `headless/` and the v13.0.1 tarball:

- `_converse.connection` → `_converse.api.connection.get()` (v11)
- `_converse.devicelists` → `_converse.state.devicelists` (v12)
- `_converse.omemo_store` → `_converse.state.omemo_store` (v12)
- `_converse.shouldClearCache()` → `shouldClearCache(_converse)` util import from `utils/session.js` (v12)
- `_converse.createStore(id)` → `createStore(id, 'persistent')` util import from `utils/storage.js` (v12)
- `_converse.CHATROOMS_TYPE` / `PRIVATE_CHAT_TYPE` → `_converse.constants.CHATROOMS_TYPE` etc. (v12)
- `_converse.<setting>` direct reads → `api.settings.get(key)` (v9)
- `$build` / `$msg` / `$iq` builders remain available on `converse.env`, plus `stx` tagged template literal (v10)
- Promise-returning APIs: `api.chats.get/create`, `api.rooms.get/create`
- `api.modal.create` takes a custom-element name, not a class (v11)
- Removed events: `windowStateChanged`, `chatBoxFocused`, `chatBoxBlurred` (v11); `bookmarkViewsInitialized`, `chatBoxInsertedIntoDOM`, `contactStatusMessageChanged`, `messageSend`, `rosterGroupsFetched` (v8)
- `api.settings.update` removed → use `api.settings.extend` (v11)
- `converse-carbons` plugin removed; carbons always enabled (v10)
- `Strophe.shims` removed; use globals directly (v12)
- XEP-0191 Blocking Command native (v11) — potential replacement for iOS block path
- XEP-0402 native bookmarks (v11) — potential replacement for iOS bookmark stanzas
- XEP-0444 Message Reactions native (v13.0.0) — iOS reactions port plan can be retired
- XEP-0461 Message Replies native (v13.0.0) — iOS replies port plan can be retired
- Skeletor 3.x: `Model.extend()` / `Collection.extend()` removed; `Storage` → `BrowserStorage`; `Model.clone()` removed

Several iOS modifications could be **dropped in favour of v13 settings or hooks** (see AGENTS.md "v12 Idiomatic Alternatives" — applies to v13 too — for the per-mod analysis). Worth folding into the swap if the engineering cost is low.

## Notes

- Pre-built distribution: source modifications live in `headless/*.js`; rebuild with `npm run build` before committing dist.
- `headless/dist/` is checked in because the iOS app installs from GitHub without a build step.
- Don't edit `headless-old/` or `skeletor-old/` — they are reference snapshots only.
- All custom modifications must use `/*! TOFIND */` legal-comment form to survive esbuild.
