Cypress.Commands.add('openDemoQaPage', (path = '/') => {
  cy.visit(path);
});
