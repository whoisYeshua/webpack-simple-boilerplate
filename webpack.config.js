// @ts-check
import path from 'node:path'
import webpack from 'webpack'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'

import { paths } from './config/webpack/webpack.paths.js'

const isDevelopment = process.env.NODE_ENV === 'development'

const assetsFilename = () => (isDevelopment ? '[base]' : '[contenthash:8][ext][query]')

/**
 * Common part of Webpack config. Not used alone
 *
 * @type {webpack.Configuration}
 */
const commonConfig = {
  entry: path.resolve(paths.src, 'index.tsx'),
  output: {
    clean: true,
    filename: isDevelopment ? `[name].js` : `[name].[contenthash:8].bundle.js`,
    chunkFilename: isDevelopment ? `[name].js` : `[name].[contenthash:8].chunk.js`,
    path: paths.dist,
    assetModuleFilename: `assets/${assetsFilename()}`,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    plugins: [new TsconfigPathsPlugin()],
  },
  target: 'browserslist',
  optimization: {
    chunkIds: 'named',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        // React and react-rotuer
        react: {
          test: /[/\\]node_modules[/\\](react|react-dom|scheduler|react-router|react-router-dom|@remix-run)[/\\]/,
          name: 'react-vendor',
          chunks: 'all',
          priority: 2, // this chunk will take priority over other chunks, if they will be presented later
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.EnvironmentPlugin({
      EXPERIMENTAL_SHOW_POST_COMPONENT: true,
      SENTRY_DSN: process.env.SENTRY_DSN ?? '',
      BUILD_TIME: new Date().toISOString(),
    }),
    new HTMLWebpackPlugin({
      title: 'Webpack Simple Boilerplate',
      favicon: path.resolve(paths.public, 'favicon.ico'),
      template: path.resolve(paths.public, 'index.html'),
      filename: 'index.html',
      templateParameters: {
        descriptionContent:
          'ESM Webpack 5 boilerplate (SASS, PostCSS, ESLint, Prettier, Styleint, husky, Babel, React, TS) also Docker and NGINX',
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
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
