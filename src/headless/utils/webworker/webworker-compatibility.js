window = self;
var r,
    rej,
    p = new Promise((res, reje) => {
        r = res;
        rej = reje;
    });
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
    r();
} catch (error) {
    rej(error);
    throw(error)
}
export default p;
