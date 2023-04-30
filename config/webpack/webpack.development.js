// @ts-check
import { merge } from 'webpack-merge'
import ESLintPlugin from 'eslint-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'

import webpackConfiguration from '../../webpack.config.js'
import { paths } from './webpack.paths.js'

const cssModulesOptions = {
  modules: {
    auto: true,
    localIdentName: '[name]__[local]--[hash:base64:5]',
  },
}

/**
 * Webpack config for Development
 *
 * @type {import('webpack').Configuration & import('webpack-dev-server').Configuration}
 */
const developmentConfig = {
  mode: 'development',
  devtool: 'eval-source-map',
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
  plugins: [
    new ESLintPlugin({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    new ForkTsCheckerWebpackPlugin(),
    new ReactRefreshPlugin(),
  ],
}

const result = merge(webpackConfiguration, developmentConfig)

export default result
