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

1. When initializing Converse.js in a worker, first import `webworker-compatibility.js`
2. This module sets up the worker environment by importing necessary dependencies
3. It creates polyfills for DOM objects, XML parsing, and storage
4. Once the environment is ready, Converse.js can be loaded and initialized

## Usage Example

The project demonstrates two modes of operation:

1. **Main Thread**: Running Converse.js in the main browser thread
2. **Worker Thread**: Running Converse.js in a WebWorker

Example code (from demo/headless):

`

Inside the worker:

```javascript
async function init(configObject) {
    // Set up the environment
    self.window = self;

    //Load scripts : (libsignal-protocol.min.js, xmlw3cdom.js, xmlsax.js) or set script folder (that include these scripts) like this :
    // self.userProvidedScriptsPath = '/src/headless/utils';
    
    // Load compatibility scripts
    await import('../../src/headless/utils/webworker/webworker-compatibility.js').then(async (module) => {
        let prepare = module.default;
        return await prepare();
    });
    
    // Load Converse.js
    importScripts('/src/headless/dist/converse-headless.js');
    
    // Initialize
    let { converse } = window.converse;
    converse.initialize(configObject);
}
```

## Implementation Details

- **DOM Element Support**: `element.js` implements various DOM Element properties and methods like `innerHTML`, `querySelectorAll`, etc.
- **Storage**: `storage.js` provides localStorage and sessionStorage implementations
- **XML Parsing**: Uses a combination of SAX and DOM parsers to replicate browser XML handling

## Development and Testing

To test the functionality:
1. Run the demo headless application
2. Use the "Worker Thread" button to initialize Converse.js in a worker
3. Check the console for logs and any errors

## Limitations

- Not all DOM APIs are fully implemented; only those required by Converse.js
- Performance may differ from native DOM implementations
- Some browser-specific features may not be available
