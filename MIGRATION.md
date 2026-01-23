# MIGRATION.md - moya-client-ios Integration Guide

This document provides step-by-step instructions for integrating the updated headless2 (v12.0.0) and skeletor2 (v3.0.0) into moya-client-ios.

## Prerequisites

- headless2 build completed with all 16 modifications (Phase 2 complete)
- skeletor2 directory ready with v3.0.0

---

## Step 1: Update Package Path Mappings

### Option A: Test with headless2/skeletor2 names (recommended for initial testing)

In `moya-client-ios/tsconfig.json`, update the path mappings:

```json
{
  "compilerOptions": {
    "paths": {
      "@converse/headless": ["./node_modules/converse/headless2"],
      "@converse/headless/*": ["./node_modules/converse/headless2/*"],
      "@converse/skeletor": ["./node_modules/converse/skeletor2"],
      "@converse/skeletor/*": ["./node_modules/converse/skeletor2/*"]
    }
  }
}
```

### Option B: After successful testing (rename directories first)

After testing succeeds, in moya-conversejs-ios:
1. Remove `headless/` and `skeletor/`
2. Rename `headless2/` → `headless/`
3. Rename `skeletor2/` → `skeletor/`

Then path mappings can remain as:
```json
{
  "compilerOptions": {
    "paths": {
      "@converse/headless": ["./node_modules/converse/headless"],
      "@converse/headless/*": ["./node_modules/converse/headless/*"],
      "@converse/skeletor": ["./node_modules/converse/skeletor"],
      "@converse/skeletor/*": ["./node_modules/converse/skeletor/*"]
    }
  }
}
```

---

## Step 2: Update Skeletor Imports

The import path changes for skeletor v3.0.0:

```typescript
// OLD (v0.0.5)
import { Model } from '@converse/skeletor/src/model.js';
import { Collection } from '@converse/skeletor/src/collection';

// NEW (v3.0.0) - unified entry point
import { Model, Collection } from '@converse/skeletor';
```

---

## Step 3: Convert .extend() Patterns to ES6 Classes

**File**: `moya-client-ios/src/app/submodules/chat/services/xmpp/converse-plugins/omemo.service.ts`

Skeletor v3.0.0 removed the `.extend()` method. You must convert 5 patterns to ES6 classes.

### 3.1 OMEMOStore (around line 1649)

```typescript
// OLD
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
    // ... more methods
});

// NEW
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

    // ... convert all other methods (remove commas, keep method bodies)
}
_converse.OMEMOStore = OMEMOStore;
```

### 3.2 Device (around line 1940)

```typescript
// OLD
_converse.Device = Model.extend({
    defaults: {
        trusted: UNDECIDED,
        active: true,
    },
    getRandomPreKey() {
        // method body
    },
    async fetchBundleFromServer() {
        // method body
    },
    getBundle() {
        // method body
    },
});

// NEW
class Device extends Model {
    defaults() {
        return {
            trusted: UNDECIDED,
            active: true,
        };
    }

    getRandomPreKey() {
        // method body
    }

    async fetchBundleFromServer() {
        // method body
    }

    getBundle() {
        // method body
    }
}
_converse.Device = Device;
```

### 3.3 Devices Collection (around line 2002)

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

### 3.4 DeviceList (around line 2010)

```typescript
// OLD
_converse.DeviceList = Model.extend({
    idAttribute: 'jid',
    initialize() {
        this.devices = new _converse.Devices();
        // ... more initialization
    },
    async getOwnDeviceId() {
        // method body
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
        // ... more initialization
    }

    async getOwnDeviceId() {
        // method body
    }

    // ... convert all other methods
}
_converse.DeviceList = DeviceList;
```

### 3.5 DeviceLists Collection (around line 2190)

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

---

## Conversion Rules Reference

| Old Pattern (v0.0.5) | New Pattern (v3.0.0) |
|---------------------|---------------------|
| `Model.extend({...})` | `class X extends Model {...}` |
| `Collection.extend({...})` | `class X extends Collection {...}` |
| `defaults: {...}` | `defaults() { return {...}; }` |
| `idAttribute: 'x'` | `get idAttribute() { return 'x'; }` |
| `model: SomeModel` | `get model() { return SomeModel; }` |
| `initialize() {...},` | `initialize() {...}` (no comma) |
| `methodName() {...},` | `methodName() {...}` (no comma) |
| Static properties in object | `static propName = value;` |

---

## Step 4: API Changes (v7 → v12)

### State Access

```typescript
// OLD (v7)
_converse.roster
_converse.connection

// NEW (v12)
_converse.state.roster
api.connection.get()
```

### Connection API

```typescript
// OLD
_converse.connection.disconnect(reason);

// NEW
api.connection.disconnect();
api.connection.reconnect();
api.connection.connected();  // boolean
api.connection.get();        // get connection object
```

### Stanza Building (Optional Improvement)

v12 introduces `stx` tagged template literals as an alternative to `$build`/`$msg`/`$iq`:

```typescript
// OLD (still works)
const { $iq, $msg, Strophe } = converse.env;
const stanza = $iq({type: 'get', to: jid})
    .c('query', {xmlns: 'jabber:iq:roster'});

// NEW (optional, more readable)
const { stx, Strophe } = converse.env;
const stanza = stx`
    <iq type="get" to="${jid}" xmlns="jabber:client">
        <query xmlns="${Strophe.NS.ROSTER}"/>
    </iq>`;
```

**Note**: The old `$iq`, `$msg`, `$pres`, `$build` helpers still work in v12.

---

## Step 5: Testing Checklist

After making the changes, verify:

- [ ] App builds without TypeScript errors
- [ ] Multiple converse instances can be created (`window.converse0`, `window.converse1`, etc.)
- [ ] Connection establishes successfully
- [ ] Chat markers are NOT auto-sent by Converse
- [ ] Message receipts are NOT auto-sent by Converse
- [ ] MUC join presence is NOT auto-sent by Converse
- [ ] VCards are NOT auto-fetched by Converse
- [ ] Roster subscription requests are NOT auto-handled by Converse
- [ ] MUC invites are NOT auto-handled by Converse
- [ ] Disco query errors don't crash the app
- [ ] Emoji processing doesn't block message handling
- [ ] Headlines work with missing roster
- [ ] OMEMO encryption/decryption works
- [ ] Messages send and receive correctly
- [ ] Group chats work correctly

---

## Step 6: After Successful Testing

In the `moya-conversejs-ios` repository:

```bash
# Remove old directories
rm -rf headless/
rm -rf skeletor/

# Rename new directories
mv headless2/ headless/
mv skeletor2/ skeletor/
```

Then update tsconfig.json paths back to standard names (if using Option A from Step 1).

---

## Troubleshooting

### Build Errors

**Error**: `Cannot find module '@converse/skeletor'`
- Ensure tsconfig.json paths are updated correctly
- Run `npm install` to refresh node_modules

**Error**: `Model.extend is not a function`
- You haven't converted all `.extend()` patterns to ES6 classes
- Check omemo.service.ts for remaining `.extend()` calls

### Runtime Errors

**Error**: `_converse.roster is undefined`
- Update to `_converse.state.roster`

**Error**: `_converse.connection is undefined`
- Update to `api.connection.get()`

**Error**: Messages not being created
- The `createMessage` modification bypasses `messages.fetched`
- This is intentional for iOS timing control

### OMEMO Issues

**Error**: `_converse.OMEMOStore is not a constructor`
- Ensure the class is properly defined and assigned to `_converse.OMEMOStore`

**Error**: `this.get is not a function` in OMEMOStore methods
- Make sure class extends `Model` properly
- Check that `super()` is called in constructor if you added one

---

## Files Changed Summary

| Repository | File | Changes |
|------------|------|---------|
| moya-client-ios | `tsconfig.json` | Update @converse/* path mappings |
| moya-client-ios | `omemo.service.ts` | Convert 5 `.extend()` to ES6 classes, update imports |
| moya-client-ios | Various services | Update `_converse.roster` → `_converse.state.roster` if used |
| moya-client-ios | Various services | Update `_converse.connection` → `api.connection.get()` if used |

---

## Quick Reference: What's Disabled in headless2

These features are disabled via early `return;` statements (iOS handles them manually):

| Feature | Why Disabled |
|---------|--------------|
| Chat markers (read receipts) | iOS sends manually |
| Message receipts | iOS sends manually |
| MUC auto-join presence | iOS controls join flow |
| VCard fetching | iOS fetches manually |
| VCard updates | iOS updates manually |
| Roster subscriptions | iOS handles manually |
| MUC invite handler | iOS handles manually |
| Ping module | Server doesn't support |
| Disco error throwing | Prevents crashes |
| Emoji shortname processing | iOS processes later |

---

*Created: January 23, 2026*
*For: moya-conversejs-ios headless v7→v12 migration*
