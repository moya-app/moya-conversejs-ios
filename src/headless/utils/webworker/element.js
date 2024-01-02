/**Manual Implementation Start
export class NamedNodeMap {


    
    
    constructor(){
        Object.defineProperty(this, 'array', {
            value: [],
            writable: true,
            enumerable: false,
            configurable: true
        });
    }

    set(key,value){

        let node = this.array.find(node=>node.key === key);
        if(node){
            node.value = value;
            return;
        }
        else{
            node = new MockNode(key,2);
            node.value = value;
            this.array.push(node);
            let index = this.array.length - 1;
            this[index]=node;
            
        }
        Object.defineProperty(this, key, {
            value: value,
            writable: true,
            enumerable: false,
            configurable: true
        });
        
       
    }

    getNamedItem(key){
        return this.array.find(node=>node.nodeName === key);
    }

    get length(){
        return this.array.length;
    }

    get keysList(){
        return this.array.map(node=>node.nodeName);
    }

    
}

export class MockNode {

    _value;
    _nodeValue
    get nodeValue(){
        return this._nodeValue;
    }
    get value(){
        return this._value;
    }
    set nodeValue(value){
        this._nodeValue = value;
        this._value = value;
    }
    set value(value){
        this._nodeValue = value;
        this._value = value;
    }
    constructor(nodeName, nodeType) {
        this.nodeName = nodeName;
        this.nodeType = nodeType;
        this.childNodes = [];
        this.parentNode = null;

         (self).elements = (self).elements || [];
        (self).elements.push(this);
    }

    appendChild(node) {
        this.childNodes.push(node);
        node.parentNode = this;
    }
}



export class MockElement extends MockNode {
    ownerDocument;
    setOwnerDocument(arg0) {
        this.ownerDocument = arg0;
        return this;
    }
    constructor(tagName) {
        super(tagName, 1); // 1 is the nodeType for an element
        this.tagName = tagName.toUpperCase();
        this.attributes = new NamedNodeMap();
        this.innerText = '';
        this.innerHTML = '';
        this.style = {};
        this.classList = [];
    }

    setAttribute(name, value) {
        this.attributes.set(name,value)
    }



    getElementsByTagName(tagName) {
        let foundElements = [];

        function recursiveSearch(node) {
            if (node.tagName && node.tagName.toLowerCase() === tagName.toLowerCase()) {
                foundElements.push(node);
            }
            node.childNodes.forEach(child => recursiveSearch(child));
        }

        recursiveSearch(this);

        return foundElements;
    }


    getAttribute(name) {
        return this.attributes[name] || null;
    }

    appendChild(child) {
        super.appendChild(child);
        this.updateInnerHTML();
    }

    removeChild(child) {
        const index = this.childNodes.indexOf(child);
        if (index > -1) {
            this.childNodes.splice(index, 1);
        }
        this.updateInnerHTML();
    }

    updateInnerHTML() {
        this.innerHTML = this.childNodes.map(child => child.outerHTML).join('');
    }

    get tag(){
        return this.tagName.toLowerCase();
    }

    get outerHTML() {

        const attrs = (this.attributes.keysList)
            .map((key,index) => `${key}="${this.attributes[index].value}"`)
            .join(' ');
        

        return `<${this.tag} ${attrs}>${this.innerHTML}</${this.tag}>`;
    }

    addClass(className) {
        if (!this.classList.includes(className)) {
            this.classList.push(className);
            this.setAttribute('class', this.classList.join(' '));
        }
    }

    removeClass(className) {
        const index = this.classList.indexOf(className);
        if (index > -1) {
            this.classList.splice(index, 1);
            this.setAttribute('class', this.classList.join(' '));
        }
    }
}


export class MockText extends MockNode {
    data;

    constructor(data) {
        super('#text', 3); // 3 is the nodeType for a text node
        this.data = data;
    }
}

export class MockDocument extends MockNode {
    namespaceURI;
    qualifiedName;
    doctype;
    implementation;
    documentElement;

    constructor(namespace, qualifiedName, doctype) {
        super('#document', 9); // 9 is the nodeType for a document
        this.namespaceURI = namespace;
        this.qualifiedName = qualifiedName;
        this.doctype = doctype;
        this.implementation = new MockDOMImplementation();
       

    }

    createTreeWalker() {
        return {};
      }

    createElement(tagName) {
        return new MockElement(tagName).setOwnerDocument(this);
    }

    createTextNode(data) {
        return new MockText(data);
    }

    addEventListener(...args){

    }
    removeEventListener(...args){

    }

    appendChild(node) {
        if (node.nodeType === 1 || node.nodeType === 10) {
            super.appendChild(node);
        } else {
            throw new Error("Only element and doctype nodes can be directly appended to a document.");
        }
    }
}

class MockHTMLDocument extends MockDocument {
    constructor() {
        super(null, null, null);
        this.body = new MockElement('body');
        this.head = new MockElement('head');
        this.documentElement = new MockElement('html');
        this.documentElement.appendChild(this.head);
        this.documentElement.appendChild(this.body);
        super.appendChild(this.documentElement);
    }
}
class MockHTMLElement extends MockElement {
    constructor(tagName) {
        super(tagName);
        this.style = {}; // Object to simulate inline CSS styles
        this.id = '';
        this.className = '';
    }

    // Example of a method specific to MockHTMLElement
    click() {
        console.log(`${this.tagName} element clicked.`);
    }

    // Mock implementation of style manipulation
    setStyle(property, value) {
        this.style[property] = value;
    }

    // Other HTML element specific methods and properties can be added here
}


class MockDOMImplementation {
    constructor() {
        // Constructor can be empty or have initialization code as needed
    }

    createDocumentType(qualifiedNameStr, publicId, systemId) {
        // This method should return a new doctype object 
        // with the specified qualifiedName, publicId, and systemId.
        // For simplicity, we can just return an object with these properties.
        return {
            name: qualifiedNameStr,
            publicId: publicId,
            systemId: systemId
        };
    }

    createDocument(namespace, qualifiedNameStr, doctype) {
        // This method should create and return a new document object.
        return new MockDocument(namespace, qualifiedNameStr, doctype);
    }

    createHTMLDocument(title) {
        // This method should create and return a new HTML document.
        const doc = new MockDocument(null, 'html', null);
        const html = new MockElement('html');
        const head = new MockElement('head');
        const body = new MockElement('body');
        const titleEl = new MockElement('title');
        titleEl.innerText = title;

        head.appendChild(titleEl);
        html.appendChild(head);
        html.appendChild(body);
        doc.appendChild(html);

        return doc;
    }
}

// Example usage:

console.log("auto init mock", self['auto_init_mock'], self);
if(self['auto_init_mock']){
    self.Element = MockElement;
    self.Node = MockNode;
    self.HTMLElement= MockHTMLElement;
    self.HTMLDocument = MockHTMLDocument;
}


// Manual Implementation End */
DOMElement.prototype.querySelectorAll = function (selector) {
    const results = [];

        // Helper function to test if an element matches the selector
        const matchesSelector = (element, selector) => {
            if(element instanceof DOMText) return false
            // Split the selector into tag and attributes parts
            const [tagPart, attrPart] = selector.split(/\[(.+)\]/);
            if (tagPart && element.tagName.toLowerCase() !== tagPart.toLowerCase()) {
                return false;
            }
            if (attrPart) {
                const [attrName, attrValue] = attrPart.split('=');
                const actualValue = element.getAttribute(attrName);
                // Check if attribute value matches (considering cases with and without quotes)
                if (!actualValue || actualValue !== attrValue.replace(/['"]/g, '')) {
                    return false;
                }
            }
            return true;
        };

        // Recursive function to search through the children
        const searchChildren = (element) => {

            if (matchesSelector(element, selector)) {
                results.push(element);
            }
            element.childNodes._nodes.forEach(child => searchChildren(child));
        };

        // Start the search with this element
        searchChildren(this);

        return results;

};


DOMElement.prototype.querySelector = function (selector) {
    var result;

        // Helper function to test if an element matches the selector
        const matchesSelector = (element, selector) => {
            if(element instanceof DOMText) return false
            // Split the selector into tag and attributes parts
            const [tagPart, attrPart] = selector.split(/\[(.+)\]/);
            if (tagPart && element.tagName.toLowerCase() !== tagPart.toLowerCase()) {
                return false;
            }
            if (attrPart) {
                const [attrName, attrValue] = attrPart.split('=');
                const actualValue = element.getAttribute(attrName);
                // Check if attribute value matches (considering cases with and without quotes)
                if (!actualValue || actualValue !== attrValue.replace(/['"]/g, '')) {
                    return false;
                }
            }
            return true;
        };

        // Recursive function to search through the children
        const searchChildren = (element) => {

            if (matchesSelector(element, selector)) {
                return element;
            }
            return element.childNodes._nodes.find(child => searchChildren(child));
        };

        // Start the search with this element
        result = searchChildren(this);

        return result;

};

Object.defineProperty(DOMElement.prototype, 'innerHTML', {
    get: function() {

        return this.childNodes._nodes.map(child => child.outerHTML).join('');
    }
    
});

Object.defineProperty(DOMElement.prototype, 'innerText', {
    get: function() {
        return this.firstChild instanceof DOMText ? this.firstChild.data + "" : '';
    }
});
Object.defineProperty(DOMElement.prototype, 'textContent', {
    get: function() {
        return this.firstChild instanceof DOMText ? this.firstChild.data + "" : '';
    }
});

Object.defineProperty(DOMText.prototype, 'nodeValue', {
    get: function() {
        return this._nodeValue + "";
    },
    set: function(value) {
        this._nodeValue = value;
    }
});


Object.defineProperty(DOMElement.prototype, 'outerHTML', {
    get: function() {

        const attrs = (this.attributes._nodes)
        .map((node) => `${node.name}="${node.value}"`)
        .join(' ');
    
    return `<${this.tagName} ${attrs}>${this.innerHTML}</${this.tagName}>`;
    }
});



let oldSetNamedItem = DOMNamedNodeMap.prototype.setNamedItem;
let oldRemoveNamedItem = DOMNamedNodeMap.prototype.removeNamedItem;

DOMNamedNodeMap.prototype.setNamedItem = function (name, value) {

    //if exists
    if(this.item(name)){

        oldSetNamedItem.call(this, name, value);
    }
    //if not exists
    else{
        oldSetNamedItem.call(this, name, value);
    }
    
    Object.defineProperty(this, name, {
        value: this.item(name) + '',
        writable: true,
        enumerable: false,
        configurable: true
    });
    this.properlySetArray();
}


DOMNamedNodeMap.prototype.properlySetArray = function () {
    if(!this._indexes){
        Object.defineProperty(this, '_indexes', {
            value: [],
            writable: true,
            enumerable: false,
            configurable: true
        });
    }
    this._indexes.forEach((index=>{
        delete this[index];
    })) 
    this._indexes = [];
    let array = this._nodes;
    array.forEach((node,index)=>{
        this._indexes.push(index);
        this[index]=node;
    });
}

let oldGetAttr = DOMElement.prototype.getAttribute;
DOMElement.prototype.getAttribute = function (name) {
    let val = oldGetAttr.call(this, name);
    return val + '';

}

DOMNamedNodeMap.prototype.removeNamedItem= function (name) {
   
    oldRemoveNamedItem.call(this, name);
    delete this[name];
    this.properlySetArray();
}

DOMNodeList.prototype.setIndexes = function () {
    if(!this._indexes){
        Object.defineProperty(this, '_indexes', {
            value: [],
            writable: true,
            enumerable: false,
            configurable: true
        });
    }
    this._indexes.forEach((index=>{
        delete this[index];
    })) 
    this._indexes = [];
    let array = this._nodes;
    array.forEach((node,index)=>{
        this._indexes.push(index);
        this[index]=node;
    });
};
['_appendChild',
'_cloneNodes',
'_insertBefore',
'_removeChild',
'_replaceChild'].forEach(func=>{
    let oldFunc = DOMNodeList.prototype[func];
    DOMNodeList.prototype[func] = function (node) {
        oldFunc.call(this, node);
        this.setIndexes();
    }

})

DOMDocument.prototype.createTreeWalker = function() {
    return {};
  }

DOMDocument.prototype.addEventListener= function (...args){
    // console.log("added empty event listener",args);
}
DOMDocument.prototype.removeEventListener= function (...args){
    // console.log("removed empty event listener",args);
}

function makeIterable(obj, arrayName = '_nodes'){
    obj.prototype.map = function (callback) {
        return this[arrayName].map(callback);
    }
    obj.prototype.forEach = function (callback) {
        return this[arrayName].forEach(callback);
    }
    obj.prototype.filter = function (callback) {
        return this[arrayName].filter(callback);
    }

}

makeIterable(DOMNodeList);

if (self['auto_init_mock']) {
    self.Element = DOMElement;
    self.HTMLElement = DOMElement;
    self.Node = DOMNode;
    self.HTMLDocument = DOMDocument;
}
export const Elements = [self.Element, self.HTMLElement, self.Node, self.HTMLDocument];