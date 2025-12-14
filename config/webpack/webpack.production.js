// @ts-check
import path from 'node:path'
import { merge } from 'webpack-merge'
import { RsdoctorWebpackPlugin } from '@rsdoctor/webpack-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { sentryWebpackPlugin } from '@sentry/webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

import webpackConfiguration from '../../webpack.config.js'
import { paths } from './webpack.paths.js'

const isCi = process.env.CI === 'true'

/**
 * Webpack config for Production
 *
 * @type {import('webpack').Configuration}
 */
const productionConfig = {
  mode: 'production',
  devtool: 'source-map',
  performance: {
    maxEntrypointSize: 512_000,
    maxAssetSize: 512_000,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(paths.public, 'static'),
          to: paths.dist,
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].bundle.css',
      chunkFilename: '[name].[contenthash:8].chunk.css',
    }),
    new RsdoctorWebpackPlugin({
      disableClientServer: isCi,
      output: {
        mode: isCi ? 'brief' : 'normal',
      },
    }),
    sentryWebpackPlugin({
      authToken: process.env.SENTRY_AUTH_TOKEN,
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
      sourcemaps: {
        filesToDeleteAfterUpload: '**/*.map',
      },
      release: {
        name: process.env.RELEASE_TAG,
      },
      telemetry: false,
    }),
  ],
}

export default merge(webpackConfiguration, productionConfig)
