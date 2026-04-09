## Cypress Web Automation

Web automation project with Cypress using Page Objects to organize navigation, actions, and validations.

### Technologies

- Cypress
- JavaScript
- Node.js

### Structure

- cypress/e2e
- cypress/fixtures
- cypress/pageObjects
- cypress/support
- cypress.config.js
- package.json

### How to run

```bash
npm install
```

```bash
npm run cy:open
```

```bash
npm run cy:run
```

### Test artifacts

- Screenshots are stored in `cypress/screenshots`
- Static files used by the tests are stored in `cypress/files`

### Test report

- The execution results can be viewed directly in the Cypress terminal output after running `npm run cy:run`
- When running with `npm run cy:open`, the execution status can be viewed in the Cypress runner interface
- Failure details and visual evidence can be reviewed in `cypress/screenshots`

### Scenarios

- Forms
- Modal Dialogs
- Selections
