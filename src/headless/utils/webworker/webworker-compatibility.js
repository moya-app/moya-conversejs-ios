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

self.window = self;
self['auto_init_mock'] = true;







/**
 * Prepares the WebWorker environment and initializes Converse
 * @returns {Promise} Resolves when the environment is ready for Converse.js
 */
export async function prepare(prepareOpts) {
    const {scripts = './'} = prepareOpts || {};
    //Check if libsignal is loaded
    if(!self['dcodeIO']){
        console.warn("Libsignal not loaded, trying to load in scripts path...");
        try{
        await importScripts(`${scripts}libsignal-protocol.min.js`);
        }
        catch(err){
            console.warn("Libsignal not loaded. OMEMO won't be supported")
        }
    }
    
    
    try{
        //Load scripts to provide dom functionality
        const xmlsax = importScripts(`${scripts}xmlsax.js`);
        const xmlw3cdom = importScripts(`${scripts}xmlw3cdom.js`);
        }
        catch(err){
            console.warn("Default DOM polyfills scripts not found. Please ensure prepare is called with a path where xmlsax.js and xmlw3cdom can be found. E.g. prepare({scripts:'assets/scripts/'}")
        }
        
        
        
        //Manual changes to ensure dom functionality and similar is covered.
        const element = require('./element.js');
        const document = require('./document.js');
        const storage = require('./storage.js');
        const domParser = require('./dom-parser.js');
        const serializer = require('./serializer.js');
        
    try {
        if (!DOMImplementation) {
            throw new Error("DOMImplementation not found");
        }
        
        console.log("WebWorker environment initialized");
        
        
        const converse = await import(
            /* webpackMode: "eager" */ 
            '@converse/headless'
          );
        console.log("Converse imported successfully");
        
        return converse;
    } catch (error) {
        console.error("Error initializing webworker environment:", error);
        return Promise.reject(error);
    }
}


