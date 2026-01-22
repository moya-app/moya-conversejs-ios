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
        // Mark all dependencies as external (they'll be resolved at runtime)
        '@converse/skeletor',
        '@converse/skeletor/*',
        '@converse/openpromise',
        '@converse/log',
        'strophe.js',
        'dayjs',
        'dayjs/*',
        'lodash-es',
        'lodash-es/*',
        'dompurify',
        'filesize',
        'sizzle',
        'sprintf-js',
        'pluggable.js',
        'localforage-webextensionstorage-driver/*',
        'lit',
        'lit/*',
        'hsluv',
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
