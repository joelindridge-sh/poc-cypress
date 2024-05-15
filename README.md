# poc-cypress

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

A POC for using [Cypress](https://docs.cypress.io/guides/overview/why-cypress).

## Installation

Requires [Node.js](https://nodejs.org/).

Dependencies can then be installed via the following command:

`npm i`

## VSCode

### Extensions

Install:

- Prettier - `esbenp.prettier-vscode` - code formatting

### Settings

Add the following file to the root of the project:

`.vscode/settings.json`

```JSON
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

## Run Example Tests

Run in an interactive UI mode:
`npx cypress open`

Run all - runs all of the tests in the command line:
`npx cypress run`

Run a tag - runs a subset of tests tagged in feature files:
`npx cypress run --spec cypress/tests/api/api.cy.ts`

Run headed - runs tests in the Cypress runner UI:
`npx cypress run --spec cypress/tests/ui/ui.cy.ts --headed`
