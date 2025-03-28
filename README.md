# Converse.js Webworker Compatibility

This project provides webworker compatibility for Converse.js, allowing it to run in a WebWorker context rather than just the main browser thread.

## Overview

The scripts in this directory add WebWorker support for Converse.js by implementing browser DOM APIs that are not natively available in a WebWorker context. This primarily involves adding XML parsing support and other DOM-related functionality.

## Why Run Converse.js in a WebWorker?

Running Converse.js in a WebWorker offers several benefits:

- **Performance**: Offloading XMPP processing to a background thread keeps the main UI thread responsive
- **Resource isolation**: Separate memory space for the XMPP client
- **Background processing**: Continue XMPP operations even when the UI is not in focus

## Files in the WebWorker Utility Directory

### Key Components

- **webworker-compatibility.js** - Entry point that bootstraps the DOM environment in the worker
- **element.js** - Implements DOM Element functionality
- **document.js** - Provides document object implementation
- **dom-parser.js** - Adds XML parsing capabilities
- **xmlw3cdom.js** - W3C DOM implementation for XML processing
- **xmlsax.js** - SAX parser for XML processing
- **serializer.js** - XML serialization utilities
- **storage.js** - localStorage and sessionStorage implementations

## How It Works

The implementation creates mock versions of browser DOM APIs that are missing in the WebWorker context:

1. When initializing Converse.js in a worker, first import the built `converse-headless-worker.min.js`
2. This module sets up the worker environment by loading necessary dependencies
3. It creates polyfills for DOM objects, XML parsing, and storage
4. Once the environment is ready, Converse.js is loaded and initialized

## Build and Run Scripts

The project includes npm scripts to build and run the WebWorker compatibility layer:

- **build:headless:worker**: Builds both the headless Converse.js library and the WebWorker compatibility layer, bundling everything into a single file
  ```bash
  npm run build:headless:worker
  ```

- **start:headless**: Starts a Python HTTP server to serve the demo (must be run after building)
  ```bash
  npm run start:headless
  ```
  Note: This requires Python to be installed and will serve from the project root to ensure access to all required files.

## Usage Example

### Setting up the Worker

```javascript
// In your main thread code
const worker = new Worker('path/to/worker.js');

// Send configuration to initialize
worker.postMessage({
  type: 'init',
  config: {
    jid: 'user@example.com',
    password: 'password',
    // other converse config...
  }
});

// Listen for messages from the worker
worker.onmessage = function(e) {
  console.log('Message from worker:', e.data);
};
```

### Inside the worker

```javascript
// Import the bundled worker code


// Initialize Converse with the WebWorker compatibility layer
async function init(configObject) {
  try {
    const {prepare} = await import('path/to/converse-headless-worker.js')
    // Initialize the worker environment and import Converse
    const converse = await prepare({
      scripts: '/path/to/scripts/'  // Path to the script directory
    });
    
    // Initialize Converse with the config
    converse.initialize(configObject);
    
    postMessage({ type: 'initialized', success: true });
  } catch (error) {
    postMessage({ type: 'error', message: error.message });
  }
}

// Listen for messages from the main thread
onmessage = function(e) {
  if (e.data.type === 'init' && e.data.config) {
    init(e.data.config);
  }
};
```

## Important Notes on Script Loading

### Dependencies and Script Paths

When using `webworker-compatibility.js`, you need to specify the location of required XML parsing scripts:

```javascript
// The 'scripts' parameter should point to a directory containing:
// - xmlsax.js
// - xmlw3cdom.js
// - libsignal-protocol.min.js (if not loaded separately)
const {prepare} = await import('path/to/converse-headless-worker.min.js')
await prepare({
  scripts: '/path/to/scripts/'
});
```

The scripts parameter must point to a directory that contains the necessary files. The scripts can be either:
1. In the root folder being served, or
2. In a specified folder path using the `scripts` parameter

### libsignal-protocol Requirements

For OMEMO encryption support:

1. **Load Order**: Ideally, libsignal-protocol.js should be loaded **before** importing the webworker compatibility script:
   ```javascript
   await importScripts("/path/to/libsignal-protocol.js");
   // Then import or load converse-headless-worker.min.js
   ```

2. **HTTPS Requirement**: libsignal-protocol and its cryptographic functions **require HTTPS** to work properly. When running over HTTP:
   - Crypto functionality won't be attached to the global object
   - OMEMO encryption won't function

   For development purposes only, you can run a browser with web security disabled, but this should never be done in production.

## Implementation Details

- **DOM Element Support**: `element.js` implements various DOM Element properties and methods like `innerHTML`, `querySelectorAll`, etc.
- **Storage**: `storage.js` provides localStorage and sessionStorage implementations
- **XML Parsing**: Uses a combination of SAX and DOM parsers to replicate browser XML handling
- **Bundle Strategy**: All dependencies are bundled into a single file to simplify deployment

## Limitations

- Not all DOM APIs are fully implemented; only those required by Converse.js
- Performance may differ from native DOM implementations
- Some browser-specific features may not be available
- OMEMO encryption requires HTTPS
