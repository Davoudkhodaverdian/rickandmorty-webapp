// jest.config.ts
export default {
   
    // Module file extensions for importing
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    preset: 'ts-jest',
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
  }