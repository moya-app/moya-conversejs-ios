/**
 * Converse.js WebWorker Compatibility Module
 * 
 * This module serves as the entry point for enabling Converse.js to run in a WebWorker context.
 * It sets up the necessary DOM environment by importing various polyfills and mockups of
 * browser APIs that are not natively available in WebWorkers.
 * 
 * The module:
 * 1. Sets 'window' to reference 'self' to mimic the browser global object
 * 2. Loads necessary XML parsing libraries
 * 3. Imports DOM implementation polyfills
 * 4. Sets up mock storage for localStorage and sessionStorage
 */

window = self;
var r,
    rej,
    p = new Promise((res, reje) => {
        r = res;
        rej = reje;
    });

/**
 * Prepares the WebWorker environment by loading required scripts and polyfills
 * @returns {Promise} Resolves when the environment is ready for Converse.js
 */
async function prepare(){

// Promise to track when all scripts are loaded
self.webworkerScriptsLoaded = p;
self['auto_init_mock'] = true;
let scriptsFolder = self.userProvidedScriptsPath;
try {
    // Load external XML parsing libraries based on provided path or use existing ones
    if (scriptsFolder) {
        await importScripts(scriptsFolder + '/libsignal-protocol.min.js');
        await importScripts(scriptsFolder + '/webworker/xmlw3cdom.js');
        await importScripts(scriptsFolder + '/webworker/xmlsax.js');
    } else {
        //Test if scripts do exist
        if(!DOMImplementation){
            throw new Error("DOMImplementation not found");
        }
    }
    // Import DOM polyfill modules
    await import('./element.js');
    await import('./document.js');
    await import('./storage.js');
    await import('./dom-parser.js');
    await import('./serializer.js');
    console.log("Imports done");
    r();
} catch (error) {
    rej(error);
    throw(error)
}
return p;
}

export default prepare;
