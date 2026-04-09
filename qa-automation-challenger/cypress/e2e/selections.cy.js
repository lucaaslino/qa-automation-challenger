import SelectionsPage from '../pageObjects/SelectionsPage';

describe('Selections', () => {
  beforeEach(() => {
    SelectionsPage.visit();
  });

  it('should select the requested values successfully', () => {
    const selectValueOption = 'Group 2, option 1';
    const selectOneOption = 'Mrs.';
    const oldStyleOption = 'Indigo';
    const multiSelectDropdownOptions = ['Blue', 'Black'];
    const standardMultiSelectValues = ['opel', 'audi'];

    SelectionsPage.selectValue(selectValueOption);
    SelectionsPage.selectOne(selectOneOption);
    SelectionsPage.selectOldStyle(oldStyleOption);
    SelectionsPage.selectMultiSelectDropdown(multiSelectDropdownOptions);
    SelectionsPage.selectStandardMultiSelect();

    SelectionsPage.shouldShowSelectedValue(selectValueOption);
    SelectionsPage.shouldShowSelectedOne(selectOneOption);
    SelectionsPage.shouldShowSelectedOldStyle(oldStyleOption);
    SelectionsPage.shouldShowSelectedMultiSelectDropdown(multiSelectDropdownOptions);
    SelectionsPage.shouldShowSelectedStandardMultiSelect(standardMultiSelectValues);
  });
});
