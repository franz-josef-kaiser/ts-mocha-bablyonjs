module.exports = {
	diff: true,
	extension: ['js','ts'],
	spec: [
		'./tests/case-A.spec.ts'
	],
	loader: 'ts-node/esm',
	//require: 'ts-node/register',
	'watch-files': [
		'src',
		'tests'
	]
};
