import FormsPage from '../pageObjects/FormsPage';
import {
  generateRandomEmail,
  generateRandomFirstName,
  generateRandomLastName,
  generateRandomPhoneNumber
} from '../support/utils/randomData';

describe('Forms', () => {
  beforeEach(() => {
    FormsPage.visit();
  });

  it('should submit the practice form with valid required data', () => {
    const firstName = generateRandomFirstName();
    const lastName = generateRandomLastName();
    const email = generateRandomEmail(firstName, lastName);
    const phoneNumber = generateRandomPhoneNumber();
    const formData = {
      firstName,
      lastName,
      email,
      subject: 'Computer Science',
      phoneNumber,
      picturePath: 'cypress/files/testfile.txt',
      address: 'QA Test Address',
      state: 'Haryana',
      city: 'Panipat'
    };

    FormsPage.fillForm(formData);
    FormsPage.submit();

    FormsPage.shouldShowSuccessModal();
    FormsPage.shouldShowSubmittedData(formData);
  });
});
