class ModalDialogsPage {
  elements = {
    smallModalButton: '#showSmallModal',
    largeModalButton: '#showLargeModal',
    modalTitle: '.modal-title',
    modalBody: '.modal-body',
    closeSmallModalButton: '#closeSmallModal',
    closeLargeModalButton: '#closeLargeModal'
  };

  visit() {
    cy.openDemoQaPage('/modal-dialogs');
  }

  openSmallModal() {
    cy.get(this.elements.smallModalButton).click();
  }

  openLargeModal() {
    cy.get(this.elements.largeModalButton).click();
  }

  shouldShowSmallModal() {
    cy.get(this.elements.modalTitle)
      .should('be.visible')
      .and('have.text', 'Small Modal');

    cy.get(this.elements.modalBody)
      .should('be.visible')
      .and('contain', 'This is a small modal. It has very less content');
  }

  shouldShowLargeModal() {
    cy.get(this.elements.modalTitle)
      .should('be.visible')
      .and('have.text', 'Large Modal');

    cy.get(this.elements.modalBody)
      .should('be.visible')
      .and('contain', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
  }

}

export default new ModalDialogsPage();
