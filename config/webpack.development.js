const { merge } = require('webpack-merge')
const ESLintPlugin = require('eslint-webpack-plugin')
const webpackConfiguration = require('../webpack.config')

const paths = require('./paths')

module.exports = merge(webpackConfiguration, {
  mode: 'development',
  devtool: 'source-map',
  target: 'web',
  devServer: {
    contentBase: paths.dist,
    port: 5550,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new ESLintPlugin()],
})
