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
        clean: true
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
            test: /\.scss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        // {
        //     test: /\.html$/,
        //     use: 'html-loader'
        // },
        {
            test: /\.(png|jpg|WebP|AVIF|gif|svg)$/,
            type: 'asset/resource',
            generator: {
                filename: 'images/[path][name].[contenthash][ext]',
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
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css'  // para CSS
    })
    ],
};