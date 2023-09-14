    const webpack = require('webpack');
    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
    entry:  '/js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
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
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.html$/,
            use: 'html-loader'
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    context: path.resolve(__dirname, 'src')
                }
            }
        }
    ]},
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
    }), 
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    })
    ],
};