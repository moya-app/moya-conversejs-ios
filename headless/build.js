#!/usr/bin/env node
/**
 * Build script for @converse/headless
 * Creates ESM and CJS bundles with source maps
 */
const esbuild = require('esbuild');
const path = require('path');

const commonOptions = {
    entryPoints: ['./index.js'],
    bundle: true,
    sourcemap: true,
    // Preserve legal comments (/*! ... */) inline in output
    legalComments: 'inline',
    external: [
        // @converse/skeletor stays external — iOS code imports Model/Collection
        // from it directly (omemo.service.ts defines OMEMO models extending these
        // classes), so the iOS app installs skeletor at its node_modules root. The
        // headless dist's internal imports of @converse/skeletor resolve to the
        // same iOS-installed copy at runtime, guaranteeing a single Model/Collection
        // class identity across iOS code and headless internals (required for
        // instanceof checks and class extension).
        '@converse/skeletor',
        '@converse/skeletor/*',
        // Node-only peer deps of strophe.js's Node ESM build. The browser ESM
        // path doesn't touch these, but the strophe.js Node entry imports them
        // statically. v13 of converse.js notes (CHANGES.md): "Moved jsdom and ws
        // from optionalDependencies to peerDependencies." Leaving them external
        // means esbuild doesn't try to resolve them; iOS browser runtime never
        // executes the Node entry path so the unresolved imports are harmless.
        'jsdom',
        'ws',
        // All other dependencies (lit, hsluv, dompurify, sizzle, sprintf-js,
        // pluggable.js, dayjs, lodash-es, filesize, @converse/log,
        // @converse/openpromise, strophe.js browser ESM, localforage-webext-
        // storage-driver) are bundled into the dist below so iOS doesn't have
        // to install them. Matches the v7-era pattern: iOS picks up the entire
        // converse runtime through a single GitHub install of this repo.
    ],
};

async function build() {
    console.log('Building @converse/headless dist files...\n');

    try {
        // ESM build (preserve comments for TOFIND verification)
        await esbuild.build({
            ...commonOptions,
            outfile: './dist/converse-headless.esm.js',
            format: 'esm',
            platform: 'browser',
            // Don't minify - keep all comments including TOFIND markers
            minify: false,
            keepNames: true,
        });
        console.log('✓ Built converse-headless.esm.js');

        // ESM minified build (comments stripped - expected)
        await esbuild.build({
            ...commonOptions,
            outfile: './dist/converse-headless.min.esm.js',
            format: 'esm',
            platform: 'browser',
            minify: true,
        });
        console.log('✓ Built converse-headless.min.esm.js');

        // CJS build (preserve comments for TOFIND verification)
        await esbuild.build({
            ...commonOptions,
            outfile: './dist/converse-headless.js',
            format: 'cjs',
            platform: 'node',
            // Don't minify - keep all comments including TOFIND markers
            minify: false,
            keepNames: true,
        });
        console.log('✓ Built converse-headless.js');

        // CJS minified build (comments stripped - expected)
        await esbuild.build({
            ...commonOptions,
            outfile: './dist/converse-headless.min.js',
            format: 'cjs',
            platform: 'node',
            minify: true,
        });
        console.log('✓ Built converse-headless.min.js');

        console.log('\n✅ Build complete!');

        // Verify TOFIND markers in output
        const fs = require('fs');
        const esmContent = fs.readFileSync('./dist/converse-headless.esm.js', 'utf-8');
        const tofindCount = (esmContent.match(/TOFIND/g) || []).length;
        console.log(`\n📋 TOFIND markers in ESM build: ${tofindCount}`);

    } catch (error) {
        console.error('Build failed:', error);
        process.exit(1);
    }
}

build();
