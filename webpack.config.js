'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {

  entry: './src/index.js',

  output: {
    filename: 'project.bundle.js',
    path: path.resolve(__dirname, 'build')
    // publicPath: '/build/',
  },
  
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
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true),
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