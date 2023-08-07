module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:mdx/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      files: "*.mdx",
      extends: "plugin:mdx/recommended",
    },
  ],
  settings: {
    "mdx/code-blocks": true,
    "mdx/language-mapper": {},
    react: {
      version: "18",
    },
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "react/jsx-no-undef": "off",
  },
};
