module.exports = {
	diff: true,
	extension: ['js','ts'],
	spec: [
		'./tests/case-D.spec.*'
	],
	loader: 'ts-node/esm',
	'watch-files': [
		'src',
		'tests'
	]
};
