window = self;
var r,
    rej,
    p = new Promise((res, reje) => {
        r = res;
        rej = reje;
    });
async function prepare(){


self.webworkerScriptsLoaded = p;
self['auto_init_mock'] = true;
let scriptsFolder = self.userProvidedScriptsPath;
try {

    if (scriptsFolder) {
        await importScripts(scriptsFolder + '/libsignal-protocol.min.js');
        await importScripts(scriptsFolder + '/webworker/xmlw3cdom.js');
        await importScripts(scriptsFolder + '/webworker/xmlsax.js');
    } else {
        //Test if scripts do exist
        if(!DOMImplementation){
            throw new Error("DOMImplementation not found");
        }
    }
    await import('./element.js');
    await import('./document.js');
    await import('./storage.js');
    await import('./dom-parser.js');
    await import('./serializer.js');
    console.log("Imports done");
    r();
} catch (error) {
    rej(error);
    throw(error)
}
return p;
}

export default prepare;
