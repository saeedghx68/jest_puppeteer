module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
    babelOptions: {
      configFile: ".babelrc",
    },
  },
  extends: "eslint:recommended",
  plugins: ["jest"],
  globals: {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  rules: {
    "no-console": 1,
    indent: ["error", 2, { "ImportDeclaration": 2 }],
    "object-curly-spacing": ["error", "always"],
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  },
};
