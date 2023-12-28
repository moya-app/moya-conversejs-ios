/**Manual Implementation Start 

import { MockDocument } from "./element.js";

export const mockDocument =  new MockDocument(null, null, null);

// Attach the mockDocument to 'self' to mimic the global 'document'
console.log("auto init mock");
if(self['auto_init_mock']){
    
    self.document = mockDocument;
}

Manual Implementation End */


DOMImplementation.prototype.createDocument = function (namespaceURI, qualifiedNameStr, documentType){
    let imp = new DOMImplementation();
    imp.errorChecking = false;
    let doc =  imp.loadXML(`<${qualifiedNameStr}></${qualifiedNameStr}>`);
    doc.nodeType = documentType || 9;
    return doc;

}


Object.defineProperty(DOMDocument.prototype, 'firstElementChild', {
    get: function() {
        return this.childNodes._nodes.find((node)=>node.nodeType === 1);
    }
    
});



if(self['auto_init_mock']){
    let implementation = new DOMImplementation();
    implementation.errorChecking = false;
    self.document= implementation.loadXML('<xml></xml>');
    //  = new DOMDocument();
}
export const didSet = self.document;