const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',

  // devServer: {
  //   contentBase: './build',
  //   // port: 8080,
  // },

  entry: './src/index.js',

  // output: {
  //   path: path.resolve(__dirname, 'build'),
  //   filename: 'project.bundle.js'
    
  // },
  
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
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, '/'),
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, './src/assets/html/namesForm.html'), to: path.resolve(__dirname, 'dist') },
      ],
    }),
    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true),
    }),
    // new HtmlWebpackPlugin({
    //   template: './index.html',
    // }),
    new HtmlWebpackPlugin()
  ],
};
