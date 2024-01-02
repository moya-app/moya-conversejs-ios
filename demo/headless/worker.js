
self.window = self;
self.globalThis = self;
self['auto_init_mock'] = true;
console.log('worker.js', { self, doc: self.document });
async function init() {
    try {
        await importScripts('/src/headless/utils/libsignal-protocol.min.js');
        await importScripts('/src/headless/utils/webworker/xmlw3cdom.js');
        await importScripts('/src/headless/utils/webworker/xmlsax.js');
        console.log("%cImportted xmlw3cdom.js", 'color: green; font-size: 20px');
        await import('../../src/headless/utils/webworker/webworker.js');
        console.log('Importted ');
    } catch (e) {
        console.log('Something went wrong', e);
        return
        
    }

   
    importScripts('../../src/headless/dist/converse-headless.js');
    console.log("POST", self)
    let converseModule = window.converse;
    let { converse, _converse, api } = converseModule;
    // console.clear();
    console.log('converse', converse);

    converse.initialize({
         // websocket_url: 'ws://34.241.102.241:5080/ws', // Please use this connection manager only for testing purposes
      websocket_url: "wss://xmpp.systest.moya.app:5443/ws", // Please use this connection manager only for testing purposes
      // bosh_service_url: 'https://convxaersejs.org/http-bind/', // Please use this connection manager only for testing purposes
      allow_bookmarks: false,
      allow_multiple_devices: false,
      authentication: 'login',
      auto_join_on_invite: true,
      auto_login: true,
      auto_reconnect: true,
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
init();

// let init = window.converse.initConverse;

// for (let i = 0; i < 2; i++) {
//     let { converse, _converse, api } = init(i);

//     let firstInstance = converse.initialize({
//         websocket_url: 'wss://xmpp.systest.moya.app:5443/ws', // Please use this connection manager only for testing purposes
//         view_mode: 'fullscreen',
//         auto_login: true,
//         auto_reconnect: false,
//         allow_non_roster_messaging: true,
//         discover_connection_methods: false,
//         jid: '123@test.com',
//         loglevel: 'info',
//         omemo_default: true,
//         persistent_store: 'IndexedDB',
//         password: 'pass',
//     });
//     console.log({  _converse, api, converse });
// }
