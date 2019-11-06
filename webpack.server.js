const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    //Inform webpack that we're building a bundle
    // for nodeJS, rather than for the browser

    target: 'node',

    //tell webpack the root file of 
    //our application 

    entry :'./index.js',

    //tell webpack wher to put the output file
    //of our server application 

    output: {
        filename :'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals : [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);