const path = require('path');
const os = require('os');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HappyPack = require('happypack');

const config = require('./config');
const vueLoaderConfig = require('./vue-loader-conf');
const utils = require('./utils')

const happyThreadPool = HappyPack.ThreadPool({
    size: os.cpus().length
})

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

console.log(resolve('node_modules'))

module.exports = {
    entry: {
        app: './index.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: 'table.js',
        publicPath: process.env.NODE_ENV === 'production' ?
            config.build.assetsPublicPath :
            config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', 'jsx'],
        alias: {
            '@': resolve('src'),
        },
        modules: [
            resolve('src'),
            resolve('node_modules')
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HappyPack({
            id: 'happybabel',
            loaders: ['babel-loader'],
            threadPool: happyThreadPool,
            verbose: true
        }),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.(jsx?|babel|es6)$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            ...utils.styleLoaders({
                sourceMap: config.build.productionSourceMap,
                // extract: true
            }),  
        ]
    }
}