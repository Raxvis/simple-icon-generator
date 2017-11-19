const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: [
		'./src/babel-polyfill.js',
		'./src/index.js'
	],
	module: {
		rules: [
			{
				exclude: [path.resolve(__dirname, 'node_modules')],
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',
				options: {
					plugins: [
						'transform-async-to-generator',
						'transform-es2015-modules-commonjs',
						'transform-object-rest-spread'
					],
					presets: [
						[
							'env',
							{ targets: { browsers: ['last 2 versions'] } }
						],
						['react'],
						['stage-2']
					]
				},
				test: /\.jsx?$/
			}
		]
	},
	output: { filename: 'dist/bundle.js' },
	performance: {
		assetFilter: (assetFilename) => (assetFilename.endsWith('.js')),
		hints: 'warning',
		maxAssetSize: 1000000,
		maxEntrypointSize: 2000000
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				'drop_console': false,
				warnings: false
			}
		}),
		new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') })
	],
	target: 'web'
};