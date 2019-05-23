const merge = require('webpack-merge')
const webpackBaseConf = require('./webpack.base.conf')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')

module.exports = merge(webpackBaseConf, {
    mode: 'production',
    plugins: [
        new ParallelUglifyPlugin({
            cacheDir: '.cache/',
            uglifyJS: {
                output: {
                    comments: false
                },
                compress: {
                    // warnings: false,
                    drop_console: true
                }
            }
        })
    ]
})