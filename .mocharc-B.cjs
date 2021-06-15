module.exports = {
	diff: true,
	extension: ['js','ts'],
	spec: [
		'./tests/case-B.spec.ts'
	],
	loader: 'ts-node/esm',
	//require: 'ts-node/register',
	'watch-files': [
		'src',
		'tests'
	]
};
