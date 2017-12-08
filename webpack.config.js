'use strict';

var webpack = require('webpack');

module.exports = {
    // Entry point for static analyzer
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8081',
            'webpack/hot/dev-server',
            './js/main.js'
        ]
    },

    output: {
        // Where to build results
        path: __dirname + '/assets',

        // Filename to use in HTML
        filename: 'bundle.js',

        // Path to use in HTML
        publicPath: '/assets/'
    },

    resolve: {
        // Absolute path that contains modules
        root: __dirname,

        // Directory names to be searched for modules
        modulesDirectories: ['js', 'views', 'node_modules'],

        // Replace modules with other modules or paths for compatibility or convenience
        alias: {
            'underscore': 'lodash'
        }
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /(node_modules|bower_components)/
            },
        ]
    },
    devtool: '#inline-source-map'
};
