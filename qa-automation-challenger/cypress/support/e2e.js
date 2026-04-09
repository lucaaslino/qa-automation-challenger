import './commands';

afterEach(function () {
  if (this.currentTest.state === 'passed') {
    const screenshotName = this.currentTest.fullTitle().replace(/[/\\?%*:|"<>]/g, ' - ');
    const capture = this.currentTest.titlePath()[0] === 'Selections' ? 'fullPage' : 'viewport';
    cy.screenshot(screenshotName, { capture });
  }
});
