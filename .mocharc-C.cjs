module.exports = {
	diff: true,
	extension: ['js','ts'],
	spec: [
		'./tests/case-C.spec.*'
	],
	loader: 'ts-node/esm',
	//require: 'ts-node/register',
	'watch-files': [
		'src',
		'tests'
	]
};
