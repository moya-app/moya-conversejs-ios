function makeAttributesIteratable(doc){
    doc.attributes.properlySetArray();
    doc.childNodes._nodes.forEach((node)=>{
        makeAttributesIteratable(node);
    })
}
let oldAppend = DOMNode.prototype.appendChild;
DOMNode.prototype.appendChild = function (node) {
    let old = oldAppend.call(this, node);
    makeAttributesIteratable(node);
    return old;
}

export class MockDOMParser {
    parseFromString(str, contentType) {
        console.log("Parse from string", {str})
        // This method will create a simplified mock DOM based on the input string.
        // It doesn't fully parse the HTML/XML string due to the complexity of real parsing,
        // but will provide a basic implementation for demonstration purposes.

        // For a more complete implementation, you might need a real HTML/XML parser library
        // that works in a Web Worker environment.

        // Create a new MockDocument
        if(['text/xml','text/html'].includes(contentType) ){
            let doc = new DOMImplementation().loadXML(str);
            console.log(doc)
            makeAttributesIteratable(doc);
            return doc;
        }
        else{
            throw new Error(contentType + "Not Implemented for webworker");
        }
        throw('Something went Wrong')
       

        
    }
}


if(self['auto_init_mock']){
    console.log("HIT");
    self.DOMParser = MockDOMParser;
    console.log("HIT2");
}