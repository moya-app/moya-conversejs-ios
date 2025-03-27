/**
 * serializer.js - XMLSerializer Implementation for WebWorkers
 * 
 * This module provides a mock implementation of the browser's XMLSerializer
 * for serializing XML documents to strings in WebWorker environments.
 * 
 * The XMLSerializer allows DOM nodes to be converted back to XML strings,
 * which is essential for XMPP stanza handling in Converse.js.
 */

/**
 * Mock implementation of XMLSerializer
 */
class MockXMLSerializer{
    constructor(){}
    
    /**
     * Converts a DOM document to an XML string
     * @param {Document} document - The XML document to serialize
     * @returns {string} The serialized XML string
     */
    serializeToString(document){
        return document.documentElement.outerHTML;
    }
}

// Initialize the XMLSerializer in the global context if auto_init_mock is enabled
if(self['auto_init_mock']){
    self.XMLSerializer = MockXMLSerializer;
}

export const serializer = MockXMLSerializer;