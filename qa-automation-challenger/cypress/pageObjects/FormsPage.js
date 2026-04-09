class FormsPage {
  elements = {
    firstNameInput: '#firstName',
    lastNameInput: '#lastName',
    emailInput: '#userEmail',
    genderMaleLabel: 'label[for="gender-radio-1"]',
    dateOfBirthInput: '#dateOfBirthInput',
    subjectsInput: '#subjectsInput',
    sportsHobbyLabel: 'label[for="hobbies-checkbox-1"]',
    mobileInput: '#userNumber',
    pictureInput: '#uploadPicture',
    addressInput: '#currentAddress',
    stateDropdown: '#state',
    stateInput: '#react-select-3-input',
    cityDropdown: '#city',
    cityInput: '#react-select-4-input',
    submitButton: '#submit',
    successModalTitle: '#example-modal-sizes-title-lg',
    resultsTable: '.table-responsive'
  };

  visit() {
    cy.openDemoQaPage('/automation-practice-form');
  }

  fillFirstName(firstName) {
    cy.get(this.elements.firstNameInput).clear().type(firstName);
  }

  fillLastName(lastName) {
    cy.get(this.elements.lastNameInput).clear().type(lastName);
  }

  fillEmail(email) {
    cy.get(this.elements.emailInput).clear().type(email);
  }

  selectMaleGender() {
    cy.get(this.elements.genderMaleLabel).click();
  }

  selectDateOfBirth() {
    const currentDate = new Date();
    const targetDate = new Date(
      currentDate.getFullYear() - 16,
      currentDate.getMonth(),
      currentDate.getDate()
    );
    const targetDay = targetDate.getDate().toString();
    const targetMonth = targetDate.toLocaleString('en-US', { month: 'long' });
    const targetYear = targetDate.getFullYear().toString();
    const formattedDate = `${String(targetDate.getDate()).padStart(2, '0')} ${targetMonth},${targetYear}`;

    cy.get(this.elements.dateOfBirthInput).click();
    cy.get('.react-datepicker__year-select').select(targetYear);
    cy.get('.react-datepicker__month-select').select(targetMonth);
    cy.get(`.react-datepicker__day--0${targetDay.padStart(2, '0')}:not(.react-datepicker__day--outside-month)`).first().click();

    return formattedDate;
  }

  fillSubjects(subject) {
    cy.get(this.elements.subjectsInput).type(subject);
    cy.contains('.subjects-auto-complete__option', subject).click();
  }

  selectSportsHobby() {
    cy.get(this.elements.sportsHobbyLabel).click();
  }

  fillMobile(phoneNumber) {
    cy.get(this.elements.mobileInput).clear().type(phoneNumber);
  }

  uploadPicture(filePath) {
    cy.get(this.elements.pictureInput).selectFile(filePath, { force: true });
  }

  fillAddress(address) {
    cy.get(this.elements.addressInput).clear().type(address);
  }

  selectState(state) {
    cy.get(this.elements.stateDropdown).scrollIntoView().click();
    cy.get(this.elements.stateInput).type(`${state}{enter}`);
  }

  selectCity(city) {
    cy.get(this.elements.cityDropdown).click();
    cy.get(this.elements.cityInput).type(`${city}{enter}`);
  }

  submit() {
    cy.get(this.elements.submitButton).scrollIntoView().click();
  }

  fillForm(formData) {
    this.fillFirstName(formData.firstName);
    this.fillLastName(formData.lastName);
    this.fillEmail(formData.email);
    this.selectMaleGender();
    formData.dateOfBirth = this.selectDateOfBirth();
    this.fillSubjects(formData.subject);
    this.selectSportsHobby();
    this.fillMobile(formData.phoneNumber);
    this.uploadPicture(formData.picturePath);
    this.fillAddress(formData.address);
    this.selectState(formData.state);
    this.selectCity(formData.city);
  }

  shouldShowSuccessModal() {
    cy.get(this.elements.successModalTitle)
      .should('be.visible')
      .and('have.text', 'Thanks for submitting the form');
  }

  shouldShowSubmittedData(formData) {
    cy.get(this.elements.resultsTable).should('contain', formData.firstName);
    cy.get(this.elements.resultsTable).should('contain', formData.lastName);
    cy.get(this.elements.resultsTable).should('contain', formData.email);
    cy.get(this.elements.resultsTable).should('contain', formData.dateOfBirth);
    cy.get(this.elements.resultsTable).should('contain', formData.subject);
    cy.get(this.elements.resultsTable).should('contain', 'Sports');
    cy.get(this.elements.resultsTable).should('contain', formData.phoneNumber);
    cy.get(this.elements.resultsTable).should('contain', 'testfile.txt');
    cy.get(this.elements.resultsTable).should('contain', formData.address);
    cy.get(this.elements.resultsTable).should('contain', `${formData.state} ${formData.city}`);
  }
}

export default new FormsPage();
