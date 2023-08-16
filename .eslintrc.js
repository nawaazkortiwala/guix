module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: ["@typescript-eslint/parser"],
  parseOptions: {
    ecmaVersion: 2020,
    sourceTyoe: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "react",
    "prettier",
    "react-hooks",
    "simple-import-sort",
    "sonarjs",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:simple-import-sort/recommended",
    "plugin:sonarjs/recommended",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
