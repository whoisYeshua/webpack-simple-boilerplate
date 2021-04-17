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
  plugins: [new ESLintPlugin()],
})
