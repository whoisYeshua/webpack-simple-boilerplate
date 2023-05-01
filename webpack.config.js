// @ts-check
import path from 'node:path'
import webpack from 'webpack'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'
// eslint-disable-next-line import/default
import CopyWebpackPlugin from 'copy-webpack-plugin'

import { paths } from './config/webpack/webpack.paths.js'

const isDevelopment = process.env.NODE_ENV === 'development'

const assetsFilename = () => (isDevelopment ? '[base]' : '[contenthash:8][ext][query]')

/**
 * Common part of Webpack config. Not used alone
 *
 * @type {webpack.Configuration}
 */
const commonConfig = {
  entry: {
    main: path.resolve(paths.src, 'index.tsx'),
    analytics: path.resolve(paths.src, 'analytics.ts'),
  },
  output: {
    clean: true,
    filename: isDevelopment ? `[name].js` : `[name].[contenthash:8].js`,
    path: paths.dist,
    assetModuleFilename: `assets/${assetsFilename()}`,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    plugins: [new TsconfigPathsPlugin()],
  },
  target: 'browserslist',
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      title: 'Webpack Simple Boilerplate',
      favicon: path.resolve(paths.public, 'favicon.ico'),
      template: path.resolve(paths.public, 'index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(paths.public, 'static'),
          to: paths.dist,
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.([jt]sx|[cm]?[jt]s)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(avif|webp|png|jpg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        type: 'asset',
      },
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ['@svgr/webpack'],
      },
      {
        test: /\.xml$/,
        use: ['xml-loader'],
      },
      {
        test: /\.csv$/,
        use: ['csv-loader'],
      },
    ],
  },
}

export default commonConfig
