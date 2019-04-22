/* jslint esnext: true */
/* 4 properties: entry, output, loaders, plugins */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        add: ['babel-polyfill', './src/js/addSrc.js'],
        archive: ['babel-polyfill', './src/js/archiveSrc.js']
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
