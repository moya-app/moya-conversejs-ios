import { Elements } from './element.js';
import { didSet as DocumentDidSet } from './document.js';
import { Storage } from './storage.js';
import { MockDOMParser } from './dom-parser.js';
import { serializer } from './serializer.js';
// console.log("Before",);

// document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
// let el = document.createElement('html');
// let body = document.createElement('body');
// el.appendChild(body);
// console.log(el)
// throw('');

// debugger;
window = self;

console.log({ thread: self });
export default true;
