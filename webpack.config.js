const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [{
    mode: 'development',
    entry: './src/renderer/index.js',
    devtool: 'cheap-module-source-map',
    target: 'web',
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
            }
        }, {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        hot: true,
        port: 3000,
    }
}];
