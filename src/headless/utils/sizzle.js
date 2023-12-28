import { MockElement } from './webworker/element';

let sizzle;

function fallbackSizzle() {
    // Your fallback implementation
}

import('sizzle')
    .then(Sizzle => {

            console.log("sizzle import worked")
            sizzle = Sizzle.default;
            
        
       
        
    })
    .catch(error => {
        console.error("Failed to import Sizzle:", error);
        sizzle = fallbackSizzle;
    });
setTimeout(()=>{
    console.log("LATER", {sizzle})
},1000)
export default sizzle;