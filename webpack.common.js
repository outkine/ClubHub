var path = require('path')
var autoprefixer = require('autoprefixer')

var APP_DIR = path.resolve('src')
var BUILD_DIR = path.resolve('docs')

module.exports = {
  entry: ['babel-polyfill', path.resolve(APP_DIR, 'index.jsx')],

  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  devServer: {
    hot: true,
    contentBase: BUILD_DIR,
    historyApiFallback: true
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      shared: path.resolve(APP_DIR, 'shared')
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-0', 'react'],
          plugins: ['transform-decorators-legacy']
        }
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|otf|svg)$/,
        include: APP_DIR,
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    ]
  }
}
