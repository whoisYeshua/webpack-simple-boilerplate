import { merge } from 'webpack-merge'
import ESLintPlugin from 'eslint-webpack-plugin'

import webpackConfiguration from '../webpack.config.js'
import paths from './paths.js'

const developmentConfig = merge(webpackConfiguration, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: paths.dist,
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

export default developmentConfig
