import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        process: "readonly",
        console: "readonly",
        describe: "readonly",
        it: "readonly"
      }
    },
    rules: {
      "no-unused-vars": ["error", { args: "none" }]
    }
  }
];
