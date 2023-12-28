import { Elements } from './element.js';
import { didSet as DocumentDidSet } from './document.js';
import { Storage } from './storage.js';
import { MockDOMParser } from './dom-parser.js';
// console.log("Before",);

// document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);

// let el = new DOMParser().parseFromString(`<stream:features xmlns:stream="http://etherx.jabber.org/streams"><mechanisms xmlns="urn:ietf:params:xml:ns:xmpp-sasl"><mechanism ></mechanism><mechanism ></mechanism><mechanism ></mechanism></mechanisms></stream:features>`,'text/xml').documentElement;
// console.log("FOUND", el.querySelector('mechanisms'));

// console.log(el)

// throw '';

// debugger;
window = self;

console.log({ thread: self });
export default true;
