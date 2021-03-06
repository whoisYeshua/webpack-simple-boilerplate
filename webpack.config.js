import path from 'node:path'
import webpack from 'webpack'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'
// eslint-disable-next-line import/default
import CopyWebpackPlugin from 'copy-webpack-plugin'

import paths from './config/webpack/webpack.paths.js'

const isDevelopment = process.env.NODE_ENV === 'development'

const filename = extension =>
  isDevelopment ? `[name].${extension}` : `[name].[contenthash].${extension}`
const assetsFilename = () =>
  isDevelopment ? '[base]' : '[contenthash][ext][query]'

const commonConfig = {
  context: paths.src,
  entry: {
    main: './index.jsx',
    analytics: './analytics.ts',
  },
  output: {
    clean: true,
    filename: filename('js'),
    path: paths.dist,
    assetModuleFilename: `assets/${assetsFilename()}`,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    // alias: {
    //   '@assets': path.resolve(paths.public, 'assets'),
    //   '@styles': path.resolve(paths.src, 'styles'),
    //   '@': paths.src,
    // },
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
      title: 'Webpack',
      favicon: path.resolve(paths.public, 'assets', 'favicon.ico'),
      template: path.resolve(paths.public, 'index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(paths.public, 'assets', 'trash'),
          to: path.resolve(paths.dist, 'assets', assetsFilename()),
        },
      ],
    }),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.([jt]sx|[cm]?[jt]s)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(webp|png|jpg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)$/,
        type: 'asset',
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
