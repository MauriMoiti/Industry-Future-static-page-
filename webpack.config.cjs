    const webpack = require('webpack');
    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const MiniCssExtractPlugin = require("mini-css-extract-plugin")

    module.exports = {
    mode: 'production',
    entry:  './js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        // {
        //     test: /\.html$/,
        //     use: 'html-loader'
        // },
        {
            test: /\.(png|jpg|gif|svg)$/,
            type: 'asset/resource',
            generator: {
                filename: '[path][name].[ext]',
                context: path.resolve(__dirname, 'src')
            }
        },
    ]}, 
    
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },     
    devServer: {
        static: path.join(__dirname, '/'),
        compress: true,
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
    }), 
    new MiniCssExtractPlugin()
    ],
};