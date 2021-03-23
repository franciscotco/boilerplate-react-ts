const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: {
		vendors: ['styled-components'],
		app: ['./src/app.tsx']
	},
	output: {
		filename: '[name].[contenthash].js',
		chunkFilename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			chunks: ['app']
		})
	],
	optimization: {
		splitChunks: {
			chunks: 'async',
			minChunks: 1,
			minSize: 1,
			maxInitialRequests: Infinity,
			maxAsyncRequests: Infinity,

			cacheGroups: {
				// Cancels Webpack's default 'main' cache group
				default: false,

				// Overrides Webpack's default 'vendor' cache group
				vendors: {
					name: 'vendors',
					test: 'vendors',
					chunks: 'initial',
					priority: 30
				},

				// Custom app bundle
				main: {
					name: 'app',
					test: 'app',
					chunks: 'initial',
					priority: 10
				}
			}
		}
	},
	resolve: {
		modules: [
			path.resolve(__dirname, 'src/'),
			path.resolve(__dirname, 'node_modules/')
		],
		extensions: ['.tsx', '.ts', '.js', '.json']
	}
};
