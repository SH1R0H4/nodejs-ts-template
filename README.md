# Node.js TypeScript Template

[![Node.js](https://img.shields.io/badge/Node.js-5BAB47)](https://nodejs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-2F74C0)](https://www.typescriptlang.org/) [![ESLint](https://img.shields.io/badge/ESLint-7430BD)](https://eslint.org/) [![Prettier](https://img.shields.io/badge/Prettier-1A2B34)](https://prettier.io/) [![vite-node](https://img.shields.io/badge/vite--node-FDDB33)](https://github.com/vitest-dev/vitest)

## Getting Started

First, insall the dependencies:

```bash
yarn install
```

Then you can run your code:

```bash
yarn start
```

> The path of the program's entry file is [here](src/main.ts).

## What does it do?

This provides a project that has already been set up with the formatter.

### Installs modules

```bash
yarn init
...
yarn add typescript eslint prettier eslint-config-prettier eslint-plugin-prettier @types/node --dev
...
yarn add vite-node
```

The above steps have been taken.

### Setups configs

```text
.
+-- .vscode
|   +-- settings.json
+-- .eslintrc.json
+-- .markdownlint.json
+-- .prettierrc.json
+-- tsconfig.json
+-- vite.config.ts
```

For detailed configuration, please refer to the above files.

### Licensc

[MIT](LICENSE) © [SH1R0H4](https://github.com/SH1R0H4)
