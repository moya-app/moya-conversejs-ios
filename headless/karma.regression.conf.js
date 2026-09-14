/* global module */
/**
 * Standalone config for tests/regression/*.spec.js.
 *
 * These specs import the built ESM bundle directly (with an import map for the
 * external @converse/skeletor), so they don't depend on the global that
 * karma.conf.js's suite expects. Run explicitly:
 *
 *   CHROME_BIN="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
 *     npx karma start karma.regression.conf.js
 */
module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            { pattern: 'dist/converse-headless.esm.js', included: false, served: true, type: 'module' },
            { pattern: 'dist/*.js.map', included: false },
            {
                pattern: 'node_modules/@converse/skeletor/dist/skeletor.esm.js',
                included: false,
                served: true,
                type: 'module',
            },
            { pattern: 'node_modules/@converse/skeletor/dist/*.map', included: false },
            { pattern: 'tests/regression/*.spec.js', type: 'module' },
        ],
        reporters: ['progress'],
        port: 9877,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['ChromeHeadless'],
        singleRun: true,
        concurrency: Infinity,
    });
};
