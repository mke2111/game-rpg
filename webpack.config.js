'use strict';

const webpack = require('webpack');
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/index.js',

  output: {
    filename: 'project.bundle.js',
    path: path.resolve(__dirname, 'build')
    // publicPath: '/build/',
  },

  // plugins: [new HtmlWebpackPlugin({
  //   template: 'index.html',
  // }),
  
  module: {

    rules: [

      {
        test: [/\.vert$/, /\.frag$/],
        use: 'raw-loader'
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|ogg|wav|mp3)$/,
        loader: 'file-loader',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true),
    }),
  ],

  devServer: {
    port: 8080,
  },
};

// {
//   test: /\.(png|jpe?g|gif|wav|mp3)$/i,
//   use: [
//     {
//       loader: 'file-loader',
//       options: {
//         name: '[name].[contenthash].[ext]',
//         outputPath: 'images',
//       },
//     },
//   ],
// },