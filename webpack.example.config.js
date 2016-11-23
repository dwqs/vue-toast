/**
 * Created by pomy on 16/4/7.
 */

var path = require('path');

var extensions = ['','.js','.jsx','.vue'];

module.exports = {
    entry: path.resolve(__dirname, './example/index.js'),

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './example/dist')
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