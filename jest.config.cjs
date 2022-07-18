module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    // setupFiles: ['./jest.setup.js']
    // collectCoverageFrom: ['src/*/.js','!src/*/archivo.js'],
    coveragePathIgnorePatterns: ["<rootDir>/src/components/NewsList/mockApiResponse.js"]
}