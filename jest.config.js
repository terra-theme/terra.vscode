/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    roots: ["<rootDir>/src"],
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(tsx?|jsx?)$",
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    }
};
