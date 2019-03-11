const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


const config = {
    entry: {
        // app: ['whatwg-fetch', './src/index.js'],
        index: ['./src/index'],
        // vendor: ['react', 'react-dom','react-router', 'react-router-dom','react-router-config']
    },
    output: {
        filename: 'js/[name].js',
        publicPath: '/',
        path: path.join(__dirname, 'build'),
    },
    devServer: {
        contentBase: path.join(__dirname, './build'),
        publicPath: '/',
        historyApiFallback: {
            index: '/',
        },
        inline: true,
        port: 4000,
        host: '0.0.0.0',
        // disableHostCheck: true,
    },
    
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'common',
        },
        runtimeChunk: {
            name: 'runtime',
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader'],
            },{
                test: /\.s?css$/,
                use: ['style-loader','css-loader','sass-loader']
            },{
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    resolve: {
        
        modules: [path.resolve(__dirname, 'node_modules')],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            // chunks: ['vendor.dll', 'index'],
            title: 'My index',
            filename: 'index.html',
        }),

    ]
};
module.exports = config;
