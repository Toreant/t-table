const merge = require('webpack-merge')
const webpackBaseConf = require('./webpack.base.conf')
const config = require('./config')
// const utils = require('./utils')

module.exports = merge(webpackBaseConf, {
    mode: 'development',
    output: {
        path: config.build.assetsRoot,
        filename: 'table.dev.js',
        publicPath: config.dev.assetsPublicPath
    },
    
    devtool: '#inline-source-map',
})