/**Manual Implementation Start 

import { MockDocument } from "./element.js";

export const mockDocument =  new MockDocument(null, null, null);

// Attach the mockDocument to 'self' to mimic the global 'document'
console.log("auto init mock");
if(self['auto_init_mock']){
    
    self.document = mockDocument;
}

Manual Implementation End */

DOMImplementation.prototype.createDocument = function (namespaceURI, qualifiedNameStr, documentType) {
    let imp = new DOMImplementation();
    imp.errorChecking = false;
    let doc = imp.loadXML(`<${qualifiedNameStr}></${qualifiedNameStr}>`);
    doc.nodeType = documentType || 9;
    return doc;
};

Object.defineProperty(DOMDocument.prototype, 'firstElementChild', {
    get: function () {
        return this.childNodes._nodes.find((node) => node.nodeType === 1);
    },
});
let implementation = new DOMImplementation();
let defaultDoc = implementation.loadXML('<html><head></head></html>');
defaultDoc.head = {
    appendChild: async function (node) {
        if (node.tagName.toLowerCase() === 'script' && node.src) {
            console.warn('Trying to load script in webworker mode:', node.src);
            try{

            
            let res =await  importScripts(node.src);
            node.onload();
            }
            catch(err){
                node.onerror(err);
            }


            // importScripts(node.src + "").then(res=>{
            //     node.onload();
            // }).catch(err=>{
            //     node.onerror(err);
            // });
        }
    },
};

if (self['auto_init_mock']) {
    self.document = defaultDoc;
}
export const didSet = self.document;
