# AGENTS.md - Converse.js iOS Headless Migration Guide

This document provides context for AI agents working on migrating from the `headless` (v7.0.6) to `headless2` (v12.0.0) version of Converse.js in this iOS integration project.

## Project Overview

This repository contains a **custom pre-built distribution of the Converse.js headless library** specifically packaged for iOS integration via WebView/JavaScript runtime. The library is installed as an npm module from GitHub in the main iOS client (`moya-client-ios`).

### Directory Structure

```
moya-conversejs-ios/
├── headless/           # v7.0.6 - Current production (MODIFIED, OLD)
│   ├── dist/
│   │   └── converse-headless.min.js  # Contains TOFIND markers
│   └── ...
├── headless2/          # v12.0.0 - Target migration version (MODIFIED, NEW)
│   ├── plugins/        # Modular plugin architecture
│   ├── shared/         # Core API, connection, settings
│   ├── utils/          # Utility functions
│   ├── dist/           # Built distribution (needs rebuild)
│   ├── types/          # TypeScript type definitions
│   └── index.js        # ES module entry point
├── skeletor/           # @converse/skeletor v0.0.5 - Backbone-like MVC (OLD)
├── skeletor2/          # @converse/skeletor v3.0.0 - ES6 classes (NEW)
├── openpromise/        # @converse/openpromise - Promise utility
└── AGENTS.md           # This file
```

### Versioning Strategy

During migration, both old and new versions are kept side-by-side for validation:

| Current | Version | New | Version | Status |
|---------|---------|-----|---------|--------|
| `headless/` | v7.0.6 | `headless2/` | v12.0.0 | Modifications applied |
| `skeletor/` | v0.0.5 | `skeletor2/` | v3.0.0 | Ready for use |

**After successful testing with moya-client-ios:**
1. Remove `headless/` and `skeletor/` (old versions)
2. Rename `headless2/` → `headless/`
3. Rename `skeletor2/` → `skeletor/`
4. Update any path references in moya-client-ios if needed

## How the iOS Client Uses This Library

The `moya-client-ios` repository installs this library via npm from GitHub:
```json
"converse": "github:binuadmin/moya-conversejs-ios"
```

### TypeScript Path Mapping
```json
// tsconfig.json
"@converse/*": ["./node_modules/converse/*"]
```

### Import Pattern
```typescript
// moya-client-ios/src/.../converse-manager.service.ts
import { converseInit } from '@converse/headless';
```

### Initialization Flow

1. **Create window object**: `window[\`converse${index}\`] = {}`
2. **Call converseInit**: `converseInit(index)` - populates the window object
3. **Create ConverseInstance**: Wraps the converse object with iOS-specific handling
4. **Initialize plugins**: Custom Angular plugins are registered
5. **Call converse.initialize()**: Starts the XMPP connection

```typescript
// ConverseManagerService.createConverse()
createConverse(index: number) {
    window[`converse${index}`] = {};
    converseInit(index);
    converseArray.push(window[`converse${index}`]);
}

// ConverseManagerService.initializeConverseInstance()
converse.initialize({
    websocket_url: ServerConf.getWebsocket(hostConfig),
    allow_bookmarks: false,
    authentication: 'login',
    auto_login: true,
    auto_reconnect: true,
    allow_non_roster_messaging: true,
    discover_connection_methods: false,
    jid: username,
    password: password,
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

### Key iOS Services

| Service | Purpose |
|---------|---------|
| `ConverseManagerService` | Creates and initializes converse instances |
| `ConverseInstancesService` | Manages multiple converse instances |
| `ConversePluginsService` | Initializes custom plugins |
| `ConversejsService` | Core plugin that bridges Angular and Converse |
| `HandlerService` | XMPP stanza handlers |
| `OmemoService` | End-to-end encryption |
| `MucPluginService` | Group chat functionality |

### Event Listeners Used

The iOS client listens for these Converse events:
- `initialized` - Triggers `converseInit` awaiter
- `connected` / `reconnected` / `disconnected` - Connection state
- `chatBoxesFetched` - Chat boxes ready
- `OMEMOInitialized` - Encryption ready
- `parseChatMessage` - Incoming message parsing
- `handleMUCMessage` - Group chat messages
- `enteredNewMUC` - Joined new room
- `messageOut` - Outgoing message tracking

### API Methods Used

```typescript
// Connection
_converse.api.settings.set('auto_reconnect', false);
_converse.connection.disconnect(reason);

// Chats
_converse.api.chats.open(jid);
_converse.api.rooms.open(jid);
_converse.api.contacts.get();

// Stanzas
_converse.api.send(stanza);
_converse.api.trigger('parseChatMessage', element, attrs, {});

// Features
_converse.api.disco.own.features.add(feature);
_converse.api.emojis.initialize();

// Encryption
_converse.api.omemo.bundle.generate(all);
_converse.api.trigger('decryptPrekey', {...});
_converse.api.trigger('decryptWhisper', {...});
```

### Strophe Environment Access

```typescript
const { $iq, $build, $msg, $pres, Strophe, sizzle, utils } = converse.env;
```

---

## Critical Context: Custom Modifications

The current `headless/dist/converse-headless.min.js` has been **modified directly in the minified build** with 20+ changes. These modifications are marked with:
- `//TOFIND` - Custom code changes for iOS integration
- `//TOCHANGE` - Items needing review

### Why These Modifications Exist

The iOS client manages many XMPP features manually (presence, receipts, markers, vcards, etc.) rather than letting Converse handle them automatically. This allows:
1. **Multiple converse instances** - Support for multiple accounts/connections
2. **Native iOS control** - iOS handles UI/UX decisions, Converse is just the XMPP engine
3. **Server compatibility** - Workarounds for server limitations (ping, etc.)

---

## Complete Modification Mapping

### 1. Multi-Instance Support (CRITICAL) ✅ APPLIED

**Purpose**: Allow multiple simultaneous Converse instances (`window.converse0`, `window.converse1`, etc.)

**Old Implementation** (headless):
```javascript
// Line 5 - Wrapper function
export function converseInit(converseIndex){
  // ... entire library code ...
  
  // Line 26616 - Dynamic window assignment
  const Xu = window[`converse${converseIndex}`] || {};
}
```

**New Implementation** (headless2):
- File: Create a new wrapper file OR modify `headless2/index.js`
- The default export is `converse`, need to wrap it

**Files to modify**:
- `headless2/index.js` - Add wrapper function
- `headless2/shared/api/public.js` - Window assignment logic

---

### 2. Chat Markers - DISABLED ✅ APPLIED

**Purpose**: iOS app handles chat markers (read receipts, displayed) manually

**Old Change** (Line 27429-27430):
```javascript
sendMarker(e, t, n, r) {
  //TOFIND (Got rid of converse marker sending)
  return;
  // ... original code commented out
}
```

**New Location**: `headless2/shared/actions.js`
```javascript
// Lines 39-53
export function sendMarker(to_jid, id, type, msg_type) {
    // ADD: return; at the start
    if (!MARKER_TYPES.includes(type)) {
        log.error(`Invalid marker type: ${type}`);
        return;
    }
    // ... rest of function
}
```

---

### 3. Receipt Stanza - DISABLED ✅ APPLIED

**Purpose**: iOS app handles message receipts manually

**Old Change** (Line 27469-27470):
```javascript
sendReceiptStanza(e, t) {
  //TOFIND REMOVE DEFAULT RECEIPT CONVERSE
  return
  // ... original code
}
```

**New Location**: `headless2/shared/actions.js`
```javascript
// Lines 60-71
export function sendReceiptStanza(to_jid, id) {
    // ADD: return; at the start
    const stanza = stx`...`;
    api.send(stanza);
}
```

---

### 4. Message Fetching - BYPASSED ✅ APPLIED

**Purpose**: Skip waiting for messages.fetched promise

**Old Change** (Line 27633-27635):
```javascript
async createMessage(e, t) {
  //TOFIND COMMENTED OUT await this.messages.fetched added null;
  (e.time = e.time || new Date().toISOString()),
    null// await this.messages.fetched;
  return this.messages.create(...)
}
```

**Actual Location**: `headless2/shared/model-with-messages.js` (NOT `plugins/chat/model.js`)
```javascript
// Lines 83-87 - createMessage method in ModelWithMessages mixin
async createMessage(attrs, options) {
    attrs.time = attrs.time || new Date().toISOString();
    //TOFIND COMMENTED OUT await this.messages.fetched - iOS handles message timing manually
    // await this.messages.fetched;
    return this.messages.create(attrs, options);
}
```

**Note**: In v12, the `createMessage` method is in a shared mixin (`ModelWithMessages`) that's used by both `ChatBox` and `MUC` classes, not in the individual model files.

---

### 5. Chat.get Null Check ⏭️ SKIPPED

**Purpose**: Defensive null check on contact_jid

**Old Change** (Line 27835-27849):
```javascript
r = await zu.chats.get(
  t? t.contact_jid: null,  // Added null check
  { nickname: t.nick },
  n
);
```

**New Location**: `headless2/plugins/chat/utils.js` or `api.js`
- Find where `api.chats.get` is called with parsed message attributes
- Add null check for the contact_jid parameter

---

### 6. Disco Query Errors - SILENCED ✅ APPLIED

**Purpose**: Prevent disco query errors from being thrown (blocking queries)

**Old Change** (Line 28109-28110):
```javascript
async queryInfo() {
  let e;
  try {
    e = await zu.disco.info(this.get("jid"), null);
  } catch (e) {
    //TOFIND (BLOCKING QUERIES FROM THROWING ERRORS IN CONVERSE)
    return;
    // ... original error handling
  }
}
```

**New Location**: `headless2/plugins/disco/entity.js`
```javascript
// Lines 147-172 - queryInfo method
async queryInfo() {
    try {
        const stanza = await api.disco.info(this.get('jid'), null);
        this.onInfo(stanza);
    } catch (e) {
        // ADD: return; to silently fail
        return;
        // ... original error handling
    }
}
```

---

### 7. Emoji Shortname References - DISABLED ✅ APPLIED

**Purpose**: Skip emoji processing (handled manually later)

**Old Change** (Line 28679-28682):
```javascript
function bc(e) {
  //TOFIND
  //if (!Xu.emojis.initialized) throw new Error(...);
  //TOFIND (ADDED EMPTY ARRAY AS WE CHECK FOR EMOJIS MANUALLY LATER)
  return [];
  // ... original emoji matching code
}
```

**New Location**: `headless2/plugins/emoji/utils.js`
```javascript
// Lines 102-120 - getShortnameReferences function
export function getShortnameReferences(text) {
    // ADD: return []; at the start
    return [];
    
    if (!converse.emojis.initialized) {
        // ...
    }
    // ... rest of function
}
```

---

### 8. MUC Presence - DISABLED ✅ APPLIED

**Purpose**: iOS app handles MUC presence/join manually

**Old Change** (Line 29429-29430):
```javascript
// After MUC setup, before sending presence
//TOFIND blocked from sending converse presence
return
const n = Hc({
  from: Pu.connection.jid,
  to: this.getRoomJIDAndNick(),
})...
```

**New Location**: `headless2/plugins/muc/muc.js`
```javascript
// Lines 179-199 - join method
async join(nick, password) {
    // ADD: return this; early to prevent automatic presence sending
    // But ensure session state is still updated
    
    // Or modify constructJoinPresence (Lines 215-240) to not send
}
```

---

### 9. MUC isJoined - ALWAYS TRUE ✅ APPLIED

**Purpose**: Bypass ping check (server doesn't support it)

**Old Change** (Line 30569-30570):
```javascript
async isJoined() {
  //TOFIND Returning true(Ping doesnt work on current server)
  return true;
  console.log("calling isJoined")
  // ... original ping code
}
```

**New Location**: `headless2/plugins/muc/muc.js`
```javascript
// Lines 2055-2064 - isJoined method
async isJoined() {
    // ADD: return true; to bypass ping check
    return true;
    
    // Original implementation uses api.ping
}
```

---

### 10. MUC Direct Invitations - DISABLED ✅ APPLIED

**Purpose**: iOS app handles invites manually

**Old Change** (Line 31286-31287):
```javascript
const e = function () {
  //TOFIND RETURN SO ADDHANDLER FOR INVITES DOESNT KICK IN
  return;
  Pu.connection.addHandler(
    (e) => (Pu.onDirectMUCInvitation(e), !0),
    "jabber:x:conference",
    "message"
  );
};
```

**New Location**: `headless2/plugins/muc/utils.js`
```javascript
// Lines 58-68 - registerDirectInvitationHandler function
export function registerDirectInvitationHandler() {
    // ADD: return; to disable automatic handler registration
    return;
    
    _converse.connection.addHandler(...)
}
```

---

### 11. Headlines Roster Check - ENHANCED ✅ APPLIED

**Purpose**: Added null check for roster

**Old Change** (Line 32098-32101):
```javascript
if (
  t.includes("@") &&
  Pu.roster&&  // TOFIND Added 'Pu.Roster &&'
  !Pu.roster.get(t) &&
  !zu.settings.get("allow_non_roster_messaging")
)
```

**New Location**: `headless2/plugins/headlines/utils.js`
```javascript
// Lines 16-21 - onHeadlineMessage function
if (from_jid.includes('@') &&
        _converse.state.roster &&  // ADD null check
        !_converse.state.roster.get(from_jid) &&
        !api.settings.get("allow_non_roster_messaging")) {
    return;
}
```

---

### 12. Ping Module - COMMENTED OUT ✅ APPLIED

**Purpose**: Remove ping functionality entirely

**Old Change** (Line 32605-32612):
```javascript
//TOFIND Commented out ping module to remove
// const { Strophe: yd, $iq: bd } = Xu.env,
//   wd = Xu.env.utils;
// yd.addNamespace("PING", "urn:xmpp:ping"),
//   Xu.plugins.add("converse-ping", {
//     initialize() {
//       ...
```

**New Location**: `headless2/plugins/ping/index.js`
- Option A: Comment out the entire plugin registration
- Option B: Remove `import './plugins/ping/index.js';` from `headless2/index.js`

---

### 13. Roster Subscriptions - DISABLED ✅ APPLIED

**Purpose**: iOS app handles subscription requests manually

**Old Change** (Line 33558-33559):
```javascript
handleIncomingSubscription(t) {
  //TOFIND Return and handle subs manually
  return
  // ... original subscription handling
}
```

**New Location**: `headless2/plugins/roster/contacts.js`
```javascript
// Lines 396-422 - handleIncomingSubscription method
handleIncomingSubscription(presence) {
    // ADD: return; to disable automatic handling
    return;
    
    const dominated_jid = presence.getAttribute('from');
    // ... rest of method
}
```

---

### 14. VCard Get - DISABLED ✅ APPLIED

**Purpose**: iOS app fetches vcards manually

**Old Change** (Line 34244-34245):
```javascript
get(e, n) {
  //TOFIND Added return. Preventing converse fetching vcards
  return;
  if ("string" == typeof e) return t(Pu, e);
  // ...
}
```

**New Location**: `headless2/plugins/vcard/api.js`
```javascript
// Lines 113-155 - vcard.get method
async get(model, force) {
    // ADD: return; to disable automatic vcard fetching
    return;
    
    // ... original implementation
}
```

---

### 15. VCard Update - DISABLED ✅ APPLIED

**Purpose**: iOS app updates vcards manually

**Old Change** (Line 34259-34260):
```javascript
async update(e, t) {
  //TOFIND Added return. Preventing converse fetching vcards
  return;
  const n = await this.get(e, t);
  // ...
}
```

**New Location**: `headless2/plugins/vcard/api.js`
```javascript
// Lines 174-191 - vcard.update method
async update(model, force) {
    // ADD: return; to disable automatic vcard updates
    return;
    
    const data = await this.get(model, force);
    // ...
}
```

---

### 16. Connection CORS Mode ✅ APPLIED

**Purpose**: Add no-cors mode for host-meta discovery

**Old Change** (Line 23998-24000):
```javascript
const t = {
  //TOFIND
  mode: "no-cors",
  headers: {
    Accept: "application/xrd+xml, text/xml",
  },
};
```

**New Location**: `headless2/shared/connection/index.js`
```javascript
// Lines 84-106 - discoverConnectionMethods method
async discoverConnectionMethods(domain) {
    const options = {
        mode: "no-cors",  // ADD this
        headers: { 'Accept': 'application/xrd+xml, text/xml' },
    };
    // ...
}
```

---

### 17. Storage/DB Naming ✅ APPLIED

**Purpose**: Custom DB naming based on websocket host

**Old Change** (Line 26428-26439):
```javascript
//TOFIND Changed DB name to be set based on websocket host
// let SocketHost = Pu.settings.websocket_url.replace(/^.*\:\/\//,'')...
let DBName = "converse-persistent"; // + "_" + SocketHost;

const e = {
  name: Pu.isTestEnv()
    ? "converse-test-persistent"
    : DBName,
  storeName: Pu.bare_jid,
};
```

**Actual Location**: `headless2/utils/init.js` (NOT `utils/storage.js`)
```javascript
// Lines 126-131 - initPersistentStorage function
//TOFIND Changed DB name to be set based on websocket host for iOS multi-instance support
// let SocketHost = api.settings.get('websocket_url')?.replace(/^.*\:\/\//,'').replace(/\/.*$/,'') || '';
let DBName = "converse-persistent"; // + "_" + SocketHost;

const config = {
    name: isTestEnv() ? "converse-test-persistent" : DBName,
    storeName: store_name,
};
```

**Note**: In v12, the persistent storage initialization is in `utils/init.js`, not `utils/storage.js`. The socket host extraction is commented out but can be enabled if per-host DB isolation is needed.

---

## Implementation Strategy

### Recommended Approach

1. **Modify source files** (not the built dist) for maintainability
2. **Create a build script** that:
   - Applies all modifications
   - Bundles with webpack/rollup
   - Outputs to `dist/`
3. **Test incrementally** - Apply changes one category at a time

### Build Process

headless2 uses webpack for bundling. The build command is typically:
```bash
npm run build
# or
npx webpack
```

After modifying source files, rebuild to generate new `dist/converse-headless.min.js`.

### Multi-Instance Wrapper

For the multi-instance support, create a wrapper like:

```javascript
// headless2/wrapper.js
import converse from './index.js';

export function converseInit(converseIndex) {
    const instanceName = `converse${converseIndex}`;
    window[instanceName] = window[instanceName] || {};
    
    // Clone or create new instance
    Object.assign(window[instanceName], converse);
    
    return window[instanceName];
}
```

---

## Testing Checklist

After migration, verify:

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

---

## Skeletor Dependency (CRITICAL)

The skeletor library (`@converse/skeletor`) provides Backbone-like Model and Collection classes used throughout converse and the iOS client.

### Version Requirements

| Directory | Version | Used By | Status |
|-----------|---------|---------|--------|
| `skeletor/` | **0.0.5** | headless (v7) | OLD - keep for validation |
| `skeletor2/` | **3.0.0** | headless2 (v12) | NEW - ready for use |

**Note:** headless2 (v12) officially requires `^0.0.9`, but we've verified it's compatible with v3.0.0 since it doesn't use `.extend()` patterns.

### How moya-client-ios Uses Skeletor

```typescript
// moya-client-ios/src/.../omemo.service.ts
import { Model } from '@converse/skeletor/src/model.js';
import { Collection } from '@converse/skeletor/src/collection';

// Creates OMEMO-related models
_converse.OMEMOStore = Model.extend({...});
_converse.Device = Model.extend({...});
_converse.Devices = Collection.extend({...});
_converse.DeviceList = Model.extend({...});
_converse.DeviceLists = Collection.extend({...});
```

### Migration Impact

**v0.0.5 → v0.0.9 changes:**
- Same API surface (Model, Collection)
- Updated dependencies (lit-html ^3.2.1, lodash-es ^4.17.21)
- Added TypeScript type definitions
- Better localforage integration

**v0.0.9 → v3.0.0 (BREAKING):**
- Rewritten in TypeScript
- `Model` and `Collection` are now ES6 classes (not constructor functions)
- Removed `.extend()` method - must use `class ... extends` syntax
- Removed `Events` constructor, now `EventsEmitter` mixin

### Recommended Action: Use Skeletor v3.0.0

**Decision (January 21, 2026)**: Use **skeletor v3.0.0** for the migration.

**Rationale**:
1. **headless2 is compatible** - Verified that headless2 does NOT use `Model.extend()` or `Collection.extend()` anywhere. All `.extend()` calls in headless2 are for `api.settings.extend()` (different API) or `dayjs.extend()` (date library).
2. **Only 5 changes needed in moya-client-ios** - All in `omemo.service.ts`
3. **Better long-term benefits** - Full TypeScript, ES6 classes, better tree-shaking

### Skeletor v3.0.0 Compatibility Verification

```bash
# Search confirmed NO Model.extend() or Collection.extend() usage in headless2 (v12.0.0):
grep -r "Model\.extend\|Collection\.extend" headless2/
# Result: No files found

# All .extend() calls in headless2 are:
# - api.settings.extend() - settings API, not skeletor
# - dayjs.extend() - date library

# headless2 v12.0.0 uses ES6 class syntax throughout:
# - class ChatBox extends ModelWithVCard(ModelWithMessages(...))
# - class MUC extends ModelWithVCard(ModelWithMessages(...))
# - class RosterContacts extends Collection
# - class DiscoEntity extends Model
```

### Required Changes in moya-client-ios for Skeletor v3.0.0

**File**: `moya-client-ios/src/app/submodules/chat/services/xmpp/converse-plugins/omemo.service.ts`

**5 conversions needed** (lines 1649, 1940, 2002, 2010, 2190):

#### 1. OMEMOStore (Line 1649)

```typescript
// OLD (v0.0.5 - .extend() pattern)
_converse.OMEMOStore = Model.extend({
    Direction: {
        SENDING: 1,
        RECEIVING: 2,
    },
    getIdentityKeyPair() {
        const keypair = this.get('identity_keypair');
        return Promise.resolve({
            privKey: u.base64ToArrayBuffer(keypair.privKey),
            pubKey: u.base64ToArrayBuffer(keypair.pubKey),
        });
    },
    // ... ~30 more methods
});

// NEW (v3.0.0 - ES6 class syntax)
class OMEMOStore extends Model {
    static Direction = {
        SENDING: 1,
        RECEIVING: 2,
    };
    
    getIdentityKeyPair() {
        const keypair = this.get('identity_keypair');
        return Promise.resolve({
            privKey: u.base64ToArrayBuffer(keypair.privKey),
            pubKey: u.base64ToArrayBuffer(keypair.pubKey),
        });
    }
    // ... methods become class methods
}
_converse.OMEMOStore = OMEMOStore;
```

#### 2. Device (Line 1940)

```typescript
// OLD
_converse.Device = Model.extend({
    defaults: {
        trusted: UNDECIDED,
        active: true,
    },
    getRandomPreKey() { /* ... */ },
    async fetchBundleFromServer() { /* ... */ },
    getBundle() { /* ... */ },
});

// NEW
class Device extends Model {
    defaults() {
        return {
            trusted: UNDECIDED,
            active: true,
        };
    }
    
    getRandomPreKey() { /* ... */ }
    async fetchBundleFromServer() { /* ... */ }
    getBundle() { /* ... */ }
}
_converse.Device = Device;
```

#### 3. Devices Collection (Line 2002)

```typescript
// OLD
_converse.Devices = Collection.extend({
    model: _converse.Device,
});

// NEW
class Devices extends Collection {
    get model() {
        return _converse.Device;
    }
}
_converse.Devices = Devices;
```

#### 4. DeviceList (Line 2010)

```typescript
// OLD
_converse.DeviceList = Model.extend({
    idAttribute: 'jid',
    initialize() {
        this.devices = new _converse.Devices();
        // ...
    },
    // ... more methods
});

// NEW
class DeviceList extends Model {
    get idAttribute() {
        return 'jid';
    }
    
    initialize() {
        this.devices = new _converse.Devices();
        // ...
    }
    // ... methods become class methods
}
_converse.DeviceList = DeviceList;
```

#### 5. DeviceLists Collection (Line 2190)

```typescript
// OLD
_converse.DeviceLists = Collection.extend({
    model: _converse.DeviceList,
    getDeviceList(jid) {
        return this.get(jid) || this.create({ jid: jid });
    },
});

// NEW
class DeviceLists extends Collection {
    get model() {
        return _converse.DeviceList;
    }
    
    getDeviceList(jid) {
        return this.get(jid) || this.create({ jid: jid });
    }
}
_converse.DeviceLists = DeviceLists;
```

### Import Change Required

```typescript
// OLD (v0.0.5)
import { Model } from '@converse/skeletor/src/model.js';
import { Collection } from '@converse/skeletor/src/collection';

// NEW (v3.0.0) - unified entry point
import { Model, Collection } from '@converse/skeletor';
```

### Key Conversion Rules: .extend() to ES6 Classes

| Old Pattern (v0.0.5) | New Pattern (v3.0.0) |
|---------------------|---------------------|
| `Model.extend({...})` | `class X extends Model {...}` |
| `defaults: {...}` | `defaults() { return {...}; }` |
| `idAttribute: 'x'` | `get idAttribute() { return 'x'; }` |
| `model: SomeModel` | `get model() { return SomeModel; }` |
| `initialize() {...}` | `initialize() {...}` (same) |
| Instance methods | Class methods (same syntax) |
| Static properties | `static propName = value;` |

---

## Version Differences: v7 vs v12

| Aspect | headless (v7.0.6) | headless2 (v12.0.0) |
|--------|-------------------|---------------------|
| Structure | Flat files | Modular (plugins/, shared/, utils/) |
| TypeScript | No | Yes (full type definitions in types/) |
| Module System | CommonJS-ish | ES Modules (ESM + CJS builds) |
| Plugin Architecture | Single-file | Multi-file with index.js |
| New Plugins | - | blocklist, omemo (built-in) |
| API Changes | converse.* | api.*, _converse.state.* |
| Skeletor Version | ~0.0.5 | ^0.0.9 |
| Strophe.js Version | 1.x | 4.0.0-rc0 |
| Export Format | Single bundle | ESM (dist/converse-headless.esm.js) + CJS |

---

## Key API Changes in v12

1. **State access**: `_converse.roster` -> `_converse.state.roster`
2. **Connection**: `_converse.connection` -> `_converse.state.connection` or `api.connection.get()`
3. **Promises**: Many methods now return proper Promises
4. **Events**: Event names may have changed
5. **Stanza building**: New `stx` tagged template literal for XML stanzas (replacing `$build`/`$msg`/`$iq`)
6. **Built-in OMEMO**: OMEMO plugin is now included with Device, Devices, DeviceList, DeviceLists exports
7. **Exports**: More granular exports from index.js (ChatBox, Message, MUC, etc.)

---

## Files Quick Reference

| Modification | File Path | Line(s) |
|--------------|-----------|---------|
| Multi-instance wrapper (`converseInit`) | `headless2/index.js` | 65-77 |
| sendMarker | `headless2/shared/actions.js` | 39-42 |
| sendReceiptStanza | `headless2/shared/actions.js` | 60-63 |
| createMessage (`messages.fetched` bypass) | `headless2/shared/model-with-messages.js` | 83-87 |
| MUC join (presence disable) | `headless2/plugins/muc/muc.js` | 207-209 |
| MUC isJoined (return true) | `headless2/plugins/muc/muc.js` | 2069-2071 |
| MUC invites handler | `headless2/plugins/muc/utils.js` | 58-60 |
| VCard get | `headless2/plugins/vcard/api.js` | 113-115 |
| VCard update | `headless2/plugins/vcard/api.js` | 174-176 |
| Roster subscriptions | `headless2/plugins/roster/contacts.js` | 396-398 |
| Disco queryInfo errors | `headless2/plugins/disco/entity.js` | 157-159 |
| Emoji getShortnameReferences | `headless2/plugins/emoji/utils.js` | 102-104 |
| Ping module | `headless2/plugins/ping/index.js` | 19-34 |
| Connection CORS | `headless2/shared/connection/index.js` | 86-88 |
| Storage/DB naming | `headless2/utils/init.js` | 126-131 |
| Headlines roster check | `headless2/plugins/headlines/utils.js` | 17-21 |

---

## Original TOFIND Locations in headless v7

For reference, here are the exact line numbers in `headless/dist/converse-headless.min.js`:

| Line | Marker | Description |
|------|--------|-------------|
| 1 | Header | `//CHANGES MARKED WITH TOFIND` |
| 2 | Header | `//TOCHANGE marks things that need reviewing` |
| 5 | TOFIND | `export function converseInit(converseIndex)` wrapper |
| 22936 | TOFIND | Emoji initialize removed to force parseMessage trigger |
| 23998 | TOFIND | CORS `mode: "no-cors"` for host-meta fetch |
| 26428 | TOFIND | DB name based on websocket host |
| 26615 | TOFIND | Multiple converse objects via `window[converse${converseIndex}]` |
| 27429 | TOFIND | Disabled marker sending |
| 27469 | TOFIND | Disabled receipt stanza |
| 27633 | TOFIND | Commented out `await this.messages.fetched` |
| 27835 | TOFIND | Null check on `t.contact_jid` |
| 28109 | TOFIND | Blocking disco query errors |
| 28679 | TOFIND | Emoji shortname check disabled |
| 28681 | TOFIND | Return empty array for emoji references |
| 29429 | TOFIND | Blocked MUC presence sending |
| 30569 | TOFIND | `isJoined()` returns true (ping bypass) |
| 31286 | TOFIND | Disabled MUC invite handler |
| 32098 | TOFIND | Added `Pu.roster &&` null check |
| 32605 | TOFIND | Commented out ping module |
| 33558 | TOFIND | Disabled subscription handling |
| 33734 | TOCHANGE | Storage creation (needs review) |
| 34244 | TOFIND | Disabled vcard.get |
| 34259 | TOFIND | Disabled vcard.update |

---

## Potential Improvements for moya-client-ios

Migrating to headless2 (v12) offers several opportunities to improve the iOS client integration:

### 1. Tagged Template Literals for Stanzas (`stx`)

**Current approach** (v7 with `$build`, `$msg`, `$iq`):
```typescript
// moya-client-ios/stanza.service.ts
const stanza = $iq({type: 'get', to: jid})
    .c('query', {xmlns: 'jabber:iq:roster'})
    .up()
    .c('item', {jid: contactJid});
```

**New approach** (v12 with `stx`):
```typescript
const { stx, Strophe } = converse.env;
const stanza = stx`
    <iq type="get" to="${jid}" xmlns="jabber:client">
        <query xmlns="${Strophe.NS.ROSTER}">
            <item jid="${contactJid}"/>
        </query>
    </iq>`;
```

**Benefits**: More readable, type-safe string interpolation, proper XML escaping built-in.

---

### 2. New Blocklist Plugin (XEP-0191)

v12 includes a built-in blocklist plugin that could replace manual blocking implementation:

```typescript
// Block a user
await api.blocklist.add(['user@domain.com']);

// Unblock a user  
await api.blocklist.remove(['user@domain.com']);

// Get blocked list
const blocklist = await api.blocklist.get();
```

**Benefits**: Server-synced blocking, automatic subscription rejection for blocked users, push notifications for blocklist changes.

---

### 3. TypeScript Type Definitions

headless2 includes `.d.ts` type definition files for all major components:

```
headless2/types/
├── shared/
│   ├── api/types.d.ts
│   ├── types.d.ts
│   └── ...
├── plugins/
│   ├── muc/types.d.ts
│   ├── roster/types.d.ts
│   └── ...
└── utils/types.d.ts
```

**Benefits**: Better IDE autocomplete, compile-time error checking, easier refactoring in Angular/TypeScript codebase.

---

### 4. Improved Connection API

**Current** (v7):
```typescript
_converse.connection.disconnect(reason);
```

**New** (v12):
```typescript
// Cleaner API namespace
api.connection.disconnect();
api.connection.reconnect();
api.connection.connected();  // boolean
api.connection.authenticated();  // boolean
api.connection.get();  // get connection object
api.connection.destroy();  // full cleanup
```

**Benefits**: More explicit API, better connection state management.

---

### 5. Better Error Handling with Typed Errors

v12 introduces specific error classes:

```typescript
import { TimeoutError, StanzaError } from '@converse/headless';

try {
    await api.sendIQ(stanza, timeout);
} catch (e) {
    if (e instanceof TimeoutError) {
        // Handle timeout specifically
    }
}
```

Available error types: `TimeoutError`, `StanzaError`, `NotImplementedError`, etc.

---

### 6. Hooks System for Data Interception

v12 has a powerful hooks system for intercepting and modifying data:

```typescript
// Intercept and modify message before sending
api.listen.on('createMessageStanza', (chat, {message, stanza}) => {
    // Modify stanza before it's sent
    return { message, stanza: modifiedStanza };
});

// Intercept parsed message attributes
api.listen.on('parseMessage', (stanza, attrs) => {
    // Modify parsed attributes
    return { ...attrs, custom_field: 'value' };
});
```

**Benefits**: Cleaner way to customize behavior without patching core code.

---

### 7. Smaller Bundle Size

| Version | Bundle Size |
|---------|-------------|
| headless v7 | ~1.1 MB (minified) |
| headless2 v12 | ~650 KB (minified) |

**~40% smaller bundle** = faster app startup on iOS.

---

### 8. Synchronous Events Support

v12 allows synchronous event handling:

```typescript
// Wait for all handlers to complete before continuing
await api.trigger('customEvent', data, { synchronous: true });
```

**Benefits**: Better control over event flow, especially for encryption/decryption workflows.

---

### 9. Native ES Modules

v12 uses standard ES modules which enables:
- Tree-shaking (remove unused code)
- Better code splitting
- Modern bundler compatibility

---

### 10. Recommended Migration Steps for moya-client-ios

1. **Phase 1**: Update imports to use new API paths
   ```typescript
   // Old
   import { converseInit } from '@converse/headless';
   
   // New (after wrapper is created)
   import { converseInit } from '@converse/headless2';
   ```

2. **Phase 2**: Replace `$build`/`$msg`/`$iq` with `stx` template literals

3. **Phase 3**: Update connection handling to use `api.connection.*`

4. **Phase 4**: Add TypeScript types for better IDE support

5. **Phase 5**: Consider using blocklist plugin instead of manual implementation

6. **Phase 6**: Leverage hooks for OMEMO encryption instead of patching

---

## Contact & History

This migration guide was created on January 20, 2026, based on analysis of:
- `headless/dist/converse-headless.min.js` (modified v7.0.6)
- `headless2/` source files (stock v12.0.0)
- `moya-client-ios/` TypeScript/Angular source files

The original TOFIND modifications were made to support the Moya iOS client's specific XMPP integration requirements.

### Update History

**January 22, 2026 (Session 2) - MODIFICATIONS & BUILD**:

**Phase 1 Complete**: All 16 iOS-specific modifications applied to headless2 source files.

**Phase 2 In Progress**: Build setup and dist generation.
- Created `build.js` using esbuild (no build script existed in original package)
- Added esbuild as devDependency
- Resolved missing externals (lit, hsluv)
- Converted TOFIND comments to legal comment format (`/*! TOFIND */`) to preserve in bundled output
- Added `legalComments: 'inline'` to build options
- Added `skeletor2/` directory with skeletor v3.0.0

**Key discoveries during implementation:**
- `createMessage` with `messages.fetched` is in `shared/model-with-messages.js`, NOT `plugins/chat/model.js`
- Storage/DB naming is in `utils/init.js`, NOT `utils/storage.js`
- The "Chat.get Null Check" (original mod #5) was not found/needed in v12
- Ping module import still exists in `index.js` but plugin code is commented out
- esbuild strips all non-legal comments by default - had to convert `//TOFIND` to `/*! TOFIND */`

**January 22, 2026**:
- Updated documentation for headless2 v12.0.0 (was v11.0.1)
- Added Strophe.js version info (now 4.0.0-rc0)
- Documented new built-in OMEMO plugin exports (Device, Devices, DeviceList, DeviceLists)
- Added stx tagged template literal documentation for stanza building
- Updated exports information (ESM + CJS dual builds)

**January 21, 2026**:
- Verified headless2 compatibility with skeletor v3.0.0 (no `Model.extend()` or `Collection.extend()` usage)
- Decided to use skeletor v3.0.0 for migration
- Documented all 5 required `.extend()` to ES6 class conversions in `omemo.service.ts`
- Added detailed conversion examples and import change instructions

---

## Migration Progress

### Status: Phase 2 In Progress 🔄

- ✅ Phase 1: All iOS-specific modifications applied to headless2 source files
- 🔄 Phase 2: Building dist files with esbuild

### Applied Modifications Summary

| # | Modification | File | Status |
|---|--------------|------|--------|
| 1 | Multi-instance wrapper (`converseInit`) | `index.js` | ✅ Applied |
| 2 | Disable `sendMarker()` | `shared/actions.js` | ✅ Applied |
| 3 | Disable `sendReceiptStanza()` | `shared/actions.js` | ✅ Applied |
| 4 | Bypass `messages.fetched` in `createMessage()` | `shared/model-with-messages.js` | ✅ Applied |
| 5 | Chat.get null check | N/A | ⏭️ Skipped (not found in v12) |
| 6 | Silence disco query errors | `plugins/disco/entity.js` | ✅ Applied |
| 7 | Return `[]` from `getShortnameReferences()` | `plugins/emoji/utils.js` | ✅ Applied |
| 8 | Disable MUC auto-join presence | `plugins/muc/muc.js` | ✅ Applied |
| 9 | `isJoined()` returns `true` | `plugins/muc/muc.js` | ✅ Applied |
| 10 | Disable MUC invite handler | `plugins/muc/utils.js` | ✅ Applied |
| 11 | Headlines roster null check | `plugins/headlines/utils.js` | ✅ Applied |
| 12 | Comment out ping plugin | `plugins/ping/index.js` | ✅ Applied |
| 13 | Disable subscription handling | `plugins/roster/contacts.js` | ✅ Applied |
| 14 | Disable `vcard.get()` | `plugins/vcard/api.js` | ✅ Applied |
| 15 | Disable `vcard.update()` | `plugins/vcard/api.js` | ✅ Applied |
| 16 | CORS mode `'no-cors'` | `shared/connection/index.js` | ✅ Applied |
| 17 | Custom DB naming | `utils/init.js` | ✅ Applied |

### Next Steps

1. **Rebuild headless2** - Run build to generate new dist files
   ```bash
   cd headless2 && npm run build
   ```

2. **skeletor2 ready** - `skeletor2/` directory contains v3.0.0 ✅
   - No action needed here, ready for use

3. **Test in moya-client-ios**
   - Update package.json to point to headless2 and skeletor2
   - Run through testing checklist below

4. **Update moya-client-ios omemo.service.ts** (required for skeletor v3.0.0)
   - Convert 5 `.extend()` patterns to ES6 classes (see examples below)

5. **After successful testing**
   - Remove old directories (`headless/`, `skeletor/`)
   - Rename: `headless2/` → `headless/`, `skeletor2/` → `skeletor/`

### Issues Found During Implementation

#### 1. File Location Corrections

The original documentation had some incorrect file paths:

| Modification | Originally Documented | Actual Location |
|--------------|----------------------|-----------------|
| `createMessage` bypass | `plugins/chat/model.js` | `shared/model-with-messages.js` |
| Storage/DB naming | `utils/storage.js` | `utils/init.js` |

#### 2. Chat.get Null Check Not Found

The original v7 modification #5 (null check on `contact_jid` in `api.chats.get()`) was not found in the v12 codebase. The code structure has changed significantly. This may need investigation if issues arise during testing.

#### 3. Ping Module Import Still Present

The ping plugin code in `plugins/ping/index.js` has been commented out, but the import statement in `index.js` still exists:
```javascript
import './plugins/ping/index.js'; // XEP-0199 XMPP Ping
```

This import will still execute the file (which now only adds the namespace). For a cleaner solution, consider:
- Option A: Comment out the import in `index.js`
- Option B: Leave as-is (minimal impact since plugin registration is commented out)

#### 4. MUC Join Early Return Position

The `return;` statement in `join()` method was placed after the nickname validation but before `api.send()`. This means:
- ✅ Session state is updated (`ROOMSTATUS.CONNECTING`)
- ✅ Disco info is refreshed
- ✅ Nickname is persisted
- ❌ Join presence is NOT sent (as intended)

If issues arise, the return position may need adjustment.

### Build Process Setup

#### Build Script Created

headless2 originally had no build script (dist was pre-built from main converse.js repo). A custom build script was created using esbuild:

**File**: `headless2/build.js`
**Command**: `npm run build`

#### Dependencies Added

```json
// headless2/package.json devDependencies
"esbuild": "^0.27.2"
```

#### Build Issues Encountered

1. **Missing external dependencies**: Initial build failed due to unresolved imports. Added to externals:
   - `lit`, `lit/*` - UI library used in some components
   - `hsluv` - Color library

2. **TOFIND comments stripped by esbuild**: esbuild strips all non-legal comments by default, even without minification.

   **Solution**: Convert `//TOFIND` comments to legal comment format:
   ```javascript
   // Before (stripped by esbuild)
   //TOFIND some comment

   // After (preserved by esbuild)
   /*! TOFIND */ // some comment
   ```

   All 16 TOFIND markers were converted using:
   ```bash
   # Step 1: Convert to legal comment start
   find . -name "*.js" -not -path "./node_modules/*" -not -path "./dist/*" \
     -exec sed -i '' 's|//TOFIND|/*!TOFIND|g' {} \;

   # Step 2: Fix format to properly close legal comment
   find . -name "*.js" -not -path "./node_modules/*" -not -path "./dist/*" \
     -exec sed -i '' 's|/\*!TOFIND|/*! TOFIND */ //|g' {} \;
   ```

3. **legalComments option**: Added `legalComments: 'inline'` to build options to ensure legal comments are preserved in output.

#### Build Output

The build creates 4 files in `headless2/dist/`:
- `converse-headless.esm.js` - ESM format (with TOFIND comments)
- `converse-headless.min.esm.js` - ESM minified (comments stripped)
- `converse-headless.js` - CJS format (with TOFIND comments)
- `converse-headless.min.js` - CJS minified (comments stripped)

### Verification Commands

After rebuilding, verify modifications with:

```bash
# Check all TOFIND markers are present in source files
grep -r "TOFIND" headless2/ --include="*.js" | grep -v node_modules | grep -v dist

# Expected output: 16 files with TOFIND comments

# Check TOFIND markers in built ESM file
grep -c "TOFIND" headless2/dist/converse-headless.esm.js

# Expected output: 16 (one per modification)
```
