const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Config
const HRM_HOST = '0.0.0.0';
const HRM_PORT = 6677;

module.exports = {
	mode: 'development',
	entry: {
		vendors: ['styled-components'],
		app: './src/index.tsx'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.html$/i,
				loader: 'html-loader'
			}
		]
	},
	devtool: 'inline-source-map',
	devServer: {
		host: HRM_HOST,
		port: HRM_PORT,
		hot: true,
		contentBase: './dist',
		watchContentBase: true,
		inline: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			chunks: ['app']
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	optimization: {
		splitChunks: {
			chunks: 'async',
			minChunks: 1,
			minSize: 1,
			maxInitialRequests: Infinity,
			maxAsyncRequests: Infinity,

			cacheGroups: {
				default: false
			}
		}
	},
	resolve: {
		modules: [
			path.resolve(__dirname, 'src/'),
			path.resolve(__dirname, 'node_modules/')
		],
		extensions: ['.tsx', '.ts', '.js', '.json']
	},
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[chunkhash].chunk.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: `http://${HRM_HOST}:${HRM_PORT}/`
	}
};
