'use strict';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let path = require('path');

module.exports = {
  mode: "development",
  entry: {app: './src/index.js'},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  devtool: "source-map",
  watch: true,

  module: {
    rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules'
        },
        {
            test: /\.scss$/,
            use: [
              'style-loader',
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: { sourceMap: true }
              }, {
                loader: 'postcss-loader',
              }, {
                loader: 'sass-loader',
                options: { sourceMap: true }
              }
            ]
        },
        {
            test: /\.css$/,
            use: [
              'style-loader',
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: { sourceMap: true }
              }, {
                loader: 'postcss-loader',
              }
            ]
        }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: '[name].css'})
  ],

};