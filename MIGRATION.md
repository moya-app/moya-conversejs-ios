# MIGRATION.md - moya-client-ios Integration Guide

This document provides step-by-step instructions for integrating the updated headless2 (v12.0.0) and skeletor2 (v3.0.0) into moya-client-ios.

## Prerequisites

- headless2 build completed with all 16 modifications (Phase 2 complete)
- skeletor2 directory ready with v3.0.0

---

## Step 1: Update tsconfig.json Path Mappings

**File:** `moya-client-ios/tsconfig.json`

The current mapping (lines 32-34):
```json
"@converse/*": [
  "./node_modules/converse/*"
]
```

### Option A: Test with headless2/skeletor2 names (recommended for initial testing)

No change needed to tsconfig.json. Instead, temporarily rename directories in moya-conversejs-ios:
```bash
# In moya-conversejs-ios repo
mv headless headless-old
mv headless2 headless
mv skeletor skeletor-old
mv skeletor2 skeletor
```

Then reinstall in moya-client-ios:
```bash
npm install
```

### Option B: Keep both versions during testing

Update tsconfig.json to point to the new directories:
```json
"@converse/headless": ["./node_modules/converse/headless2"],
"@converse/headless/*": ["./node_modules/converse/headless2/*"],
"@converse/skeletor": ["./node_modules/converse/skeletor2"],
"@converse/skeletor/*": ["./node_modules/converse/skeletor2/*"]
```

---

## Step 2: Update Skeletor Imports

**File:** `src/app/submodules/chat/services/xmpp/converse-plugins/omemo.service.ts`

**Lines 20-21 - Change from:**
```typescript
import { Model } from '@converse/skeletor/src/model.js';
import { Collection } from '@converse/skeletor/src/collection';
```

**To:**
```typescript
import { Model, Collection } from '@converse/skeletor';
```

---

## Step 3: Convert .extend() Patterns to ES6 Classes

**File:** `src/app/submodules/chat/services/xmpp/converse-plugins/omemo.service.ts`

Skeletor v3.0.0 removed the `.extend()` method. You must convert 5 patterns to ES6 classes.

### 3.1 OMEMOStore (Line 1649)

**BEFORE:**
```typescript
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
    getLocalRegistrationId() {
        return Promise.resolve(parseInt(this.get('device_id'), 10));
    },
    isTrustedIdentity(identifier, identity_key, direction) {
        // ... method body
    },
    loadIdentityKey(identifier) {
        // ... method body
    },
    saveIdentity(identifier, identity_key) {
        // ... method body
    },
    getPreKeys() {
        return this.get('prekeys') || {};
    },
    loadPreKey(key_id) {
        // ... method body
    },
    storePreKey(key_id, key_pair) {
        // ... method body
    },
    removePreKey(key_id) {
        // ... method body
    },
    loadSignedPreKey(keyId) {
        // ... method body
    },
    storeSignedPreKey(spk) {
        // ... method body
    },
    // ... more methods
});
```

**AFTER:**
```typescript
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

    getLocalRegistrationId() {
        return Promise.resolve(parseInt(this.get('device_id'), 10));
    }

    isTrustedIdentity(identifier, identity_key, direction) {
        // ... method body (same, just remove trailing comma)
    }

    loadIdentityKey(identifier) {
        // ... method body
    }

    saveIdentity(identifier, identity_key) {
        // ... method body
    }

    getPreKeys() {
        return this.get('prekeys') || {};
    }

    loadPreKey(key_id) {
        // ... method body
    }

    storePreKey(key_id, key_pair) {
        // ... method body
    }

    removePreKey(key_id) {
        // ... method body
    }

    loadSignedPreKey(keyId) {
        // ... method body
    }

    storeSignedPreKey(spk) {
        // ... method body
    }

    // ... convert all other methods (remove commas between methods)
}
_converse.OMEMOStore = OMEMOStore;
```

### 3.2 Device (Line 1940)

**BEFORE:**
```typescript
_converse.Device = Model.extend({
    defaults: {
        trusted: UNDECIDED,
        active: true,
    },
    getRandomPreKey() {
        const bundle = this.get('bundle');
        return bundle.prekeys[u.getRandomInt(bundle.prekeys.length)];
    },
    async fetchBundleFromServer() {
        // ... method body
    },
    getBundle() {
        // ... method body
    },
});
```

**AFTER:**
```typescript
class Device extends Model {
    defaults() {
        return {
            trusted: UNDECIDED,
            active: true,
        };
    }

    getRandomPreKey() {
        const bundle = this.get('bundle');
        return bundle.prekeys[u.getRandomInt(bundle.prekeys.length)];
    }

    async fetchBundleFromServer() {
        // ... method body
    }

    getBundle() {
        // ... method body
    }
}
_converse.Device = Device;
```

### 3.3 Devices Collection (Line 2002)

**BEFORE:**
```typescript
_converse.Devices = Collection.extend({
    model: _converse.Device,
});
```

**AFTER:**
```typescript
class Devices extends Collection {
    get model() {
        return _converse.Device;
    }
}
_converse.Devices = Devices;
```

### 3.4 DeviceList (Line 2010)

**BEFORE:**
```typescript
_converse.DeviceList = Model.extend({
    idAttribute: 'jid',
    initialize() {
        this.devices = new _converse.Devices();
        const id = `converse.devicelist-${_converse.bare_jid}-${this.get('jid')}`;
        this.devices.browserStorage = _converse.createStore(id);
        this.fetchDevices();
    },
    async onDevicesFound(collection) {
        // ... method body
    },
    // ... more methods
});
```

**AFTER:**
```typescript
class DeviceList extends Model {
    get idAttribute() {
        return 'jid';
    }

    initialize() {
        this.devices = new _converse.Devices();
        const id = `converse.devicelist-${_converse.bare_jid}-${this.get('jid')}`;
        this.devices.browserStorage = _converse.createStore(id);
        this.fetchDevices();
    }

    async onDevicesFound(collection) {
        // ... method body
    }

    // ... convert all other methods
}
_converse.DeviceList = DeviceList;
```

### 3.5 DeviceLists Collection (Line 2190)

**BEFORE:**
```typescript
_converse.DeviceLists = Collection.extend({
    model: _converse.DeviceList,
    getDeviceList(jid) {
        return this.get(jid) || this.create({ jid: jid });
    },
});
```

**AFTER:**
```typescript
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

---

## Step 4: Update Connection API Usage

The v12 API changes how connection is accessed. Here are all locations that need updating:

### 4.1 converse-instance.ts

**File:** `src/app/submodules/chat/classes/converse-instance.ts`

**Line 64:**
```typescript
// BEFORE
await this._converse.connection.disconnect(reason);

// AFTER - Option A (if api is available)
await this._converse.api.connection.disconnect();

// AFTER - Option B (keep direct access, should still work)
const connection = this._converse.api.connection.get();
await connection.disconnect(reason);
```

**Line 110:**
```typescript
// BEFORE
this._converse.connection.disconnect(reason);

// AFTER
this._converse.api.connection.disconnect();
```

### 4.2 converse-manager.service.ts

**File:** `src/app/submodules/chat/services/xmpp/converse-manager.service.ts`

**Line 60:**
```typescript
// BEFORE
instance._converse.connection._proto._disconnect();

// AFTER - This is accessing internal Strophe protocol, may need testing
const connection = instance._converse.api.connection.get();
connection._proto._disconnect();
```

### 4.3 handler.service.ts

**File:** `src/app/submodules/chat/services/xmpp/converse-plugins/handler.service.ts`

**Line 38:**
```typescript
// BEFORE
_converse.connection.xmlInput = function (body: Element) {

// AFTER
const connection = _converse.api.connection.get();
connection.xmlInput = function (body: Element) {
```

**Line 50:**
```typescript
// BEFORE
_converse.connection.xmlOutput = function (body) {

// AFTER
const connection = _converse.api.connection.get();
connection.xmlOutput = function (body) {
```

### 4.4 omemo.service.ts

**File:** `src/app/submodules/chat/services/xmpp/converse-plugins/omemo.service.ts`

**Lines 1561 and 1594:**
```typescript
// BEFORE
from: _converse.connection.jid,

// AFTER
from: _converse.api.connection.get().jid,
```

---

## Step 5: Conversion Rules Quick Reference

| Old Pattern (v0.0.5) | New Pattern (v3.0.0) |
|---------------------|---------------------|
| `Model.extend({...})` | `class X extends Model {...}` |
| `Collection.extend({...})` | `class X extends Collection {...}` |
| `defaults: {...}` | `defaults() { return {...}; }` |
| `idAttribute: 'x'` | `get idAttribute() { return 'x'; }` |
| `model: SomeModel` | `get model() { return SomeModel; }` |
| `method() {...},` | `method() {...}` (no trailing comma) |
| `_converse.connection` | `_converse.api.connection.get()` |
| `_converse.roster` | `_converse.state.roster` |

---

## Step 6: Testing Checklist

After making the changes, verify:

### Build & Startup
- [ ] App builds without TypeScript errors
- [ ] No runtime import errors
- [ ] Multiple converse instances can be created (`window.converse0`, etc.)

### Connection
- [ ] Connection establishes successfully
- [ ] Reconnection works after disconnect
- [ ] `forceDisconnect()` works

### Disabled Features (should NOT happen automatically)
- [ ] Chat markers are NOT auto-sent by Converse
- [ ] Message receipts are NOT auto-sent by Converse
- [ ] MUC join presence is NOT auto-sent by Converse
- [ ] VCards are NOT auto-fetched by Converse
- [ ] Roster subscription requests are NOT auto-handled
- [ ] MUC invites are NOT auto-handled

### Core Functionality
- [ ] Messages send correctly
- [ ] Messages receive correctly
- [ ] Group chats (MUC) work
- [ ] OMEMO encryption works
- [ ] OMEMO decryption works

---

## Step 7: After Successful Testing

In the `moya-conversejs-ios` repository, clean up:

```bash
# Remove old directories
rm -rf headless-old/   # or headless/ if you used Option B
rm -rf skeletor-old/   # or skeletor/ if you used Option B

# If using Option B, rename:
mv headless2/ headless/
mv skeletor2/ skeletor/
```

Commit the changes.

---

## Files Changed Summary

| Repository | File | Line(s) | Change |
|------------|------|---------|--------|
| moya-client-ios | `tsconfig.json` | 32-34 | Update paths (if using Option B) |
| moya-client-ios | `omemo.service.ts` | 20-21 | Update skeletor imports |
| moya-client-ios | `omemo.service.ts` | 1649 | Convert OMEMOStore to ES6 class |
| moya-client-ios | `omemo.service.ts` | 1940 | Convert Device to ES6 class |
| moya-client-ios | `omemo.service.ts` | 2002 | Convert Devices to ES6 class |
| moya-client-ios | `omemo.service.ts` | 2010 | Convert DeviceList to ES6 class |
| moya-client-ios | `omemo.service.ts` | 2190 | Convert DeviceLists to ES6 class |
| moya-client-ios | `omemo.service.ts` | 1561, 1594 | Update `_converse.connection.jid` |
| moya-client-ios | `converse-instance.ts` | 64, 110 | Update connection.disconnect() |
| moya-client-ios | `converse-manager.service.ts` | 60 | Update connection._proto access |
| moya-client-ios | `handler.service.ts` | 38, 50 | Update connection.xmlInput/Output |

---

## Troubleshooting

### Build Errors

**Error:** `Cannot find module '@converse/skeletor'`
- Ensure tsconfig.json paths are correct
- Run `npm install` to refresh node_modules
- Check that skeletor2 has a proper package.json with main entry

**Error:** `Model.extend is not a function`
- You have skeletor v3.0.0 but haven't converted `.extend()` to ES6 classes
- Check all 5 locations in omemo.service.ts

**Error:** `Property 'extend' does not exist on type 'typeof Model'`
- Same as above - convert to ES6 class syntax

### Runtime Errors

**Error:** `_converse.connection is undefined`
- Update to `_converse.api.connection.get()`
- Make sure you're checking after connection is established

**Error:** `Cannot read property 'jid' of undefined`
- Connection not established yet
- Use `await instance.until('connected')` before accessing

**Error:** `this.get is not a function` in OMEMOStore
- Class not extending Model properly
- Check the class definition syntax

### OMEMO Issues

**Error:** `_converse.OMEMOStore is not a constructor`
- Class definition syntax error
- Ensure `_converse.OMEMOStore = OMEMOStore;` is after class definition

**Error:** Encryption/decryption fails
- Check that all OMEMO classes converted correctly
- Verify `defaults()` returns object (not a property)

---

## What's Disabled in headless2

For reference, these features are disabled via early `return;` statements:

| Feature | File | Why Disabled |
|---------|------|--------------|
| Chat markers | `shared/actions.js` | iOS sends manually |
| Message receipts | `shared/actions.js` | iOS sends manually |
| MUC join presence | `plugins/muc/muc.js` | iOS controls join |
| VCard get/update | `plugins/vcard/api.js` | iOS fetches manually |
| Roster subscriptions | `plugins/roster/contacts.js` | iOS handles manually |
| MUC invites | `plugins/muc/utils.js` | iOS handles manually |
| Ping module | `plugins/ping/index.js` | Server doesn't support |
| Disco errors | `plugins/disco/entity.js` | Prevents crashes |
| Emoji processing | `plugins/emoji/utils.js` | iOS processes later |

---

*Created: January 23, 2026*
*For: moya-conversejs-ios headless v7→v12 migration*
