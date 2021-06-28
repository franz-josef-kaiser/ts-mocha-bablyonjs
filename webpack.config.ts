const path = require( 'path' );

module.exports = {
	// bundling mode
	//mode: 'production',
	mode: 'development',
	entry: { main: './test/index.ts' },
	// file resolutions
	resolve: {
		extensions: [ '.ts', '.js' ],
	},
	// loaders
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader:  'ts-loader',
				options: {
					configFileName: path.resolve(__dirname, 'tsconfig.json')
				},
			},
		]
	}
}