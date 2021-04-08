const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
        analytics: './analytics.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[hash][ext][query]',
    },
    resolve: {
        extensions: ['.js', '.json', '.png'],
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@models': path.resolve(__dirname, 'src/models'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@': path.resolve(__dirname, 'src'),
        },
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    devServer: {
        port: 5550,
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Webpack',
            favicon: './assets/favicon.ico',
            template: './template.html',
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/trash'),
                    to: path.resolve(__dirname, 'dist/assets'),
                },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
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
