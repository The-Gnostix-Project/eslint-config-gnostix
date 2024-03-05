import {FlatCompat} from '@eslint/eslintrc';

// extension rule sets
import jsdoc from 'eslint-plugin-jsdoc';
import js from '@eslint/js';
// import "eslint-config-google"

// Required CommonJS Environment Variables
import path from 'path';
import {fileURLToPath} from 'url';
const compat = new FlatCompat({
  get baseDirectory() {
    return path.dirname(fileURLToPath(import.meta.url));
  },
  get resolvePluginsRelativeTo() {
    return path.dirname(fileURLToPath(import.meta.url));
  },
});

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  js.configs.recommended, // eslint:recommended
  jsdoc.configs['flat/recommended'], // plugin:jsdoc/recommended
  ...compat.extends('google'), // compat old "Google JS Style Guide" Config
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {
      'multiline-comment-style': 'error',
    },
  },
];
