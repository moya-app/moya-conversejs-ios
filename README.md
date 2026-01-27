# Moya Converse.js iOS - Custom Headless Build

A custom pre-built distribution of the [Converse.js](https://conversejs.org/) headless library, specifically packaged for iOS integration via WebView/JavaScript runtime.

## Installation

### From main branch (default)

```bash
npm install github:binuadmin/moya-conversejs-ios
```

### From a specific branch

```bash
npm install github:binuadmin/moya-conversejs-ios#branch-name
```

Or in `package.json`:

```json
{
  "dependencies": {
    "converse": "github:binuadmin/moya-conversejs-ios#branch-name"
  }
}
```

### Other options

| Format | Example |
|--------|---------|
| Branch | `github:binuadmin/moya-conversejs-ios#feature/my-branch` |
| Tag | `github:binuadmin/moya-conversejs-ios#v12.0.0` |
| Commit SHA | `github:binuadmin/moya-conversejs-ios#abc1234` |

After testing a feature branch, remember to update back to the main branch before merging.

## Directory Structure

| Directory | Version | Description |
|-----------|---------|-------------|
| `headless/` | v12.0.0 | Active - Converse.js headless library with iOS-specific modifications |
| `skeletor/` | v0.0.9 | Active - Backbone-like Model/Collection library |
| `headless-old/` | v7.0.6 | Archived - Previous version with TOFIND markers |
| `skeletor-old/` | v0.0.5 | Archived - Previous skeletor version |
| `openpromise/` | - | Promise utility library |

## Usage in moya-client-ios

### TypeScript Path Mapping

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@converse/*": ["./node_modules/converse/*"]
    }
  }
}
```

### Import Examples

```typescript
// Headless library
import { converseInit } from '@converse/headless';

// Skeletor models
import { Model, Collection } from '@converse/skeletor/src/model.js';
```

## Node Modules Strategy

This repo uses a specific dependency bundling strategy:

| Directory | `node_modules/` committed? | Why? |
|-----------|---------------------------|------|
| `headless/` | No | Dependencies resolved by npm |
| `skeletor/` | Only `lit-html/` | Other deps resolved by npm |

When you run `npm install`, npm reads the `package.json` files and installs dependencies like `localforage`, `lodash-es`, etc. from the npm registry.

## iOS-Specific Modifications

The `headless/` library contains 16+ modifications for iOS integration, marked with `TOFIND` comments:

- Multi-instance support (`window.converse0`, `window.converse1`, etc.)
- Disabled auto-sending of markers, receipts, presence
- Disabled auto-fetching of vcards
- Manual handling of subscriptions and MUC invites
- Ping module disabled (server compatibility)

See [AGENTS.md](./AGENTS.md) for complete documentation of all modifications.

## Building

```bash
cd headless
npm run build
```

Output files in `headless/dist/`:
- `converse-headless.esm.js` - ES Module format
- `converse-headless.min.esm.js` - ES Module minified
- `converse-headless.js` - CommonJS format
- `converse-headless.min.js` - CommonJS minified

## Documentation

- [AGENTS.md](./AGENTS.md) - Detailed migration guide and modification mapping
- [MIGRATION.md](./MIGRATION.md) - Instructions for migrating moya-client-ios

## License

See the original [Converse.js license](https://github.com/conversejs/converse.js/blob/master/LICENSE).
