# MIGRATION.md — Wiring the v13.0.1 Build into moya-client-ios

This document covers the swap-in path for replacing the v7-era Converse runtime in `moya-client-ios` with a v13.0.1-based build in this repo.

For background on the iOS source modifications, see `AGENTS.md`. For top-level orientation, see `CLAUDE.md`. For the running iOS-side change log, see `moya-client-ios/docs/CONVERSE_V13_UPGRADE.md`.

**Target version: `@converse/headless@13.0.1`** (released 2026-05-27, npm `latest`).

**Pinned skeletor version: `3.0.1` exact (no caret)** in both repos. Skeletor `3.0.0` is a broken release (`package.json` `module` field points to `src/index.ts`, no `dist/skeletor.esm.js` present — webpack reports "module has no exports"). `3.0.1` ships the proper built ESM + CJS files. Pinning exact prevents drift; bumps are coordinated across both `package.json` files (this repo's `headless/package.json` and `moya-client-ios/package.json`).

A previous swap attempt targeted v12.0.0. That work has since been **retargeted to v13.0.1** (now landed on `tay/testing`) so we pick up:

- XEP-0444 Message Reactions (v13.0.0)
- XEP-0461 Message Replies (v13.0.0)
- XEP-0191 Blocking Command (v11.0.0)
- ESM-only headless build (v12.0.0)
- Native bookmarks XEP-0402 (v11.0.0)
- OMEMO bugfixes from v12 + v13
- Reaction attribution fix from v13.0.1

---

## 1. Current State

### This repo (`moya-conversejs-ios`)

- Branch `tay/testing` carries the **v13.0.1 build** with **19** iOS modifications applied. `headless/dist/converse-headless.esm.js` is ~1.04 MB with 19 TOFIND markers (16 base + #17a OMEMO plugin auto-registration drop + #18 emoji.json fetch skip + #19 sendIQ timeout silence).
- Branch `main` on the GitHub remote (`binuadmin/moya-conversejs-ios`) still points at the v7-era commit. `npm install github:binuadmin/moya-conversejs-ios` without a ref resolves to v7.

### iOS app (`moya-client-ios`)

- Branch `tay/converse-upgrade` is the dedicated upgrade branch.
- `package.json:76` declares `"converse": "github:binuadmin/moya-conversejs-ios"` (unpinned). Installed dependency is v7.0.6.
- All Converse runtime access is consolidated behind `src/app/xmpp/converse-boundary/converse.adapter.ts` — ~42 static seams. Adapter is the genuine chokepoint (only 6 raw `instance.connection.*` lines remain in the entire app, all inside the adapter itself).
- OMEMO is split across `src/app/submodules/chat/services/xmpp/converse-plugins/omemo/{types,models,helpers,services,overrides}/`. Every extracted OMEMO file reaches Converse only through `ConverseAdapter`. Only `omemo.service.ts` (plugin-bootstrap closure) holds raw `_converse.*` access — most of it intentional install seams.

**Bottom line:** the iOS-side restructure (Phases 0–4.5 in `docs/OMEMO_AND_XMPP_REFACTOR.md`) is complete. The v7→v13.0.1 swap is concentrated in:

1. A fresh v13.0.1 headless drop in this repo with the iOS TOFIND mods re-applied.
2. A skeletor `0.0.9` → `3.0.1` upgrade in iOS (ES6-class refactor for OMEMO models).
3. An adapter rewrite for v11-era moves (`_converse.connection` → `api.connection.get()`).
4. An OMEMO bootstrap closure rewrite for `state.*` relocations.

---

## 2. Breaking Changes Tracker (v7.0.6 → v13.0.1)

Authoritative source: upstream [CHANGES.md](https://github.com/conversejs/converse.js/blob/master/CHANGES.md). Per-version impact below, with iOS callouts.

### v8.0.0 (2021-09-03)
- **Persistent store default: IndexedDB** (was localStorage). iOS already uses IndexedDB — no impact.
- `afterMessageBodyTransformed` / `beforeMessageBodyTransformed` event signatures changed.
- Leaving a MUC deletes message history (configurable via `muc_clear_messages_on_leave`). iOS impact: chat-side history retention — verify against own MAM/storage layer.
- **Removed events:** `bookmarkViewsInitialized`, `chatBoxInsertedIntoDOM`, `contactStatusMessageChanged`, `messageSend` (use `sendMessage`), `rosterGroupsFetched`. iOS impact: grep for these event names across iOS source.
- `chatBoxClosed/Maximized/Minimized` payload is `model`, not `view`.
- `api.chatviews` / `api.roomviews` removed (UI-only, iOS unaffected).
- Plugin files relocated under `./plugins/`.

### v9.0.0 (2021-11-26)
- **Configuration settings removed from `_converse` object.** Use `api.settings.get` / `api.settings.set`. iOS adapter already routes via `ConverseAdapter.getSetting` for new code — audit for legacy direct `_converse.<setting>` reads.

### v10.0.0 (2022-10-30)
- Strophe.js 1.6.0 (SCRAM-SHA-256/512). Server-side considerations only.
- **Removed `converse-carbons` plugin** — carbons now in `converse-chat`. `message_carbons` setting removed.
- **Removed `allow_muc`** — use `blacklisted_plugins: ['converse-muc']`.
- New `api.chatboxes.registry.add(type, model)` replaces pluggable `overrides` for adding chat types.
- OSM URLs no longer auto-converted to `geo:` URIs.

### v11.0.0 (2025-05-21) — **biggest break for this app**
- **`_converse.connection` removed → `api.connection.get()`.** Hits adapter directly (`converse.adapter.ts:50,70,74,224,229,278,283`).
- **`api.settings.update` removed → `api.settings.extend`.** iOS bootstrap already uses `extend`.
- `getAssignableRoles` / `getAssignableAffiliations` moved from `_converse` to Occupant instance.
- **Removed events:** `chatBoxFocused`, `chatBoxBlurred`, `windowStateChanged`.
- `api.contacts.add` signature changed.
- `api.modal.create` takes element name (string), not class.
- `BootstrapModal` → `BaseModal` web component.
- New `_converse.exports` namespace for plugin-accessible classes.
- Removed `default_state`, `autocomplete_add_contact`, `mobile` view_mode.
- New defaults: `view_mode=fullscreen`, `auto_register_muc_nickname='unregister'`, `allow_non_roster_messaging=true`.
- XEP-0191 Blocking Command added (potential iOS simplification — iOS may have its own block path).
- XEP-0424/0425 Retraction/Moderation upgraded — old format dropped, server-side update needed.
- New `loadEmojis` hook (iOS mod #7 replacement candidate).
- New `getOccupantActionButtons` hook.
- XEP-0402 native bookmarks.

### v12.0.0 (2025-08-28)
- **`Strophe.shims` removed** — use globals directly.
- ESM build for `@converse/headless` (and main converse).
- `jsdom`/`ws` moved to peerDependencies.
- New `api.disco.entities.find` for capability lookup.
- webpack → rspack (build-side, irrelevant to consumer).
- OMEMO bugfixes (#3769).

### v13.0.0 (2026-05-20)
- **XEP-0444 Message Reactions** native support. iOS has its own reaction code under `submodules/chat`; collision audit required (`docs/message-reactions-port-plan.md`, `docs/message-reactions-ios.md`).
- **XEP-0461 Message Replies** native support. Same audit point (`docs/message-forwarding-port-plan.md`).
- New `autocomplete_providers_url` setting.
- `unescapeHTML` helper moved to `@converse/headless` (#3863) — iOS impact only if iOS imports it from elsewhere.
- `muc_grouped_by_domain` option.
- Strip locked MUC domain from room address input.
- Many bugfixes (audio a11y, emoji shortname collisions, custom emoji, bookmark removal, OMEMO padlock visibility when libsignal absent).

### v13.0.1 (2026-05-27) — **current target**
- Fix reaction attribution bug (wrong JID applied based on reactions).
- Strip `xmpp:` prefix and query params from MUC JID join modal input.

### v14 (unreleased — watch list)
- **CJS build removed, ESM only.** Inline `converse.initialize()` callers must use `type="module"`.
- `api.modal.show` no longer takes modal instance as first parameter.
- OMEMO 2 support (`urn:xmpp:omemo:2` + XEP-0420 SCE) — large rework if adopted.

### Skeletor (`@converse/skeletor`) — separate but coupled

`@converse/headless@13.0.1` peer-depends on `@converse/skeletor@^3.0.0`. iOS currently bundles `0.0.9` (Backbone-style). Skeletor itself has its own breaking changes:

- **v1.0.0 (2025-12-13):** Rewrite as TypeScript. Removed `View`, `ElementView`, `Router`, `History`, `Events` constructor (replaced by `EventsEmitter` mixin). Removed `Model.clone()`. **All types are now ES6 classes — `.extend()` removed.**
- **v2.0.0 (2025-12-13):** `Model.prototype.set` returns `null` (not `false`) on validation failure.
- **v3.0.0 (2025-12-13):** `Collection.prototype.create` returns `null` (not `false`) on failure. `Storage` exported as `BrowserStorage` (rename).
- **v3.0.1 (current latest):** Bugfixes.

**iOS impact (verified by grep):**
- `omemo/models/omemo-device.model.ts:94,155,164,338` — `Device`, `Devices`, `DeviceList`, `DeviceLists` use `Model.extend()` / `Collection.extend()` → must rewrite as ES6 classes.
- `omemo/models/omemo-store.model.ts:68` — `OMEMOStore` uses `Model.extend()` → rewrite.
- Any import of `Storage` from `@converse/skeletor` → rename to `BrowserStorage`.
- Any `model.clone()` usage → drop or replace with manual `new Model(model.attributes)`.

---

## 2.5. Architectural decisions made during the swap

These shape the cross-repo work and are worth understanding before touching either codebase.

### 2.5.1 Skeletor lives on the iOS side as a direct npm dependency

iOS `package.json` declares `"@converse/skeletor": "3.0.1"`. The headless build (`build.js`) marks `@converse/skeletor` and `@converse/skeletor/*` as **external** — they stay unresolved in the dist and webpack resolves them at iOS bundle time against `node_modules/@converse/skeletor/`.

**Why iOS owns skeletor (not the bundle):**
- iOS source extends skeletor classes directly: `class OMEMOStore extends Model { ... }` (§4.5). For `instanceof Model` checks and prototype chains to work across iOS code AND headless internals, both sides must reference the **same** `Model` constructor — same JavaScript identity, not just same source.
- With skeletor external in the dist, webpack resolves both iOS's `import { Model } from '@converse/skeletor'` and headless's internal `@converse/skeletor` imports to the same `node_modules/@converse/skeletor/dist/skeletor.esm.js`. One class object, one identity.
- If skeletor were bundled into the dist, the dist would carry its own closure-local `Model`, and iOS would resolve `Model` from elsewhere (npm copy or bundled subdir) — two distinct constructors with the same source but different identity. `instanceof` returns `false`. Subtle, hard to debug.
- v7-era skeletor (`0.0.9`) used Backbone-style `Model.extend({...})` which returned brand-new constructors per call — class identity was loose by design. v3.x pure ES6 classes are strict, so the bundling pattern that worked in v7 breaks here.

This matches upstream's own pattern — v13 `@converse/headless@13.0.1` declares `@converse/skeletor` as a regular `dependencies` entry (not bundled into their dist).

### 2.5.2 Every other runtime peer dep stays inlined in the dist

iOS does NOT install `@converse/log`, `@converse/openpromise`, `strophe.js`, `pluggable.js`, `sizzle`, `dompurify`, `lit`, `hsluv`, `filesize`, `sprintf-js`, `dayjs`, `lodash-es`, `localforage-webextensionstorage-driver`. These are bundled INTO `dist/converse-headless.esm.js` so iOS picks them up transitively through the single `converse` GitHub install.

**Why:** iOS code never imports any of them directly. Only the headless runtime touches them. Bundling keeps the iOS `package.json` minimal (matches the v7-era pattern of "one bundle, everything inside") and preserves the original purpose of `moya-conversejs-ios` — to reduce iOS-side dep management.

**Trade-off:** dist is ~1.0 MB ESM (vs ~585 KB when everything was external against an empty host). Net iOS payload is roughly equivalent because the alternative would put those deps in iOS `node_modules` anyway. The minified ESM dist is ~434 KB, which is iOS's actual runtime cost.

### 2.5.3 build.js externals are slim — only skeletor + Node-only peers

`headless/build.js` external array:
```js
external: [
  '@converse/skeletor',
  '@converse/skeletor/*',
  // Node-only peer deps of strophe.js's Node ESM build (jsdom, ws). The browser
  // ESM path doesn't touch these; iOS browser runtime never executes the Node
  // entry, so leaving them external means esbuild doesn't try to resolve them
  // and the unresolved imports are harmless in the browser build.
  'jsdom',
  'ws',
]
```

Everything else is inlined. The `jsdom`/`ws` externals exist only because strophe.js 4.x has a Node-side ESM file (`strophe.node.esm.js`) that imports them statically; bundling tools follow the static import even though it's never executed in the browser. Marking them external sidesteps the resolution.

### 2.5.4 No `skeletor/` or `openpromise/` subdirectories in this repo

After the bundle pattern (§2.5.1, §2.5.2) is in place, the vendored `moya-conversejs-ios/skeletor/` and `moya-conversejs-ios/openpromise/` subdirectories have no consumer:
- iOS code reaches skeletor via npm (`node_modules/@converse/skeletor/`).
- Headless's own build pulls its skeletor and openpromise copies via `moya-conversejs-ios/headless/node_modules/` (its own npm install).
- The repo-root subdirectories are referenced by nothing.

They are deleted as part of the v13 retarget. Pre-existing v7-era `headless-old/` and `skeletor-old/` archives are kept for reference until v13 is verified in production for ≥1 week.

### 2.5.5 iOS tsconfig path mapping changes

The legacy `@converse/*` → `./node_modules/converse/*` catch-all was REMOVED from `moya-client-ios/tsconfig.json`. It mapped every `@converse/X` import (including `@converse/skeletor`) to the bundled subdir, shadowing npm-installed packages.

Replaced with only explicit `@converse/headless` and `@converse/headless/*` mappings (still pointing to the bundle). All other `@converse/*` imports — currently just `@converse/skeletor` — fall through to standard npm resolution.

`tsconfig.json` also gained `skipLibCheck: true` and bumped `lib` from `es2019` to `es2023` (skeletor 3.x uses `Array.prototype.findLastIndex`).

---

## 3. Swap-In Path

### Step 1 — Stage v13.0.1 source in this repo

The current `headless/` directory carries v12.0.0 + 16 TOFIND mods. We need a clean v13.0.1 source tree with the same mods re-applied. The existing `headless-old/` (v7.0.6 archive) sets the pattern for keeping old versions for reference.

```bash
# In moya-conversejs-ios, branch tay/testing
git mv headless headless-v12
mkdir headless
tar xzf /Users/taylorvanderwesthuizen/Downloads/converse-headless-13.0.1.tgz -C headless --strip-components=1
# Restore the iOS-specific build.js if v13 doesn't ship one — it doesn't preserve TOFIND comments by default
cp headless-v12/build.js headless/build.js
```

Verify `headless/package.json` reports `13.0.1` and `dependencies["@converse/skeletor"]` is `^3.0.0`.

### Step 2 — Re-apply the 16 TOFIND modifications onto v13 source

The 16 mods from v12 need re-applying onto v13 source. Most target files still exist in v13 (`shared/actions.js`, `plugins/muc/muc.js`, `plugins/vcard/api.js`, etc.) but line numbers will have shifted.

For each TOFIND mod, the workflow is:
1. Find the v12 patch in `headless-v12/<path>` (search for `/*! TOFIND */`).
2. Find the same code surface in `headless/<path>` (v13).
3. Apply the same modification with the `/*! TOFIND */` legal comment.

Full mod list lives in `AGENTS.md` § 3. The 16 mods touch these files:

| # | File (path under `headless/`) | Mod type |
|---|---|---|
| 1 | `index.js` | Multi-instance wrapper |
| 2 | `shared/actions.js` | Disable `sendMarker` |
| 3 | `shared/actions.js` | Disable receipts |
| 4 | `shared/model-with-messages.js` | Bypass `messages.fetched` |
| 6 | `plugins/disco/entity.js` | Silence query errors |
| 7 | `plugins/emoji/utils.js` | Return `[]` from shortnames |
| 8 | `plugins/muc/muc.js` | Disable join presence |
| 9 | `plugins/muc/muc.js` | Skip `isJoined` ping |
| 10 | `plugins/muc/utils.js` | Disable invite handler |
| 11 | `plugins/headlines/utils.js` | Roster null check |
| 12 | `plugins/ping/index.js` | Disable plugin registration |
| 13 | `plugins/roster/contacts.js` | Disable subscription handler |
| 14 | `plugins/vcard/api.js` | Disable vcard get |
| 15 | `plugins/vcard/api.js` | Disable vcard update |
| 16 | `shared/connection/index.js` | Host-meta CORS |
| 17 | `utils/init.js` | Storage DB naming |

(Mod #5 was intentionally skipped — see `AGENTS.md` § 3 footnote.)

### Step 3 — Add new TOFIND #17a: drop OMEMO plugin auto-registration

v13 ships its own OMEMO plugin at `plugins/omemo/plugin.js` registering as `'converse-omemo'`. The iOS overlay registers the same name. `pluggable.js:registerPlugin` throws on duplicate names — registration is eager at module import time, so `blacklisted_plugins` config can't help.

Edit `headless/plugins/omemo/index.js` — remove the `import './plugin.js'` line, leave the `Strophe.addNamespace(...)` calls and the model class exports intact. Mark with `/*! TOFIND */`.

This brings the total TOFIND count to **17** (renumbered as needed in `AGENTS.md`).

### Step 4 — Build and verify

```bash
cd headless
npm install
npm run build
grep -c TOFIND dist/converse-headless.esm.js
# Expect: 17
```

If `build.js` errors because v13 changed the build pipeline, port the script (it's small — ~80 lines) and re-run. Confirm the dist files are ~comparable in size to v12 (~600KB ESM).

### Step 5 — Publish to GitHub

**Option A — Merge to main (preferred when ready):**
```bash
git checkout main
git merge tay/testing
git push origin main
```

**Option B — Pin iOS package.json to branch (safer for opt-in test):**
```jsonc
// moya-client-ios/package.json
"converse": "github:binuadmin/moya-conversejs-ios#tay/testing"
```

### Step 6 — iOS adapter rewrite for v11-era moves

File: `moya-client-ios/src/app/xmpp/converse-boundary/converse.adapter.ts`

| Method | v7 path (current) | v13 path |
|--------|-------------------|----------|
| `disconnect(instance, reason)` | `instance.connection.disconnect(reason)` | `instance.api.connection.get().disconnect(reason)` |
| `forceDisconnect(instance)` | `instance.connection._proto._disconnect()` | `instance.api.connection.get()._proto._disconnect()` |
| `setXmlInput(instance, fn)` | `instance.connection.xmlInput = fn` | `instance.api.connection.get().xmlInput = fn` |
| `setXmlOutput(instance, fn)` | `instance.connection.xmlOutput = fn` | `instance.api.connection.get().xmlOutput = fn` |
| `addStanzaHandler(instance, …)` | `instance.connection.addHandler(…)` | `instance.api.connection.get().addHandler(…)` |
| `getConnectionJid(instance)` | `instance.connection.jid` | `instance.api.connection.get().jid` |
| `getBareJid(instance)` | `instance.bare_jid` | **No change.** Still on `_converse` root (deprecated but functional in v13) |
| `getResource(instance)` | `instance.resource` | **No change.** Same status as `bare_jid` |
| `getDevicelists(instance)` | `instance.devicelists` | `instance.state.devicelists` |
| `getOmemoStore(instance)` | `instance.omemo_store` | `instance.state.omemo_store` |
| `getChatTypes(instance)` | `instance.CHATROOMS_TYPE` / `instance.PRIVATE_CHAT_TYPE` | `instance.constants.CHATROOMS_TYPE` / `instance.constants.PRIVATE_CHAT_TYPE` (preferred), or import from `@converse/headless` |
| `getConfig(instance, key)` | `instance.config.get(key)` | **No change** |
| `resetDevicelists(instance)` | `new instance.DeviceLists()` | iOS overlay still installs `DeviceLists` (no change) |

Also update `xmpp/converse-boundary/converse.types.ts` to reflect the v13 shape (add `state` substructure, `api.connection.get()` return type, etc.) before adapting the implementation.

Run `converse.adapter.spec.ts` after each seam change. Update `xmpp/converse-boundary/testing/fake-converse-runtime.ts` so the harness mirrors v13 shape (add `state.devicelists`, `state.omemo_store`).

### Step 7 — Rewrite OMEMO bootstrap closure for v13 paths

File: `moya-client-ios/src/app/submodules/chat/services/xmpp/converse-plugins/omemo.service.ts`

| Line(s) | v7 access | v13 replacement |
|------|-----------|-----------------|
| `:76` | `_converseCopy.createStore(id)` | Import `createStore` from `@converse/headless/utils/storage.js`. Or extend `ConverseAdapter.createStore` (currently at `converse.adapter.ts:383` reading `instance.createStore`) to fall back to the util import. |
| `:302` | `_converse.shouldClearCache()` | Import `shouldClearCache` from `@converse/headless/utils/session.js`, call `shouldClearCache(_converse)` |
| `:302-304,333` | `_converse.devicelists` | `_converse.state.devicelists` |
| `:344,352,355,366,370,374` | `_converse.omemo_store` | `_converse.state.omemo_store` |
| `:72,74-75,78` | `_converseCopy.omemo_store` | `_converseCopy.state.omemo_store` |
| `:73,297,334` | `_converse.bare_jid` / `_converseCopy.bare_jid` | **No change** |

Install-seam writes that remain unchanged:
- `Strophe.addNamespace('OMEMO_DEVICELIST', …)` — Strophe 4.x compatible
- `converse.env.omemo = createOmemoCrypto(u)` — `converse.env` still exposed
- `_converse.NUM_PREKEYS = 100` — iOS overlay owns it
- `Object.assign(_converse.ChatBox.prototype, omemoMixin)` — `ChatBox` still exported
- `_converse.OMEMOStore = …`, `_converse.Device = …`, helper-fn installs — overlay-owned, no collision (v13 OMEMO plugin disabled per Step 3)
- `Object.assign(_converse.api, { omemo: { bundle: { generate } } })` — overlay sole writer
- 13 `ConverseAdapter.on(_converseCopy, …)` listener registrations — adapter-routed already
- `enabled()` reads via `ConverseAdapter.getConfig` / `getSetting` — adapter-routed already

### Step 8 — Skeletor 3.x ES6 class refactor

Skeletor `0.0.9` → `3.0.1` removes `.extend()`. Rewrite OMEMO models as ES6 classes:

**`omemo/models/omemo-store.model.ts:68` (`OMEMOStore`):** Convert `Model.extend({ defaults: {…}, initialize(…) {…}, … })` to:
```typescript
class OMEMOStore extends Model {
  defaults = { /* … */ };
  initialize(…) { /* … */ }
  // … other methods
}
```

**`omemo/models/omemo-device.model.ts` (`Device`, `Devices`, `DeviceList`, `DeviceLists`, lines 94, 155, 164, 338):** Same rewrite. `Collection.extend` becomes `class X extends Collection`. Preserve `idAttribute`, `defaults`, all methods verbatim.

Watch for skeletor 3 semantic changes during the rewrite:
- `Model.set` returns `null` on validation failure (was `false`)
- `Collection.create` returns `null` on failure (was `false`)
- `Storage` → `BrowserStorage` (rename any import)
- `Model.clone()` removed (no usages found in iOS, but verify)

The `OMEMOStoreModel.spec.ts` and `omemo-device.model.spec.ts` suites (under helper-slice coverage) must pass after rewrite. The Phase 4 Batch 3 boundary contracts (deps shape, adapter routing) stay identical — only the model superclass syntax changes.

### Step 9 — Reactions / Replies collision audit

v13 ships native XEP-0444 reactions and XEP-0461 replies. iOS has port plans in `docs/message-reactions-port-plan.md`, `docs/message-reactions-ios.md`, and `docs/message-forwarding-port-plan.md`.

Before swap, decide per feature:
- **Use v13's native handling** → blacklist iOS's port (mirror the OMEMO override-removal pattern). Smaller iOS surface, picks up upstream fixes (#13.0.1 attribution bug already fixed).
- **Keep iOS's port** → add `'converse-reactions'` to `blacklisted_plugins`. Same eager-registration concern applies — verify via `headless/plugins/reactions/` whether v13's plugin auto-registers at import time (likely yes). If so, the same fork-edit pattern (drop the import in `headless/index.js`) is needed.

Grep iOS for `'urn:xmpp:reactions:0'` and `'urn:xmpp:reply:0'` to find the existing reaction/reply implementation surface. Compare against v13's `headless/plugins/reactions/`.

### Step 10 — Spec suite + verification

```bash
cd moya-client-ios
npx tsc --noEmit -p tsconfig.app.json
npm run guard:chat-mutability
ng test --include="src/app/xmpp/**/*.spec.ts" --watch=false
ng test --include="src/app/submodules/chat/services/xmpp/converse-plugins/omemo/**/*.spec.ts" --watch=false
ng test --include="src/app/submodules/chat/services/xmpp/converse-plugins/omemo.service.spec.ts" --watch=false
ionic build --configuration pseudoprod
```

The OMEMO helper-slice suite (52 cases) and bootstrap spec (18 cases) drive the adapter — v13 shape mismatches should surface here.

### Step 11 — Manual smoke test

```bash
cd moya-client-ios
ionic serve
```

Drive these paths with Moya-iOS UA + iPhone 14 Pro Max emulation (per `docs/playwright-browser-runbook.md`):

- Multiple accounts: `window.converse0`, `window.converse1` independently connect
- Send + receive 1:1 encrypted message
- Open and observe a MUC room (no auto-presence sent, but messages flow)
- Disconnect / reconnect cycle
- IndexedDB inspection: one DB per account based on websocket host
- (If using v13 reactions) — react to a message, observe stanza shape
- (If using v13 replies) — reply to a message, observe stanza shape

### Step 12 — Optional cleanups (post-swap)

Several iOS mods can retire in favour of v13 settings/hooks:

| Mod | Replace with |
|-----|--------------|
| #2 disable `sendMarker` | `send_chat_markers: []` |
| #7 return `[]` from emoji shortname | `api.listen.on('loadEmojis', () => ({}))` (hook landed in v11) |
| #8 disable MUC join presence | `api.listen.on('constructedMUCPresence', (muc, presence) => null)` |
| #10 disable MUC invite handler | `api.listen.on('confirmDirectMUCInvitation', () => false)` |
| #12 disable ping plugin | `blacklisted_plugins: ['converse-ping']` |
| #16 host-meta `no-cors` | `discover_connection_methods: false` (already passed at init — patch likely dead code) |

See `AGENTS.md` § 4 for full per-mod analysis. Cleanups shrink the fork surface from 17 to ~11, materially reducing future-upgrade cost.

---

## 4. Troubleshooting

### Build errors

**`Cannot find module '@converse/skeletor'`**
Confirm `moya-client-ios/node_modules/converse/skeletor/` exists. If not, `npm install` failed to pull from GitHub — clear `node_modules/converse` and reinstall.

**`Model.extend is not a function` / `Collection.extend is not a function`**
Skeletor 3.x removed `.extend()`. Rewrite the offending model as an ES6 class. Affected files: `omemo/models/omemo-device.model.ts`, `omemo/models/omemo-store.model.ts`.

**TypeScript errors in adapter after v13 swap**
`ConverseLike` in `xmpp/converse-boundary/converse.types.ts` describes the v7 shape. Update its property declarations to mirror v13 (`state` substructure, `api.connection.get()` return type, optional `_converse.exports`, etc.) before adapting the implementation.

**`Storage is not exported from @converse/skeletor`**
Renamed to `BrowserStorage` in skeletor 3.0.0. Update the import.

### Runtime errors

**`_converse.connection is undefined`**
Adapter still on v7 path. Update `ConverseAdapter.disconnect` and friends to route via `api.connection.get()`.

**`Cannot read property 'jid' of undefined`** in OMEMO stanza building
`getConnectionJid` reading via stale path. v11 moved connection access to `api.connection.get()`.

**`Error: Plugin name converse-omemo is already taken`**
v13's OMEMO plugin registered before iOS's overlay. Apply the TOFIND #17a fork edit (drop `import './plugin.js'` in `headless/plugins/omemo/index.js`) and rebuild.

**`_converse.OMEMOStore is not a constructor`**
OMEMO model installation in plugin bootstrap closure failed to assign before consumers ran. Check `omemo.service.ts:initialize()` runs before any code that calls `new _converse.OMEMOStore()`.

**`_converse.devicelists is undefined`**
v12+ moved devicelists to `_converse.state.devicelists`. Update reads in `omemo.service.ts` lines 302-304, 333.

**`_converse.shouldClearCache is not a function`**
v12+ removed `shouldClearCache` from `_converse`. Import the util from `@converse/headless/utils/session.js` directly.

**MUC OMEMO error during send**
Expected — MUC OMEMO is intentionally non-functional (`parseMUCEncryptedMessage` is a tombstone, `sendMUCMessage` sets `is_encrypted: false`). Group encryption is out of scope.

### Verification commands

```bash
# Confirm v13.0.1 dependency
cat moya-client-ios/node_modules/converse/headless/package.json | grep version
# Expect: "version": "13.0.1"

# Confirm skeletor 3.x
cat moya-client-ios/node_modules/converse/skeletor/package.json | grep version
# Expect: "version": "3.0.1" (or 3.0.x)

# Confirm TOFIND markers survived into the installed dist
grep -c TOFIND moya-client-ios/node_modules/converse/headless/dist/converse-headless.esm.js
# Expect: 17

# Confirm adapter still compiles
cd moya-client-ios && npx tsc --noEmit -p tsconfig.app.json

# Confirm v13's OMEMO plugin is NOT registered (the fork edit must hold)
grep -c "converse.plugins.add('converse-omemo'" moya-client-ios/node_modules/converse/headless/dist/converse-headless.esm.js
# Expect: 0 (the v13 plugin.js was dropped from the build)
```

---

## 5. What's Disabled in This Headless Build

Reference summary — full table in `AGENTS.md` § 3.

| Feature | File | iOS reason |
|---------|------|------------|
| Chat markers | `shared/actions.js` | iOS sends manually |
| Receipt stanzas | `shared/actions.js` | iOS sends manually |
| `messages.fetched` await | `shared/model-with-messages.js` | iOS controls timing |
| MUC join presence | `plugins/muc/muc.js` | iOS controls join |
| MUC `isJoined()` ping | `plugins/muc/muc.js` | Server doesn't support ping |
| MUC invite handler | `plugins/muc/utils.js` | iOS handles manually |
| VCard get / update | `plugins/vcard/api.js` | iOS fetches manually |
| Roster subscription handler | `plugins/roster/contacts.js` | iOS prompts user |
| Disco query errors | `plugins/disco/entity.js` | Prevents crashes |
| Emoji shortname references | `plugins/emoji/utils.js` | iOS processes later |
| Ping plugin | `plugins/ping/index.js` | Server doesn't support |
| Headlines roster null check | `plugins/headlines/utils.js` | Bug fix — should be upstreamed |
| Host-meta CORS | `shared/connection/index.js` | iOS network stack quirk (likely dead code given `discover_connection_methods: false`) |
| Storage DB naming | `utils/init.js` | Multi-instance isolation |
| Multi-instance wrapper | `index.js` | Multiple accounts |
| **OMEMO plugin auto-registration** *(new for v13)* | `plugins/omemo/index.js` | iOS overlay owns the OMEMO surface; v13's plugin name collides on pluggable.js's duplicate-name throw |

---

## 6. iOS Change Inventory + Modernization Opportunities

This section is the durable, forward-looking record of every iOS-side change the v13.0.1 upgrade enables or requires, plus the performance/architecture wins on offer. Use it to plan post-swap follow-up work.

### 6.1 Mandatory changes (the swap will not work without these)

| Area | Files touched | Reason | Status |
|------|---|---|---|
| ConverseAdapter — connection seams | `xmpp/converse-boundary/converse.adapter.ts` (6 lines) | v11 removed `_converse.connection` | ✅ Landed in `moya-client-ios` `40a45d88` |
| ConverseAdapter — types | `xmpp/converse-boundary/converse.types.ts` | Mirror v13 shape (`state` substructure, `api.connection.get()` return type) | ✅ Landed across `40a45d88` + `980d8f40` |
| Adapter spec harness | `xmpp/converse-boundary/testing/fake-converse-runtime.ts` | Mirror v13 shape (`api.connection.get()` returns the connection mock) | ✅ Landed in `40a45d88` |
| OMEMO bootstrap closure | `omemo.service.ts` (state.* reads, adapter-routed clearSession + bundle.generate) | v12+ moved state to `_converse.state.*` and util functions off `_converse` | ✅ Landed in `980d8f40` |
| OMEMO models — ES6 class rewrite | `omemo/models/omemo-device.model.ts`, `omemo/models/omemo-store.model.ts` (plus their spec stubs) | Skeletor 3.x removed `.extend()` | ✅ Landed (this slice) |
| Skeletor `Storage` → `BrowserStorage` rename | Wherever `Storage` is imported from `@converse/skeletor` | Renamed in skeletor 3.0.0 | ✅ No call sites found (grep clean) |
| Converse instance `package.json` pin | `moya-client-ios/package.json:76` | Pin to `#tay/testing` until merged to `main` | ✅ Landed in `79479605` |
| Skeletor as iOS direct npm dep, pinned `3.0.1` | `moya-client-ios/package.json` + `headless/package.json` | Class identity (single `Model`/`Collection` across iOS code and headless internals) + 3.0.0 ships unusable | ✅ Landed across `980d8f40` and headless `73bf25e9` |
| Headless `build.js` externals slimmed, dist self-contained | `headless/build.js`, rebuilt dist | iOS only installs `converse` + `@converse/skeletor`; everything else bundled into the dist | ✅ Landed in headless `73bf25e9` |
| Vestigial subdirs removed | `skeletor/`, `openpromise/` at repo root | No consumer under the new pattern | ✅ Landed in headless `73bf25e9` |

**Net mandatory work — all done. The v7→v13.0.1 swap is functionally complete:**

- § 4.6 — reactions / replies / blocking / bookmarks collision audit: closed. Reactions are owned by the iOS layer (`xmpp/stanza/reactions.*` plus the chat-side services and the SQL `emoji-reactions` migration) and would have collided with v13's `converse-reactions` CORE_PLUGIN that hooks `parseMessage` / `parseMUCMessage` + 5 other lifecycle events. Resolved by adding `blacklisted_plugins: ['converse-reactions']` to iOS `converse.initialize()`. Bookmarks plugin is gated on `allow_bookmarks` which iOS already sets to `false`. Blocking plugin runs harmlessly (no iOS consumers and the plugin is disco-gated). Replies live inside `converse-chat` (CORE), no separate plugin and no iOS surface to collide with. Important: `whitelisted_plugins` does NOT exclude CORE_PLUGINS, so the existing iOS whitelist did not block any of these — the blacklist is the right mechanism (and works without the duplicate-name pluggable.js throw that forced TOFIND #17 for OMEMO, since iOS doesn't register a competing `converse-reactions` plugin).
- § 4.7 — removed-event audit: closed. Grep across all eight v8 + v11 removed events (`windowStateChanged`, `chatBoxFocused`, `chatBoxBlurred`, `bookmarkViewsInitialized`, `chatBoxInsertedIntoDOM`, `contactStatusMessageChanged`, `messageSend`, `rosterGroupsFetched`) returned zero hits in production iOS source.
- § 4.8 — direct `_converse.<setting>` reads audit: closed. Grep across the common Converse setting names returned zero hits. All setting reads already flow through `ConverseAdapter.getSetting(...)` or `api.settings.get(...)`.

See `moya-client-ios/docs/CONVERSE_V13_UPGRADE.md` for the per-section landing record.

### 6.2 Recommended modernization (do alongside the swap)

These are not blockers but the cost is low while the area is already being touched. Each unlocks future maintenance savings or perf wins.

#### 6.2.1 Retire iOS reaction port → use v13 native XEP-0444

iOS has a reaction port plan in `docs/message-reactions-port-plan.md` and `docs/message-reactions-ios.md`. v13.0.0 ships native reactions, v13.0.1 fixes the attribution bug. Switching to native:

- **Eliminates** iOS-side reaction stanza parser, reaction model, reaction UI plumbing
- **Picks up** the v13.0.1 attribution fix for free
- **Reduces** chat-side surface by ~several hundred lines (estimate from port plan size)
- **Cost:** audit existing reactions for behavioral parity (emoji set, retraction semantics, MUC support), wire iOS UI to v13 reaction events

#### 6.2.2 Retire iOS reply port → use v13 native XEP-0461

Same shape as reactions. iOS has `docs/message-forwarding-port-plan.md`. v13.0.0 ships native replies. Switching saves the iOS reply stanza work and picks up upstream parsing edge cases.

#### 6.2.3 Retire iOS contact blocking → use v11+ native XEP-0191

v11 added native XEP-0191 Blocking Command. iOS may have its own block path (audit `submodules/contact/` and the chat-side block UI). If so:

- Native handling routes through `api.contacts.block(jid)` / `api.contacts.unblock(jid)` (or whatever v13 exposes — verify in `headless/plugins/blocklist/api.js`)
- Removes manually-rolled stanza builders and roster filtering

#### 6.2.4 Retire iOS bookmark code → use v11+ native XEP-0402

v11 added native XEP-0402 bookmarks. If iOS rolls bookmark stanzas manually, switch to the native plugin (`headless/plugins/bookmarks/`).

#### 6.2.5 Retire mods #2, #7, #8, #10, #12, #16 via v13 hooks/settings

Per AGENTS.md § 4 and `MIGRATION.md` § 3 Step 12. Each one drops a TOFIND patch in favor of a stable v13 config or hook. Total: shrinks fork surface from 17 patches to ~11.

#### 6.2.6 Adopt skeletor 3.x reactive patterns

Skeletor 3.1.0 (unreleased on master) adds `subscribe()` and computed-properties APIs. Not in 3.0.1 yet but worth watching — they'd let iOS replace manual `model.on('change', …)` plumbing with `useSyncExternalStore`-compatible subscriptions, potentially simplifying chat-side state observation.

#### 6.2.7 Migrate stanza authoring from `$msg`/`$iq`/`$build` to the `stx` tagged template literal

`stx` is the v10+ tagged template literal for inline XML stanza authoring, available on `converse.env.stx` and used throughout the v13 headless source (e.g. `headless/shared/actions.js:44-52` for chat markers). The older `$msg`/`$iq`/`$pres`/`$build` builders still work in v13 and stay on `converse.env`, but `stx` is the idiomatic v13 form.

**Why it's worth doing:**

- **Readability.** Stanza shape is inline XML; no `.c().t(...).up().up().c(...)` chain to mentally unwind. Diff-friendly when adding child elements.
- **Auto-escaping.** Interpolated `${value}` is escaped where it's a text node; `Stanza.unsafeXML(...)` is the explicit opt-out for raw XML (e.g. dynamic element names).
- **XEP-spec parity.** XEP docs show XML literals; `stx` lets call sites match the spec verbatim, easier to verify.
- **Upstream alignment.** v13 internals use `stx` extensively; staying on the older builders perpetuates a divergence with no benefit. Future upstream merges land more cleanly.

**iOS surface to migrate** (all currently go through `ConverseAdapter.getBuilders(converseRoot)`):

| File | Stanzas | Effort |
|---|---|---|
| `src/app/xmpp/stanza/reactions.builder.ts` | 1 outbound reaction `<message>` | ~1 hr |
| `src/app/submodules/chat/services/xmpp/converse-plugins/omemo/helpers/omemo-stanza.helper.ts` | 2 stanzas (unencrypted fallback + OMEMO envelope) | 1–2 hr including spec updates |
| `src/app/submodules/chat/services/xmpp/converse-plugins/omemo/models/omemo-store.model.ts` | 1 PEP `<item>` for `publishBundle` | ~30 min |
| `src/app/submodules/chat/services/xmpp/converse-plugins/omemo/models/omemo-device.model.ts` | 3 IQs + 1 PEP item (`fetchBundleFromServer`, `fetchDevicesFromServer`, `publishDevices`) | ~2 hr |
| Outbound chat-side helpers (grep `$msg\|$iq\|$pres\|$build` outside the above) | TBD — audit needed | ~1 hr |

**Adapter contract impact:** add one new seam — `ConverseAdapter.getStx(root)` returning the tagged template function — and (for the dynamic-element case) `ConverseAdapter.getStanzaUnsafeXML(root)` returning `converse.env.Stanza.unsafeXML`. iOS call sites pull these from `converseRoot` deps they already receive (per the Phase 4 Slice 6 wiring), so the migration is mechanical within the existing chokepoint — no new boundary surface.

**Why this is opportunistic, not blocking:** the existing builder calls work correctly under v13. The OMEMO bundle/devicelist files are the highest-value targets because the nested `.c().c().c()` chains there are exactly where stanza-shape bugs hide; reactions and the chat-side helpers are smaller, lower-stakes call sites.

**Forward policy:** any net-new stanza-authoring code (e.g. when blocking/replies/native bookmarks land, or new chat features add stanzas) should use `stx` from day one rather than perpetuating the older idiom.

### 6.3 Performance opportunities

These are wins the v13 swap enables but doesn't deliver automatically.

#### 6.3.1 Smaller bundle via mod retirement

Every TOFIND mod retired in § 6.2.5 lets the corresponding v13 default fall through. The build skips zero code, but the iOS-side downstream code (mod-aware wrappers, fallback paths) can disappear too. Expected savings: ~5–10KB of iOS chat-side code.

#### 6.3.2 ESM-only path

v12 added ESM build, v13 keeps it. iOS's bundler (rspack via Angular) already prefers ESM. After the swap, audit imports to ensure tree-shaking kicks in — iOS bundle should shrink by whatever dead code the CJS path was dragging in. Measure with `ionic build --configuration pseudoprod --stats-json` before/after.

#### 6.3.3 IndexedDB `getAll` (already in skeletor 0.0.6+, gets faster in 3.x)

Skeletor 0.0.6 added IndexedDB `getAll` for batch fetch. Skeletor 3.x continues this. If iOS is currently doing per-key fetches anywhere, switching to `Collection.fetch()` will pick up the batch path automatically.

#### 6.3.4 XEP-0437 Room Activity Indicators (v8.0.0)

Optimization for MUC presence — server notifies on activity instead of every join/leave. iOS has its own MUC presence handling (per AGENTS.md mod #8); adopting RAI requires re-enabling parts of Converse's MUC presence flow. Verify against `headless/plugins/muc/` for the RAI implementation. Win: less stanza traffic for low-activity rooms.

#### 6.3.5 XEP-0421 Occupant IDs (v9.0.0)

Stable occupant identity across MUC sessions. Affects message correction matching (v10 already requires occupant-id match for corrections). iOS may need to surface occupant IDs in the message model.

#### 6.3.6 Reuse SCRAM keys for fast reconnect (v10.1.0)

`reuse_scram_keys` config option enables SASL fast-reconnect by reusing SCRAM-derived keys. Win: faster login, less server-side round-trip on session resume. Audit whether iOS authentication path is compatible (the credentials must persist across sessions).

#### 6.3.7 `lazy_load_vcards` (v11.0.0)

Defers vcard fetch until needed. iOS already disables auto-vcard-fetch (mod #14, #15) — so the iOS path may already achieve this. Verify whether iOS code reads vcard *as if* fetched eagerly anywhere; if so, switching to lazy-load may surface latent assumptions.

### 6.4 Architecture opportunities

#### 6.4.1 Drop `omemo.service.ts` bootstrap closure entirely (long-term)

The 378-line iOS OMEMO plugin closure exists because v12-era OMEMO didn't support the iOS use case (multi-instance, custom storage, deferred listener setup). v13 OMEMO is closer — and v14 is shipping OMEMO 2 (XEP-0420 SCE). Worth re-evaluating after the swap whether iOS can collapse onto upstream OMEMO with a thin override layer instead of the current overlay.

#### 6.4.2 Move from `@converse/skeletor` to native signals

Angular 18+ signals (used elsewhere in iOS per `moya-client-ios/CLAUDE.md` § 7.3) overlap functionally with skeletor's Model/Collection events. The chat model layer could theoretically migrate, but this is a large refactor — likely 2–4 weeks. Mention but don't schedule.

#### 6.4.3 Replace `pluggable.js` overrides with v13 hooks (already underway)

`docs/OMEMO_AND_XMPP_REFACTOR.md` Slice 7 already routed 13 listeners through `ConverseAdapter.on`. The next step is replacing the remaining `overrides:` block in `omemo.service.ts:108-114` with hook-based interception. Lower priority but reduces plugin-system surface.

### 6.5 Cross-repo change tracker

When work lands, mark off here. Keep this list current as a single source of truth.

**This repo (`moya-conversejs-ios`):**
- [x] Rename current `headless/` → `headless-v12/` (preserve as reference)
- [x] Extract v13.0.1 tarball into fresh `headless/`
- [x] Port `build.js` to v13 source tree
- [x] Re-apply 16 TOFIND mods onto v13 source
- [x] Add new TOFIND #17a (drop OMEMO plugin auto-registration)
- [x] Add TOFIND #18 (skip `emoji.json` fetch the iOS bundle doesn't ship)
- [x] Add TOFIND #19 (silence `sendIQ` timeout console noise — orphaned `TimeoutError` unhandled rejection)
- [x] `npm run build`, verify **19** TOFIND markers in dist
- [x] Update `AGENTS.md` mod table to reference v13 line numbers
- [ ] Decide reactions: native v13 vs iOS port (drop or keep)
- [ ] Decide replies: native v13 vs iOS port (drop or keep)
- [ ] Merge `tay/testing` → `main` (or pin iOS to branch)

**iOS app (`moya-client-ios`):**
- [ ] `package.json:76` pin to `#tay/testing` (interim) or wait for merge to main
- [ ] `npm install`, verify `node_modules/converse/headless/package.json` is `13.0.1` and `node_modules/converse/skeletor/package.json` is `3.0.x`
- [ ] Rewrite `ConverseAdapter` connection seams (6 lines)
- [ ] Update `ConverseLike` interface for v13 shape
- [ ] Update `fake-converse-runtime.ts` harness for v13 shape
- [ ] Rewrite OMEMO bootstrap closure for `state.*` paths and util imports
- [ ] Rewrite `OMEMOStore` as ES6 class
- [ ] Rewrite `Device`, `Devices`, `DeviceList`, `DeviceLists` as ES6 classes
- [ ] Rename `Storage` → `BrowserStorage` imports
- [ ] Audit for direct `_converse.<setting>` reads, route via `ConverseAdapter.getSetting`
- [ ] Audit for removed events (`chatBoxFocused`, `chatBoxBlurred`, `windowStateChanged`, `messageSend`, etc.)
- [ ] Reactions audit: native v13 vs iOS port
- [ ] Replies audit: native v13 vs iOS port
- [ ] Blocking audit: native XEP-0191 vs iOS impl
- [ ] Bookmark audit: native XEP-0402 vs iOS impl
- [ ] Run full spec suite + `ionic build --configuration pseudoprod`
- [ ] Manual smoke test (web mode + iOS device)

**Post-swap (optional cleanups):**
- [ ] Retire mod #2 → `send_chat_markers: []`
- [ ] Retire mod #7 → `loadEmojis` hook
- [ ] Retire mod #8 → `constructedMUCPresence` hook
- [ ] Retire mod #10 → `confirmDirectMUCInvitation` hook
- [ ] Retire mod #12 → `blacklisted_plugins: ['converse-ping']`
- [ ] Retire mod #16 → verify `discover_connection_methods: false` already handles it
- [ ] Upstream mod #11 (headlines roster null check) as PR to conversejs/converse.js
- [ ] Measure bundle size delta (`ionic build --stats-json` before/after)
- [ ] Evaluate XEP-0437 RAI adoption
- [ ] Evaluate `reuse_scram_keys` adoption
- [ ] Evaluate `lazy_load_vcards` adoption
