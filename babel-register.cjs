// @link https://babeljs.io/docs/en/babel-register
require( '@babel/register' )({
	cache: false,
	extensions: ['.js', '.ts',],
	plugins: [
		'@babel/plugin-transform-modules-commonjs',
		'@babel/proposal-class-properties',
		'@babel/plugin-transform-typescript',
	],
	presets: [
		[
			'@babel/preset-env',
			{
				"modules": false,
				targets: {
					node: 'current',
				},
			},
		],
		'@babel/preset-typescript',
	],
} );