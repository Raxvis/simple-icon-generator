const path = require('path');

module.exports = {
	devtool: 'eval-source-map',
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
	target: 'web',
	watch: true
};