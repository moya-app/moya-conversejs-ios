// Import the bundled worker code


// Now we can use the converseWorker object that was exposed
async function loadRequisites() {
    try {
        console.log("Worker file");
        // self.window as 
        self.window = this;
        await importScripts("/3rdparty/libsignal-protocol.js");
        const {prepare} = await import('/src/headless/dist/converse-headless-worker.min.js');
        const converse = await prepare({ scripts: '/src/headless/utils/webworker/' });
        console.log("Converse initialized:", converse);
        return converse;
    } catch (error) {
        console.error("Error initializing converse:", error);
        throw error;
    }
}


async function init(configObject){
    loadRequisites().then(converseModule=>{
        let { converse, _converse, api } = converseModule;
        converse.initialize(configObject)
    })
}


onmessage = async function (e) {
    
    if(e.data.jid && e.data.password)
    {
    return init(e.data)
    }   
    let _c = window.converse._converse;
    let chat = await _c.api.chats.open('4917692171798@binu-test.m.in-app.io');
    console.log(chat);
    let res = await chat.sendMessage({body:'Hello'});
    console.log(res);


};