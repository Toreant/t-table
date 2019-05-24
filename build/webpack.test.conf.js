const merge = require('webpack-merge')
const webpack = require('webpack')
const webpackBaseConf = require('./webpack.base.conf')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const config = require('./config')

module.exports = merge(webpackBaseConf, {
    mode: 'development',
    // externals: [nodeExternals()],
    // devtool: 'inline-cheap-module-source-map',
    output: {
        path: path.resolve(process.cwd(), './dist'),
        filename: '[name]-[hash].js',
        publicPath: '/dist/',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"testing"'
            }
        })
    ]
})