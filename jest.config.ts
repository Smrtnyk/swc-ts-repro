export default {
    silent: true,
    rootDir: "./",
    transform: {
        "^.+\\.(t|j)sx?$": ["@swc/jest", {
            "sourceMaps": "inline",
            "module": {
                "strictMode": false
            },
            "jsc": {
                "baseUrl": "./",
                "target": "es2021",
                "parser": {
                    "syntax": "typescript"
                }
            }
        }]
    },
    transformIgnorePatterns: [
        "<rootDir>/node_modules/"
    ],
    testMatch: [
        "<rootDir>/**/*.spec.ts"
    ],
    moduleFileExtensions: ["ts", "js", "node", "json"],
    reporters: [
        "default"
    ],
    coverageDirectory: "test-results",
    coveragePathIgnorePatterns: [
        "/\\.spec\\.ts$/i",
        "/.*node_modules.*/"
    ],
    coverageReporters: [
        "lcov", "cobertura"
    ],
    coverageProvider: "v8",
    resetMocks: true,
    restoreMocks: true,
    resetModules: true,
    testEnvironmentOptions: {
        url: "http://localhost:3000/context.html"
    }
};
