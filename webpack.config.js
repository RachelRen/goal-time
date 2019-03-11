const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HappyPack = require('happypack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const devMode = process.env.NODE_ENV !== 'production';

const config = {
    entry: {
        // app: ['whatwg-fetch', './src/index.js'],
        index: ['./src/index'],
        // vendor: ['react', 'react-dom','react-router', 'react-router-dom','react-router-config']
    },
    output: {
        filename: 'js/[name].js',
        path: path.join(__dirname, './build'),
    },
    devServer: {
	    contentBase: path.join(__dirname, './build'),
	    // publicPath: '/',
	    historyApiFallback: true,
	    inline: true,
	    port: 3000,
        host: '0.0.0.0',
        proxy: {
            '/api/*': {
                target: "http://localhost:10234",
                secure: false
            }
        },
	    // disableHostCheck: true,
	    hot: true,
    },
    module: {
        rules: [/*{
            test: /\.tsx?$/,
            use: ['happypack/loader?id=tsx'],
        },*/{
            test: /\.tsx?$/,
            use: [{
                loader: 'babel-loader',
                // options: {
                //     presets: ['@babel/preset-env'],
                // }
            }, {
                loader: 'ts-loader'
            }],
        },/*{
            test: /\.tsx$/,
            exclude: /node_modules/,
            use: ['happypack/loader?id=babel'],
            /* use: {
				loader: 'babel-loader',
				options: {
					presets: ["react", "env", "stage-2"],
					//plugins: ["transform-runtime"]
				}
			}
        },*/ {
            test: /\.css?$/,
            use: [
                'style-loader',
          		'css-loader'
          	],
        },{
            test: /\.scss?$/,
            use: [
                'style-loader',
          		'css-loader',
                'postcss-loader',
                'sass-loader'
          	],
        }, {
            test: /\.(woff|svg|eot|ttf)\??.*$/,
	        use: {
	          	loader: 'url-loader',
	        },
        }, {
            test: /\.(png|gif|jpg|jpeg)$/,
	        use: {
	          	loader: 'url-loader',
	          	options: {
	            	name: './assets/images/[name].[ext]',
	            	limit: 100,
	          	},
	        },
        }],
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
    resolve: {
        alias: {
            Src: path.resolve(__dirname, './src'),
            Page: path.resolve(__dirname, './src/page'),
            Components: path.resolve(__dirname, './src/components'),
            Util: path.resolve(__dirname, './src'),
            Redux: path.resolve(__dirname, './src/redux'),
            Images: path.resolve(__dirname, './src/assets/images'),
            // Src: path.resolve(__dirname, './src'),
        },
        modules: [path.resolve(__dirname, 'node_modules')],
        //extensions: ['.js', '.json'],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devtool: 'source-map',
    plugins: [
        new HotModuleReplacementPlugin(),
        new NamedModulesPlugin(),
        // new HappyPack({
        //     id: 'tsx',
        //     loaders: [{
        //         path: 'ts-loader',//用关键字path
        //         query: { happyPackMode: true }
        //     }],
        // }),
        new CleanWebpackPlugin(['build'], {
            exclude: ['polyfill.dll.js', 'polyfill.manifest.json', 'vendor.dll.js', 'vendor.manifest.json'],
        }),
        // new BundleAnalyzerPlugin(),
        // new HappyPack({
	    //   	id: 'babel',
	    //   	loaders: ['babel-loader?cacheDirectory'],
	    // }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            // chunks: ['vendor.dll', 'index'],
            title: 'My index',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
	      	filename: '[name].css',
	      	disable: true,
	    }),
        // new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true })
	    // new DllReferencePlugin({
	    // 	context: __dirname,
	    //   	manifest: require('./build/vendor.manifest.json'),
	    // }),
	    // new DllReferencePlugin({
	    // 	context: __dirname,
	    //   	manifest: require('./build/polyfill.manifest.json'),
	    // }),
    ],
};
module.exports = config;

