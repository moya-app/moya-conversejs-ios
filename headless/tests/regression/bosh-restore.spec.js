/**
 * Regression test for the login abort caused by reading a torn-down connection.
 *
 * Device symptom (iOS, prod build): after a clean disconnect (app minimised),
 * the first login on resume died with
 *   "TypeError: undefined is not an object (evaluating 'connection2._proto')"
 * and the reconnect supervisor had to retry, costing ~7s and delivering a
 * burst of queued messages.
 *
 * Mechanism: api.user.login() creates a connection, then awaits setUserJID().
 * While it awaits, the pending disconnect finishes -> finishDisconnection() ->
 * api.connection.destroy(), which sets the module-level connection to
 * undefined. login() then resumes into the `login` hook (converse-bosh's
 * attemptPrebind -> restoreBOSHSession) and into attemptNonPreboundSession ->
 * connect(), both of which read the connection unguarded.
 *
 * Run with:
 *   CHROME_BIN="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
 *     npx karma start karma.regression.conf.js
 * (needs karma, karma-jasmine, karma-chrome-launcher, jasmine-core installed)
 */
const map = document.createElement('script');
map.type = 'importmap';
map.textContent = JSON.stringify({
    imports: { '@converse/skeletor': '/base/node_modules/@converse/skeletor/dist/skeletor.esm.js' },
});
document.head.appendChild(map);

describe('A login whose connection is destroyed mid-flight', function () {
    it('does not throw a TypeError out of api.user.login()', async function () {
        const { converse, api, _converse } = await import('/base/dist/converse-headless.esm.js');

        await converse.initialize({
            auto_login: false,
            auto_reconnect: false,
            bosh_service_url: 'http://localhost:9877/http-bind',
            jid: 'tester@localhost',
            persistent_store: 'sessionStorage',
            discover_connection_methods: false,
            loglevel: 'fatal',
        });

        // Stand in for finishDisconnection() landing while login() awaits setUserJID().
        api.listen.on('setUserJID', () => api.connection.destroy());

        let thrown = null;
        try {
            await api.user.login('tester@localhost', 'secret');
        } catch (e) {
            thrown = e;
        }

        // The BOSH endpoint above doesn't exist, so a connect/network failure is
        // fine here. A TypeError on the destroyed connection is the bug.
        const is_type_error =
            !!thrown && (thrown.constructor?.name === 'TypeError' || /_proto|reconnecting/.test(String(thrown?.message)));
        if (is_type_error) fail(`login threw: ${thrown}`);
        expect(is_type_error).toBe(false);
    });
});
