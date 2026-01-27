# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains a **custom pre-built distribution of the Converse.js headless library** specifically packaged for iOS integration via WebView/JavaScript runtime. It is installed as an npm module from GitHub in the main iOS client (`moya-client-ios`).

### Directory Structure

```
moya-conversejs-ios/
├── headless/           # v12.0.0 - Active production
│   ├── plugins/        # Modular plugin architecture (22 plugins)
│   ├── shared/         # Core API, connection, settings
│   ├── utils/          # Utility functions
│   ├── dist/           # Built distribution (ESM + CJS)
│   └── types/          # TypeScript type definitions
├── headless-old/       # v7.0.6 - Archived (MODIFIED with //TOFIND markers)
├── skeletor/           # @converse/skeletor v0.0.9 - Backbone-like MVC
├── skeletor-old/       # @converse/skeletor v0.0.5 - Archived
├── openpromise/        # @converse/openpromise v0.0.1
└── AGENTS.md           # Comprehensive migration guide (READ THIS FIRST)
```

## Commands

### Testing (headless)
```bash
cd headless && npm test
```
Runs Jasmine tests via Karma in Chrome.

### Type Generation (headless)
```bash
cd headless && npm run types
```
Generates TypeScript definitions to `types/` directory.

## How the iOS Client Uses This Library

### Installation & Imports
```json
// moya-client-ios package.json
"converse": "github:binuadmin/moya-conversejs-ios"

// tsconfig.json path mapping
"@converse/*": ["./node_modules/converse/*"]
```

```typescript
// Import pattern
import { converseInit } from '@converse/headless';
```

### Initialization Flow
1. Create window object: `window[`converse${index}`] = {}`
2. Call `converseInit(index)` - populates the window object
3. Create ConverseInstance with iOS-specific handling
4. Register custom Angular plugins
5. Call `converse.initialize()` with config

### Strophe Environment Access
```typescript
const { $iq, $build, $msg, $pres, Strophe, sizzle, utils } = converse.env;
```

### Key Events Listened For
`initialized`, `connected`, `reconnected`, `disconnected`, `chatBoxesFetched`, `OMEMOInitialized`, `parseChatMessage`, `handleMUCMessage`, `enteredNewMUC`, `messageOut`

## Architecture

### Multi-Instance Support
The iOS client requires multiple simultaneous Converse instances (`window.converse0`, `window.converse1`, etc.) for multi-account support. Implemented via wrapper function `converseInit(converseIndex)`.

### Why Custom Modifications Exist
The iOS client manages XMPP features manually rather than letting Converse handle them automatically:
1. **Multiple converse instances** - Support for multiple accounts/connections
2. **Native iOS control** - iOS handles UI/UX decisions, Converse is just the XMPP engine
3. **Server compatibility** - Workarounds for server limitations (ping, etc.)

### Modification Summary (17 changes marked with //TOFIND)
| Category | What's Disabled | v12 File Location |
|----------|----------------|-------------------|
| Chat markers | Auto-sending read receipts | `shared/actions.js` |
| Receipt stanza | Auto-sending message receipts | `shared/actions.js` |
| Message fetching | `await this.messages.fetched` | `plugins/chat/model.js` |
| MUC presence | Auto-join presence | `plugins/muc/muc.js` |
| MUC isJoined | Ping check (returns true) | `plugins/muc/muc.js` |
| MUC invites | Auto invite handler | `plugins/muc/utils.js` |
| VCard get/update | Auto-fetching vcards | `plugins/vcard/api.js` |
| Roster subscriptions | Auto subscription handling | `plugins/roster/contacts.js` |
| Disco queries | Error throwing | `plugins/disco/entity.js` |
| Emoji shortnames | Processing (returns []) | `plugins/emoji/utils.js` |
| Ping module | Entire module | `plugins/ping/index.js` |
| Headlines roster | Added null check | `plugins/headlines/utils.js` |
| Connection CORS | Added `mode: "no-cors"` | `shared/connection/index.js` |
| Storage/DB naming | Custom DB name | `utils/storage.js` |

### Key API Changes in v12
- **State access**: `_converse.roster` → `_converse.state.roster`
- **Connection**: `_converse.connection` → `api.connection.get()`
- **Stanza building**: New `stx` tagged template literal (replaces `$build`/`$msg`/`$iq`)
- **Built-in OMEMO**: Device, Devices, DeviceList, DeviceLists now exported

### Skeletor Dependency
Current `skeletor/` is v0.0.9 and matches headless requirements (^0.0.9). `skeletor-old/` is v0.0.5 and archived; no `.extend()` refactors are required.

## Testing Checklist (Post-Migration)
- [ ] Multiple converse instances can be created
- [ ] Markers are NOT auto-sent
- [ ] Receipts are NOT auto-sent
- [ ] MUC presence is NOT auto-sent on join
- [ ] VCards are NOT auto-fetched
- [ ] Subscription requests are NOT auto-handled
- [ ] MUC invites are NOT auto-handled
- [ ] Ping module is disabled/removed
- [ ] Disco query errors don't crash the app
- [ ] Emoji processing doesn't block message handling
- [ ] Headlines work with missing roster

## Important Notes

- **Always read `AGENTS.md` first** when working on migration tasks - it contains exact line numbers, code examples, and detailed implementation guidance for all 17 modifications
- The iOS client is in a separate repo (`moya-client-ios`)
- Pre-built distribution means changes should modify source files and rebuild, not edit minified code
- headless uses ES modules; headless-old v7 uses CommonJS-ish bundled output
