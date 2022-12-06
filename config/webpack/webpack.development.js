import { merge } from 'webpack-merge'
import ESLintPlugin from 'eslint-webpack-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'

import webpackConfiguration from '../../webpack.config.js'
import { paths } from './webpack.paths.js'

const cssModulesOptions = {
  modules: {
    auto: true,
    localIdentName: '[name]__[local]--[hash:base64:5]',
  },
}

/** @type {webpack.Configuration} */
const developmentConfig = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: paths.dist,
    hot: true,
    port: 5550,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: cssModulesOptions,
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: cssModulesOptions,
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new ESLintPlugin(), new ReactRefreshPlugin()],
}

const result = merge(webpackConfiguration, developmentConfig)

export default result
