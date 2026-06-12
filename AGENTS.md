# AGENTS.md — Converse.js iOS Headless Reference

Deep reference for AI agents and engineers working on the customised `@converse/headless` build that ships into the Moya iOS client. Read this **before** changing anything under `headless/`, `skeletor/`, or the build pipeline.

For top-level orientation, see `CLAUDE.md`. For the iOS-side swap-in checklist and the full v7→v13.0.1 breaking-changes tracker, see `MIGRATION.md`.

**Active target: v13.0.1** (retarget from in-flight v12.0.0). The 16 modifications below were verified against v12 source; line numbers and most file paths still apply to v13 but require re-verification when re-applying onto the v13 tree. A 17th mod (drop OMEMO plugin auto-registration) is added for v13. The "v12 Idiomatic Alternatives" analysis in § 4 still applies to v13 unchanged.

---

## 1. Project Overview

This repository is a GitHub-installable npm package that bundles three sibling libraries used by `moya-client-ios`:

- `headless/` — `@converse/headless` (currently v12.0.0, **target v13.0.1**) with 16 iOS-specific source modifications (17 under v13)
- `skeletor/` — `@converse/skeletor` v0.0.9 (peer-dep match for v12; **v13 requires v3.0.x**)
- `openpromise/` — `@converse/openpromise` v0.0.1

The iOS app installs the whole repo via `"converse": "github:binuadmin/moya-conversejs-ios"` and uses `tsconfig.json` path-mapping (`"@converse/*": ["./node_modules/converse/*"]`) so imports resolve against the bundled subdirectories.

```
moya-conversejs-ios/
├── headless/                 # v12.0.0 — active, iOS-modified
│   ├── index.js              # Entry: exports + converseInit wrapper
│   ├── build.js              # esbuild script (preserves TOFIND legal comments)
│   ├── plugins/              # chat, muc, omemo, roster, vcard, disco, ping, emoji, headlines, …
│   ├── shared/               # api, connection, model-with-messages, actions
│   ├── utils/                # init, storage
│   ├── dist/                 # ESM + CJS bundles (.min and unminified)
│   └── types/                # TS .d.ts declarations
├── headless-old/             # v7.0.6 — archived reference
├── skeletor/                 # v0.0.9 — active
├── skeletor-old/             # v0.0.5 — archived reference
└── openpromise/              # v0.0.1
```

---

## 2. How the iOS Client Uses This Library

### Initialization

```typescript
// Wrapped converse import
import { converseInit } from '@converse/headless';

// 1. Allocate a per-instance window slot
window[`converse${index}`] = {};

// 2. Populate that slot with a fresh Converse instance
converseInit(index);

// 3. Drive lifecycle through ConverseInstance (iOS wrapper class)
//    which talks to the runtime via ConverseAdapter
//    (see moya-client-ios/src/app/xmpp/converse-boundary/converse.adapter.ts)
converse.initialize({
    websocket_url: …,
    allow_bookmarks: false,
    authentication: 'login',
    auto_login: true,
    auto_reconnect: true,
    allow_non_roster_messaging: true,
    discover_connection_methods: false,   // skips host-meta fetch entirely
    jid, password,
    persistent_store: 'IndexedDB',
    whitelisted_plugins: [
        'conversejs-angular-service',
        'muc-handler',
        'converse-omemo',
        'headless-example',
        'overridden-chat',
        'handler-plugin',
    ],
});
```

### Why a multi-instance wrapper

The iOS app supports multiple simultaneous accounts. Standard Converse is a singleton; the `converseInit(index)` wrapper rewires the library so each call populates `window.converse${index}` with an isolated copy.

### Strophe environment access

```typescript
const { $iq, $build, $msg, $pres, Strophe, sizzle, utils, stx } = converse.env;
```

`stx` (added in v10+) is a tagged template literal for inline XML stanza authoring — a modern alternative to chained `$build()` calls. iOS-side stanza builders currently use `$build`/`$msg`/`$iq`; `stx` is available if a future refactor wants it.

### Key events the iOS client listens for

`initialized`, `connected`, `reconnected`, `disconnected`, `chatBoxesFetched`, `OMEMOInitialized`, `parseChatMessage`, `handleMUCMessage`, `enteredNewMUC`, `messageOut`

---

## 3. The 16 iOS-Specific Modifications

Every modification is flagged in source with `/*! TOFIND */` (legal-comment form so esbuild preserves it). The custom `build.js` verifies 16 TOFIND markers survive into `dist/converse-headless.esm.js` after each build.

### Why these modifications exist

The iOS client treats Converse as a passive XMPP engine. iOS owns:
- All UI/UX decisions (no auto-rendered alerts, modals, toolbars)
- Outgoing presence, receipts, markers (sent manually with iOS context)
- Vcard fetching and caching (iOS has its own avatar/profile stack)
- Roster subscription decisions (iOS prompts the user)
- Emoji processing (iOS uses Twemoji + native picker)
- Multi-instance isolation (each account is a separate Converse runtime)

### Modification table

| # | What | File | Approx line | Effect |
|---|------|------|-------------|--------|
| 1 | Multi-instance wrapper | `headless/index.js` | 65 | Wraps the export so `converseInit(i)` populates `window.converse${i}` |
| 2 | Disable `sendMarker` | `headless/shared/actions.js` | 40 | Early `return;` — iOS sends XEP-0333 markers itself |
| 3 | Disable `sendReceiptStanza` | `headless/shared/actions.js` | 63 | Early `return;` — iOS sends XEP-0184 receipts itself |
| 4 | Bypass `messages.fetched` | `headless/shared/model-with-messages.js` | 85 | Skip `await this.messages.fetched` so iOS controls timing |
| 6 | Silence disco query errors | `headless/plugins/disco/entity.js` | 158 | `catch` returns silently instead of throwing |
| 7 | Return `[]` from `getShortnameReferences` | `headless/plugins/emoji/utils.js` | 103 | iOS resolves emoji shortnames later |
| 8 | Disable MUC join presence | `headless/plugins/muc/muc.js` | 208 | Skip `api.send(presence)` inside `join()` |
| 9 | `isJoined()` always returns `true` | `headless/plugins/muc/muc.js` | 2072 | Server doesn't support the ping check |
| 10 | Disable direct MUC invite handler | `headless/plugins/muc/utils.js` | 59 | Early `return;` in `registerDirectInvitationHandler` |
| 11 | Headlines roster null check | `headless/plugins/headlines/utils.js` | 17 | Added `_converse.state.roster &&` guard |
| 12 | Disable ping plugin registration | `headless/plugins/ping/index.js` | 19 | Plugin body commented out |
| 13 | Disable `handleIncomingSubscription` | `headless/plugins/roster/contacts.js` | 397 | Early `return;` — iOS prompts user |
| 14 | Disable `vcard.get` | `headless/plugins/vcard/api.js` | 114 | iOS fetches vcards over its own pipeline |
| 15 | Disable `vcard.update` | `headless/plugins/vcard/api.js` | 177 | Same |
| 16 | Connection `mode: 'no-cors'` | `headless/shared/connection/index.js` | 87 | XEP-0156 host-meta fetch uses `no-cors` |
| 17 | Custom DB naming | `headless/utils/init.js` | 126 | DB name stable for multi-instance isolation |

(Mod #5 in the original v7 plan — "Chat.get null check" — was intentionally skipped because the v12 code structure doesn't expose the same hot path.)

### Verification commands

```bash
# Source: 16 markers across 13 files
grep -rln "TOFIND" headless/ --include="*.js" | grep -vE "node_modules|dist"

# Dist: 16 markers preserved
grep -c "TOFIND" headless/dist/converse-headless.esm.js
```

---

## 4. v12 Idiomatic Alternatives to Some Modifications

Web research and v12 source inspection reveal that several iOS modifications could be replaced by **plain configuration or public hooks** instead of source patches. Worth folding into the next swap pass to shrink the patch surface.

| # | Current patch | v12 alternative |
|---|---------------|-----------------|
| 2 | Disable `sendMarker` | **Setting:** `send_chat_markers: []` (default is `['received', 'displayed', 'acknowledged']`). Gating already lives in `plugins/muc/muc.js:275`. Patch becomes unnecessary if `[]` is passed at init. |
| 7 | Return `[]` from `getShortnameReferences` | **Hook:** `api.listen.on('loadEmojis', () => ({}))` returns an empty emoji map. Or set `emoji_categories` / `emoji_image_path` to no-op values. Likely cleaner than source patch. |
| 8 | Disable MUC join presence | **Hook:** `constructedMUCPresence` (verified at `headless/plugins/muc/muc.js:253`) — handler can mutate or null-out the presence before send. Removes the `return;` patch. |
| 10 | Disable direct MUC invite handler | **Hook:** `confirmDirectMUCInvitation` (verified at `headless/plugins/muc/utils.js:151`) — handler returns `false` to cancel. Removes the patch. |
| 12 | Comment out ping plugin | **Setting:** `blacklisted_plugins: ['converse-ping']` (verified at `headless/utils/init.js:37`). Removes the patch entirely. |
| 16 | `mode: 'no-cors'` on host-meta | **Setting:** `discover_connection_methods: false` skips `discoverConnectionMethods()` altogether (iOS already passes this). The patched code path likely never executes in production — verify and drop. |

These remain as **source patches** because v12 has no clean public alternative:

| # | Patch | Why no idiomatic alternative |
|---|-------|------------------------------|
| 1 | Multi-instance wrapper | Converse is singleton-shaped; multi-instance isolation requires wrapping the export. |
| 3 | Disable `sendReceiptStanza` | Receipt sending is hardcoded inside `handleReceipt` at `headless/shared/model-with-messages.js:906`, no setting gate. Could be hooked via `parseMessage` to strip `is_valid_receipt_request`, but that's not strictly cleaner. |
| 4 | Bypass `messages.fetched` | Internal lifecycle, no hook. |
| 6 | Silence disco errors | Internal try/catch — would need a new error-handling hook upstream. |
| 9 | MUC `isJoined()` ping bypass | No setting for "skip ping check". Could be upstreamed. |
| 11 | Headlines roster null check | This is a **bug fix** — should be upstreamed as a PR rather than carried as a fork patch. |
| 13 | Disable roster subscription handling | Internal handler, no hook. |
| 14/15 | Disable vcard get/update | No `auto_fetch_vcards` setting in v12. Could be upstreamed. |
| 17 | Custom DB naming | Internal storage initialization, no setting. |

### Recommended path

When the v12 swap actually lands in the iOS app, do the adapter rewrite first, then **opportunistically replace** patches #2, #7, #8, #10, #12, #16 with settings/hooks at the iOS `converse.initialize()` call site. That shrinks the fork from 16 patches to ~10, which makes future Converse upgrades cheaper.

---

## 5. Skeletor Dependency

`@converse/skeletor` provides Backbone-like `Model` and `Collection` classes. v12 declares `^0.0.9` as its peer dep.

| Directory | Version | Used by | Status |
|-----------|---------|---------|--------|
| `skeletor/` | 0.0.9 | headless v12 | Active |
| `skeletor-old/` | 0.0.5 | headless-old v7 | Archived |

**v0.0.9 keeps the `.extend()` API.** The iOS OMEMO models in `submodules/chat/services/xmpp/converse-plugins/omemo/models/{omemo-store,omemo-device}.model.ts` still use `Model.extend({...})` / `Collection.extend({...})` and continue to work as-is. Earlier migration drafts that called for ES6-class refactors were based on a never-adopted skeletor v3.0.0 plan; ignore that guidance.

---

## 6. Node Modules Strategy

The repo is consumed as an npm-installable GitHub package. Each subdirectory has its own `package.json`.

| Directory | `node_modules/` committed | `package-lock.json` | Notes |
|-----------|---------------------------|---------------------|-------|
| `headless/` | No | Yes | npm resolves deps at install time |
| `skeletor/` | Only `lit-html/` | No | `lit-html` bundled for predictable shipping; other deps resolved by npm |
| `headless-old/` | No | Yes | Same pattern, archived |
| `skeletor-old/` | Only `lit-html/` | No | Same pattern, archived |

Skeletor's declared deps (`lodash-es`, `mergebounce`, `localforage`, `localforage-driver-memory`, `localforage-setitems`, `@converse/localforage-getitems`) are NOT committed — `npm install` on the consuming app pulls them. `localforage` is mandatory because skeletor's `Storage` class needs it for IndexedDB persistence (chat history, OMEMO keys, etc.).

### Updating bundled `lit-html`

```bash
cd skeletor
rm -rf node_modules
npm install --production lit-html@^3.2.1
# Verify only lit-html is in node_modules
rm -f package-lock.json node_modules/.package-lock.json
```

Do not run a full `npm install` in `skeletor/` — it pulls devDependencies into committed `node_modules/`.

---

## 7. v7 vs v12 Snapshot

| Aspect | v7.0.6 | v12.0.0 |
|--------|--------|---------|
| Structure | Flat files | Modular: `plugins/`, `shared/`, `utils/` |
| TypeScript | None | Full `.d.ts` declarations |
| Modules | CommonJS-ish bundle | ESM (`*.esm.js`) + CJS dual build |
| Plugin shape | Single-file plugins | Multi-file plugins with `index.js` |
| New plugins | — | `blocklist` (XEP-0191), built-in OMEMO with Device/Devices/DeviceList/DeviceLists exports |
| Strophe.js | 1.x | 4.0.0-rc0 |
| State access | `_converse.<prop>` | `_converse.state.<prop>` (roster, chatboxes, profile, …) |
| Connection | `_converse.connection` | `api.connection.get()` |
| Settings | Direct property read | `api.settings.get(key)` |
| Stanza building | `$build` / `$msg` / `$iq` | Plus new `stx` tagged template literal |
| Settings extension | `api.settings.update` | `api.settings.extend` (`update` removed in v11) |
| Modal API | Class | Custom-element name |
| `Strophe.shims` | Present | Removed in v12 — use globals |
| Bundle size | ~1.1 MB minified | ~650 KB minified |

### Notable breaking changes per major version

- **v8.0.0** — Connection moved off `_converse`; `BootstrapModal` → `BaseModal`; many events removed (`windowStateChanged`, `chatBoxFocused`, `chatBoxBlurred`, `messageSend`, …); `default_state` removed.
- **v9.0.0** — Settings moved off `_converse` (use `api.settings.get/set`); IndexedDB default; many APIs became Promises (`api.chats.*`, `api.rooms.*`); view-related APIs removed; `chatBoxOpened` renamed to `chatBoxViewInitialized`; carbons always on.
- **v10.0.0** — `converse-carbons` merged into `converse-chat`; `allow_chat_pending_contacts` removed; bookmark UI changed; MUC corrections gated on XEP-0421 occupant ID.
- **v11.0.0** — `mobile` view mode removed (use `fullscreen`); `autocomplete_add_contact` removed; deprecated `api.settings.update` removed; XEP-0191 (blocking) and XEP-0402 (bookmarks) added.
- **v12.0.0** — `Strophe.shims` removed; webpack → rspack; ESM build outputs added; OMEMO plugin fixes.

Sources: GitHub release notes for v8–v12; `headless/` source inspection.

---

## 8. Build Pipeline

`headless/build.js` is a custom esbuild script (no original build script existed in the upstream `@converse/headless` package — it was historically built from the parent `conversejs/converse.js` repo).

```bash
cd headless
npm run build
```

Produces in `headless/dist/`:
- `converse-headless.esm.js` (unminified, with TOFIND legal comments)
- `converse-headless.min.esm.js` (minified, comments stripped)
- `converse-headless.js` (CJS, unminified)
- `converse-headless.min.js` (CJS, minified)

### Build constraints

- Externals: `lit`, `lit/*`, `hsluv` (loaded by the iOS app, not bundled here)
- `legalComments: 'inline'` preserves `/*! ... */` comments — required for the TOFIND markers
- All custom modifications **must** use `/*! TOFIND */ // …` form. Ordinary `//TOFIND` comments are stripped by esbuild even at zero minification.

### Verification

```bash
# Source: expect 16 markers in 13 files
grep -rln "TOFIND" headless/ --include="*.js" | grep -vE "node_modules|dist" | wc -l

# Dist: expect exactly 16
grep -c "TOFIND" headless/dist/converse-headless.esm.js
```

---

## 9. iOS Integration Boundary

The iOS app has consolidated all raw Converse access behind a single adapter. **Read this section before changing any modification — the adapter shape constrains what's safe.**

### `ConverseAdapter` (moya-client-ios)

Path: `src/app/xmpp/converse-boundary/converse.adapter.ts`

A static class exposing ~42 narrow methods. Every `_converse.*`, `instance.connection.*`, `converse.env.*`, `api.*` access in the iOS codebase routes through one of these methods. The adapter is the **only file that needs editing** when bumping Converse major versions.

Key seams (each currently uses v7-era paths and will need v12 swap):

| Method | Current (v7) path | v12 path |
|--------|-------------------|----------|
| `disconnect(instance, reason)` | `instance.connection.disconnect(reason)` | `api.connection.disconnect()` |
| `forceDisconnect(instance)` | `instance.connection._proto._disconnect()` | `api.connection.get()._proto._disconnect()` (internal — verify) |
| `setXmlInput/Output(instance, fn)` | `instance.connection.xmlInput = fn` | `api.connection.get().xmlInput = fn` |
| `getConnectionJid(instance)` | `instance.connection.jid` | `api.connection.get().jid` |
| `addStanzaHandler(instance, …)` | `instance.connection.addHandler(…)` | `api.connection.get().addHandler(…)` |
| `getDevicelists(instance)` | `instance.devicelists` | Verify if v12 OMEMO moves this onto `state` |
| `getOmemoStore(instance)` | `instance.omemo_store` | Same — verify |
| `getBareJid(instance)` | `instance.bare_jid` | Likely `instance.state.bare_jid` |
| `getResource(instance)` | `instance.resource` | Likely `instance.state.resource` |
| `getChatTypes(instance)` | `instance.CHATROOMS_TYPE` / `PRIVATE_CHAT_TYPE` | Recent v12 work ("Start work on removing constants from `_converse` object") suggests these have moved. Need source check before swap. |

### OMEMO file layout (moya-client-ios)

OMEMO is split across these folders:

```
src/app/submodules/chat/services/xmpp/converse-plugins/omemo/
├── types/         omemo.types.ts
├── models/        omemo-store.model.ts, omemo-device.model.ts  (still use Model.extend)
├── helpers/       omemo-crypto.helper.ts, omemo-stanza.helper.ts,
│                  omemo-message-attrs.helper.ts, omemo-log.helper.ts
├── services/      omemo-session.service.ts, omemo-decrypt.service.ts,
│                  omemo-pep.service.ts
└── overrides/     omemo-chatbox-mixin.helper.ts,
                   omemo-encrypted-overrides.helper.ts,
                   omemo-ui.helper.ts
```

Every file in this tree reaches Converse internals **only** through `ConverseAdapter`. Zero raw `_converse.*`, `converse.env.*`, `Strophe.NS.*`, or bare `sizzle(...)` calls. The `converse-plugins/omemo.service.ts` plugin-bootstrap closure retains a handful of direct writes (Strophe namespace registration, `_converse.OMEMOStore = …` model installation, ChatBox prototype mixin) — these are intentional install seams, not migration debt.

### v12 hooks the iOS app could leverage

These hooks (verified to exist in `headless/`) replace common monkey-patching patterns. They're the cleanest path for new customisations:

- `parseMessage` — `headless/plugins/chat/parsers.js:166` — modify parsed message attrs
- `parseMUCMessage` — `headless/plugins/muc/parsers.js:332`
- `parseMUCPresence` — `headless/plugins/muc/parsers.js:444`
- `getOutgoingMessageAttributes` — `headless/plugins/chat/model.js:232`, `headless/plugins/muc/muc.js:1177`, `headless/plugins/muc/occupant.js:201`
- `constructedMUCPresence` — `headless/plugins/muc/muc.js:253` — pre-send MUC presence shaping
- `confirmDirectMUCInvitation` — `headless/plugins/muc/utils.js:151` — gate invite acceptance
- `getNicknameForMUC` — `headless/plugins/muc/muc.js:1716`
- `constructedPresence` — `headless/plugins/status/profile.js:116` — pre-send own presence
- `createMessageStanza` — `headless/shared/model-with-messages.js:969` — final outbound stanza shaping
- `loadEmojis` — `headless/plugins/emoji/api.js:50`
- `beforeFileUpload` / `afterFileUploaded` — `headless/shared/model-with-messages.js`
- `getErrorAttributesForMessage`, `parseErrorStanza` — error shaping
- `beforeFetchLoginCredentials`, `beforeAttemptNonPreboundSession`, `login` — auth flow
- `shouldDestroyOnClose` — chatbox lifecycle

Register with `api.listen.on(hookName, handler)`. The handler return value is the new payload — chain-style customisation, no prototype patching needed.

---

## 10. Common Pitfalls

- **TOFIND comments stripped by esbuild.** All custom mods must use `/*! TOFIND */ // <description>` legal-comment form. Plain `//TOFIND` will be silently removed by esbuild.
- **Don't touch `dist/` by hand.** Always edit `headless/<path>.js` and re-run `npm run build`. The build verifies marker count.
- **OMEMO models use `.extend()` deliberately.** Skeletor v0.0.9 supports it. Don't refactor to ES6 classes — that effort was based on a never-adopted skeletor v3.0.0 plan.
- **`tay/testing` ≠ `main` on the GitHub remote.** Until the v12 work is merged or the iOS `package.json` pins `#tay/testing`, `npm install` pulls v7 from `binuadmin/moya-conversejs-ios#main`. Confirm by checking `moya-client-ios/node_modules/converse/headless/package.json` after install.
- **Don't "fix" disabled features.** Markers, receipts, presence, vcards, invites, subscriptions are disabled **by design** — iOS owns those flows.
- **MUC OMEMO is intentionally non-functional** in the iOS plugin (`parseMUCEncryptedMessage` is a tombstone). Don't activate it during refactors.

---

## 11. References

- v12 source: `headless/` in this repo
- v7 source: `headless-old/` (archived reference)
- iOS app: `/Users/taylorvanderwesthuizen/Documents/GitHub/moya-client-ios`
- iOS adapter: `moya-client-ios/src/app/xmpp/converse-boundary/converse.adapter.ts`
- iOS OMEMO refactor plan: `moya-client-ios/docs/OMEMO_AND_XMPP_REFACTOR.md`
- Upstream releases: https://github.com/conversejs/converse.js/releases
- Plugin development: https://conversejs.org/docs/html/plugin_development.html
- v12 docs: https://conversejs.org/docs/html/index.html
