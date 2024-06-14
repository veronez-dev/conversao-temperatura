export default {
  files: ["**/*.js"],
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    globals: {
      "browser": "readonly",
      "node": "readonly",
      "__dirname": "readonly",
      "console": "readonly",
      "describe": "readonly",
      "it": "readonly"
    }
  },
  rules: {
    "no-unused-vars": "error",
    "no-undef": "error"
  }
};