class SelectionsPage {
  elements = {
    selectValueInput: '#react-select-2-input',
    selectOneInput: '#react-select-3-input',
    oldStyleSelect: '#oldSelectMenu',
    multiSelectInput: '#react-select-4-input',
    standardMultiSelect: '#cars',
    selectValueContainer: '#withOptGroup',
    selectOneContainer: '#selectOne',
    multiSelectContainer: '#selectMenuContainer'
  };

  visit() {
    cy.openDemoQaPage('/select-menu');
  }

  selectValue(option) {
    cy.get(this.elements.selectValueContainer).click();
    cy.get(this.elements.selectValueInput).type(`${option}{enter}`);
  }

  selectOne(option) {
    cy.get(this.elements.selectOneContainer).click();
    cy.get(this.elements.selectOneInput).type(`${option}{enter}`);
  }

  selectOldStyle(option) {
    cy.get(this.elements.oldStyleSelect).select(option);
  }

  selectMultiSelectDropdown(options) {
    options.forEach((option) => {
      cy.get(this.elements.multiSelectContainer).click();
      cy.get(this.elements.multiSelectInput).type(`${option}{enter}`);
    });
  }

  selectStandardMultiSelect() {
    cy.get(this.elements.standardMultiSelect).select(['opel', 'audi']);
  }

  shouldShowSelectedValue(option) {
    cy.get(this.elements.selectValueContainer).should('contain', option);
  }

  shouldShowSelectedOne(option) {
    cy.get(this.elements.selectOneContainer).should('contain', option);
  }

  shouldShowSelectedOldStyle(option) {
    cy.get(this.elements.oldStyleSelect).find(':selected').should('have.text', option);
  }

  shouldShowSelectedMultiSelectDropdown(options) {
    options.forEach((option) => {
      cy.get(this.elements.multiSelectContainer).should('contain', option);
    });
  }

  shouldShowSelectedStandardMultiSelect(options) {
    cy.get(this.elements.standardMultiSelect).invoke('val').should('deep.equal', options);
  }
}

export default new SelectionsPage();
