const merge = require('webpack-merge')
const webpackBaseConf = require('./webpack.base.conf')

module.exports = merge(webpackBaseConf, {
    mode: 'production'
})