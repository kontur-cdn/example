var path = require('path');
var webpack = require('webpack');
var KonturCdnPlugin = require("@skbkontur/kontur-cdn-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: ['./src/index.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js',
    },
    devServer: {
        hot: false,
        inline: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new KonturCdnPlugin({
            bundles: ['react--react-dom--redux'],
            cdn: "https://kontur-cdn.github.io",
        }),
    ]
};
