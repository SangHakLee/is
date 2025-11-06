module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	roots: ['<rootDir>/test'],
	testMatch: ['**/*.test.ts'],
	collectCoverageFrom: [
		'src/**/*.ts',
		'index.ts',
		'!**/*.d.ts',
		'!**/node_modules/**',
		'!**/dist/**',
	],
	coverageDirectory: 'coverage',
	coverageReporters: ['text', 'lcov', 'json', 'html'],
	coverageThreshold: {
		global: {
			branches: 75,
			functions: 80,
			lines: 75,
			statements: 80,
		},
	},
	moduleFileExtensions: ['ts', 'js', 'json'],
	transform: {
		'^.+\\.ts$': ['ts-jest', {
			tsconfig: 'tsconfig.test.json',
		}],
	},
}
