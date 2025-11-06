module.exports = {
	testEnvironment: 'node',
	coverageDirectory: 'coverage',
	collectCoverageFrom: [
		'src/**/*.js',
		'!src/**/*.test.js',
		'!**/node_modules/**',
	],
	coverageThreshold: {
		global: {
			branches: 75,
			functions: 80,
			lines: 75,
			statements: 80,
		},
	},
	testMatch: [
		'**/test/**/*.test.js',
	],
	coverageReporters: [
		'text',
		'lcov',
		'json',
		'html',
	],
}
