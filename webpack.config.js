/**
 * Created by pomy on 16/4/7.
 */

var path = require('path');

var extensions = ['','.js','.jsx','.vue'];

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),

    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './lib'),
        library: 'Toast',
        libraryTarget: 'umd'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/ 
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test:/\.css$/,
                loader:'vue-style!css'
            },
            {
                test: /\.less$/,
                loader: 'vue-style!css!less'
            }
        ]
    },

    resolve: {
        extensions: extensions
    }
};