/* global __dirname, module */
const common = require("./webpack.common.js");
const path = require('path');
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    entry: {
        "converse-headless-worker": path.resolve(__dirname, '../src/headless/utils/webworker/webworker-compatibility.js'),
        "converse-headless-worker.min": path.resolve(__dirname, '../src/headless/utils/webworker/webworker-compatibility.js'),
    },
    output: {
        path: path.resolve(__dirname, '../src/headless/dist'),
        filename: "[name].js",
        chunkFilename: '[name].js',
        globalObject: 'self',
        publicPath: '',
        library: {
            type: 'module'
        },
    },
    experiments: {
        outputModule: true
    },
    mode: "production",
    optimization: {
        // Completely disable code splitting
        splitChunks: false,
        runtimeChunk: false,
        minimize: true
    },
    resolve: {
        fallback: {
            "crypto": false,
            "fs": false,
            "path": false,
            "document": false
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    /src\/headless\/utils\/webworker/,
                    /3rdparty/,
                    /src\/headless\/utils\/libsignal-protocol/
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}); 