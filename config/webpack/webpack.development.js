// @ts-check
import path from 'node:path'
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
 * @type {import('webpack').Configuration}
 */
const developmentConfig = {
  mode: 'development',
  devtool: 'inline-nosources-cheap-source-map',
  devServer: {
    open: true,
    static: path.resolve(paths.public, 'static'),
    hot: true,
    port: 5550,
    historyApiFallback: true, // Enables fallback to index.html for all routes. Required for proper client-side routing in SPA
    proxy: [
      {
        context: ['/api'],
        target: 'https://jsonplaceholder.typicode.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    ],
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
      failOnError: false, // Setting this to true (default) will cause the dev server to fail completely if there are lint errors. Only a full server restart (Ctrl + C) will recover from this state
    }),
    new ForkTsCheckerWebpackPlugin(),
    new ReactRefreshPlugin({ overlay: false }),
  ],
  stats: 'minimal',
}

const result = merge(webpackConfiguration, developmentConfig)

export default result
