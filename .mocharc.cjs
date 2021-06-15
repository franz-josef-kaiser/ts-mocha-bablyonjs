module.exports = {
	diff: true,
	extension: ['js','ts'],
	spec: [
		'./tests/*.spec.{js,ts}'
	],
	loader: 'ts-node/esm',
	//require: 'ts-node/register',
	'watch-files': [
		'src',
		'tests'
	]
};
