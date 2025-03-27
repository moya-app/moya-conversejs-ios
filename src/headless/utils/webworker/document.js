/**
 * document.js - DOM Document Implementation for WebWorkers
 * 
 * This module provides a mock implementation of the browser's document object
 * for WebWorker environments where such functionality is not natively available.
 * It extends the DOMImplementation with methods needed by Converse.js and
 * sets up a default document structure.
 */

/**Manual Implementation Start 

import { MockDocument } from "./element.js";

export const mockDocument =  new MockDocument(null, null, null);

// Attach the mockDocument to 'self' to mimic the global 'document'
console.log("auto init mock");
if(self['auto_init_mock']){
    
    self.document = mockDocument;
}

Manual Implementation End */

/**
 * Extends DOMImplementation's createDocument method to support namespace creation
 */
DOMImplementation.prototype.createDocument = function (namespaceURI, qualifiedNameStr, documentType) {
    let imp = new DOMImplementation();
    imp.errorChecking = false;
    let doc = imp.loadXML(`<${qualifiedNameStr}></${qualifiedNameStr}>`);
    doc.nodeType = documentType || 9;
    return doc;
};

/**
 * Adds firstElementChild property to DOMDocument
 */
Object.defineProperty(DOMDocument.prototype, 'firstElementChild', {
    get: function () {
        return this.childNodes._nodes.find((node) => node.nodeType === 1);
    },
});

/**
 * Create a default document with a head element that can handle script loading
 */
let implementation = new DOMImplementation();
let defaultDoc = implementation.loadXML('<html><head></head></html>');

/**
 * Mock implementation of document.head with script loading support
 */
defaultDoc.head = {
    appendChild: async function (node) {
        if (node.tagName.toLowerCase() === 'script' && node.src) {
            console.warn('Trying to load script in webworker mode:', node.src);
            try{
                let res = await importScripts(node.src);
                node.onload();
            }
            catch(err){
                node.onerror(err);
            }
        }
    },
};

/**
 * Initialize the document in the global context if auto_init_mock is enabled
 */
if (self['auto_init_mock']) {
    self.document = defaultDoc;
}
export const didSet = self.document;
