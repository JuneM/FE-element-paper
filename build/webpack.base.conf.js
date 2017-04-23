var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'asset': resolve('src/assets'),
      'components': resolve('src/components'),
      'services:': resolve('src/services')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {  
        test: /\.css$/,                  
        // 将样式抽取出来为独立的文件
        loader: ExtractTextPlugin.extract({fallback:"style-loader", use:["css-loader","postcss-loader"]}),
        exclude: /node_modules/
      },
      // 使用less-loader、autoprefixer-loader、css-loader和style-loade 加载 .less 结尾的文件
      {  
        test: /\.less$/,                  
        // 将样式抽取出来为独立的文件scss
        // use:['style-loader','css-loader','autoprefixer-loader','sass-loader'], 
        use:['style-loader','css-loader','autoprefixer-loader','less-loader'], 
        exclude: /node_modules/
      }        
    ]
  }
}
