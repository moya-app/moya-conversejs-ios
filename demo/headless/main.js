console.log('Hello World');


async function init(){
    console.log("INIT")
    // await import('../../src/headless/dist/converse-headless.js');
    let converseModule = window.converse;
    let { converse, _converse, api } = converseModule;
    converse.initialize({
        // websocket_url: 'ws://34.241.102.241:5080/ws', // Please use this connection manager only for testing purposes
     websocket_url: "wss://xmpp.systest.moya.app:5443/ws", // Please use this connection manager only for testing purposes
     // bosh_service_url: 'https://convxaersejs.org/http-bind/', // Please use this connection manager only for testing purposes
     allow_bookmarks: false,
     allow_multiple_devices: false,
     authentication: 'login',
     auto_join_on_invite: true,
     auto_login: true,
     auto_reconnect: false,
     allow_non_roster_messaging: true,
     discover_connection_methods: false,
     jid: '27794915044@binu-test.m.in-app.io',
     loglevel: 'info',
     omemo_default: true,
     persistent_store: 'IndexedDB',
     password: 'UOfxZIiIds',
     whitelisted_plugins: [
        'converse-omemo',
      ],
   })
}

window.main = ()=>{
    sessionStorage.clear();
    localStorage.clear();
    init();
}
window.thread = ()=> {myWorker = new Worker('./worker.js', ); (window).worker = myWorker; };
// let mainThread = true;
// mainThread=false;
// if(mainThread){
//     init()    
// }
// else{
//     var myWorker = new Worker('./worker.js', );
// }

// converse.initialize({
//     websocket_url: 'wss://xmpp.systest.moya.app:5443/ws', // Please use this connection manager only for testing purposes
//     view_mode: 'fullscreen',
//     auto_login: true,
//     auto_reconnect: false,
//     jid: '123@test.com',
//     password: 'pass',
// })

