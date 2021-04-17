const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const paths = require('./config/paths')

const isDevelopment = process.env.NODE_ENV === 'development'

const filename = extension =>
  isDevelopment ? `[name].${extension}` : `[name].[contenthash].${extension}`
const assetsFilename = () =>
  isDevelopment ? '[base]' : '[contenthash][ext][query]'

module.exports = {
  context: paths.src,
  entry: {
    main: './index.jsx',
    analytics: './analytics.ts',
  },
  output: {
    filename: filename('js'),
    path: paths.dist,
    assetModuleFilename: `assets/${assetsFilename()}`,
  },
  resolve: {
    extensions: ['.js', '.json', '.png', '.css', '.scss'],
    alias: {
      '@assets': path.resolve(paths.src, 'assets'),
      '@models': path.resolve(paths.src, 'models'),
      '@styles': path.resolve(paths.src, 'styles'),
      '@': paths.src,
    },
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Webpack',
      favicon: path.resolve(paths.src, 'assets', 'favicon.ico'),
      template: path.resolve(paths.src, 'template.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(paths.src, 'assets', 'trash'),
          to: path.resolve(paths.dist, 'assets', assetsFilename()),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?[jt]sx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
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
