const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const isDevelopment = process.env.NODE_ENV === 'development'
const isProduction = !isDevelopment
const target = isProduction ? 'browserslist' : 'web'

const filename = extension =>
  isDevelopment ? `[name].${extension}` : `[name].[contenthash].${extension}`
const assetsFilename = () =>
  isDevelopment ? '[base]' : '[contenthash][ext][query]'

const plugins = [
  new HTMLWebpackPlugin({
    title: 'Webpack',
    favicon: './assets/favicon.ico',
    template: './template.html',
    filename: 'index.html',
    minify: {
      collapseWhitespace: isProduction,
    },
  }),
  new CleanWebpackPlugin(),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, 'src/assets/trash'),
        to: path.resolve(__dirname, `dist/assets/${assetsFilename()}`),
      },
    ],
  }),
  new MiniCssExtractPlugin({
    filename: filename('css'),
  }),
]

if (isDevelopment) {
  plugins.push(new ESLintPlugin())
}

if (isProduction) {
  plugins.push(new BundleAnalyzerPlugin())
}

module.exports = {
  target,
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.jsx',
    analytics: './analytics.ts',
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: `assets/${assetsFilename()}`,
  },
  resolve: {
    extensions: ['.js', '.json', '.png', '.css', '.scss'],
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimization: {
    minimize: isProduction,
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
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    port: 5550,
    open: true,
    hot: true,
  },
  devtool: isDevelopment ? 'source-map' : false,
  plugins,
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
        type: 'asset/inline',
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
