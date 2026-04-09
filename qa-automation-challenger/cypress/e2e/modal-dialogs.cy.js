import ModalDialogsPage from '../pageObjects/ModalDialogsPage';

describe('Modal Dialogs', () => {
  beforeEach(() => {
    ModalDialogsPage.visit();
  });

  it('should open the small modal successfully', () => {
    ModalDialogsPage.openSmallModal();
    ModalDialogsPage.shouldShowSmallModal();
  });

  it('should open the large modal successfully', () => {
    ModalDialogsPage.openLargeModal();
    ModalDialogsPage.shouldShowLargeModal();
  });
});
