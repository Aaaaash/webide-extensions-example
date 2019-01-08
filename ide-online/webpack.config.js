const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar');
const MonacoWebPackPlugin = require('monaco-editor-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);

module.exports = {
  entry: path.join(ROOT_PATH, 'src/app.ts'),
  output: {
    path: path.join(ROOT_PATH, 'build'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].chunk.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js'],
  },
  node: {
    fs: 'empty',
    child_process: 'empty',
    net: 'empty',
    crypto: 'empty'
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
        minChunks: 1,
        chunks: 'all',
        cacheGroups: {
          commons: {
            name: "commons",
            chunks: "initial",
            minChunks: 2
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'IDE-Online',
      filename: 'index.html',
      template: path.join(ROOT_PATH, 'index.html'),
    }),
    new WebpackBar({
      profile: true
    }),
    new MonacoWebPackPlugin({
      languages: ['TypeScript'],
      features: [],
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.css?$/, use: ["style-loader", "css-loader"] },
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    disableHostCheck: true,
    port: 8899,
  },
}
