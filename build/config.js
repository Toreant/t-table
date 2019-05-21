const path = require('path')

module.exports = {
    dev: {
        assetsPublicPath: '/',
        assetsSubDirectory: 'static'
    },
    build: {
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '/',
        assetsSubDirectory: 'static',
        productionSourceMap: false
    }
};