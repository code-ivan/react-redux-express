'use strict' // eslint-disable-line strict

// Imports
// -------
const path = require('path')
const webpack = require('webpack')

const WebpackToolsPlugin = require('webpack-isomorphic-tools/plugin')
const webpackToolsConfig = require('./webpack.isomorphic.tools')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

// Globals
// -------
const NODE_ENV = process.env.NODE_ENV || 'development' // Used to send globals into the main application for use
const __DEV__ = NODE_ENV !== 'production'
const __PROD__ = NODE_ENV === 'production'
const __SERVER__ = false
const __CLIENT__ = true

let config

if (__DEV__) {
  config = {
    context: path.join(__dirname, 'src'),
    entry: {
      app: [
        'webpack-hot-middleware/client', // Removes the need for webpack-dev-server for hot reloading. Can use existing
        'react-hot-loader/patch', // Put this in just after webpack-hot-loader
        './client.js' // Final array item is returned as entry point
      ]
    },
    resolve: {
      extensions: ['.js']// enables you to leave off extensions when importing,
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'app.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['react', ['es2015', { modules: false }], 'stage-0'],
            plugins: ['react-hot-loader/babel'] // Added to enable react-hot-loader library
          },
          include: path.join(__dirname, 'src')
        },
        {
          test: /\.scss$/,
          loaders: [            
            'style-loader',
            'css-loader?modules&localIdentName=[local]__[hash:base64:4]&importLoaders=1&sourceMap',
            'postcss-loader?sourceMap',
            'sass-loader?sourceMap'
          ]
        }
      ]
    },
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(), // All next three plugins are connected to Hot Module Replacement
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.DefinePlugin({
        __DEV__,
        __PROD__,
        __SERVER__,
        __CLIENT__
      }),
      new WebpackToolsPlugin(webpackToolsConfig).development(__DEV__)
    ],
    devtool: 'inline-source-map'
  }
}

if (__PROD__) {
  config = {
    context: path.join(__dirname, 'src'),
    entry: {
      app: './client.js'
    },
    resolve: {
      extensions: ['.js']
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'app.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['react', ['es2015', { modules: false }], 'stage-0']
          },
          include: path.join(__dirname, 'src')
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader?modules&localIdentName=[hash:base64:4]&importLoaders=1&sourceMap',
              'postcss-loader?sourceMap',
              'sass-loader?sourceMap'
            ]
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('app.css'),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
        __DEV__,
        __PROD__,
        __SERVER__,
        __CLIENT__
      }),
      new WebpackToolsPlugin(webpackToolsConfig).development(__DEV__)
    ],
    devtool: 'source-map'
  }
}

module.exports = config
