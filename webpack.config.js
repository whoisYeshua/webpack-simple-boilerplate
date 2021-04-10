const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

console.log('IS DEV: ', isDev)
console.log('ENV: ', process.env.NODE_ENV)

const filename = ext => (isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`)
const assetsFilename = () => (isDev ? `[base]` : `[contenthash][ext][query]`)

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
        analytics: './analytics.js',
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
        minimize: isProd,
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
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Webpack',
            favicon: './assets/favicon.ico',
            template: './template.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: isProd,
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
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
