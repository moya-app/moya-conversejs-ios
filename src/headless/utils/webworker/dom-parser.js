/**
 * dom-parser.js - DOMParser Implementation for WebWorkers
 * 
 * This module provides a mock implementation of the browser's DOMParser
 * for parsing XML in WebWorker environments. It includes functions to 
 * properly set up XML documents with traversable attributes and node structures.
 */

/**
 * Makes all attributes on a document node iterable
 * Recursively processes all child nodes
 * @param {DOMNode} doc - The document node to process
 */
function makeAttributesIteratable(doc){
    doc.attributes.properlySetArray();
    doc.childNodes._nodes.forEach((node)=>{
        makeAttributesIteratable(node);
    })
}
// DOMNamedNodeMap.prototype.properlySetArray = function () {
//     if(!this._indexes){
//         Object.defineProperty(this, '_indexes', {
//             value: [],
//             writable: true,
//             enumerable: false,
//             configurable: true
//         });
//     }
//     this._indexes.forEach((index=>{
//         delete this[index];
//     })) 
//     this._indexes = [];
//     let array = this._nodes;
//     array.forEach((node,index)=>{
//         this._indexes.push(index);
//         this[index]=node;
//     });
// }

/**
 * Override appendChild to maintain parent-child relationships
 * and ensure attributes are properly iterable
 */
let oldAppend = DOMNode.prototype.appendChild;
DOMNode.prototype.appendChild = function (node) {
    let old = oldAppend.call(this, node);
    node.parentElement = this;
    makeAttributesIteratable(node);
    return old;
}

/**
 * Mock DOMParser implementation for XML parsing in WebWorkers
 */
export class MockDOMParser {
    /**
     * Parse an XML or HTML string into a DOM Document
     * @param {string} str - The XML or HTML string to parse
     * @param {string} contentType - The MIME type of the document (text/xml or text/html)
     * @returns {Document} The parsed document
     * @throws {Error} If contentType is not supported
     */
    parseFromString(str, contentType) {
        // This method creates a DOM from the input string
        // Currently supports XML and HTML content types

        if(['text/xml','text/html'].includes(contentType) ){
            let doc = new DOMImplementation().loadXML(str);
            makeAttributesIteratable(doc);
            return doc;
        }
        else{
            throw new Error(contentType + " not implemented for webworker");
        }
    }
}

// Initialize the DOMParser in the global context if auto_init_mock is enabled
if(self['auto_init_mock']){
    console.log("HIT");
    self.DOMParser = MockDOMParser;
    console.log("HIT2");
}