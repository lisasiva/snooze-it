/* jslint esnext: true */
/* 4 properties: entry, output, loaders, plugins */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        add: ['babel-polyfill', './src/js/addSrc.js'],
        archive: ['babel-polyfill', './src/js/archiveSrc.js'],
        register: ['babel-polyfill', './src/js/registerSrc.js'],
        login: ['babel-polyfill', './src/js/loginSrc.js'],
        index: ['babel-polyfill', './src/js/indexSrc.js'],
        snoozed: ['babel-polyfill', './src/js/snoozedSrc.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/[name].bundle.js"
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'add.html',
            template: './src/add.html',
            chunks: ['add']
        }),
        new HtmlWebpackPlugin({
            filename: 'archive.html',
            template: './src/archive.html',
            chunks: ['archive']
        }),
        new HtmlWebpackPlugin({
            filename: 'register.html',
            template: './src/register.html',
            chunks: ['register']
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: './src/login.html',
            chunks: ['login']
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'snoozed.html',
            template: './src/snoozed.html',
            chunks: ['snoozed']
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
