# Defects

## 1. Subjects field depends on autocomplete selection and does not behave like a regular text input

**Title**  
Subjects field requires selecting a suggestion and does not reliably accept arbitrary typed text.

**Steps to reproduce**

1. Open `https://demoqa.com/automation-practice-form`
2. Click the `Subjects` field
3. Type a value that is not part of the autocomplete suggestions, such as `QA Test`
4. Try to continue and submit the form without choosing one of the displayed options

**Expected result**  
The field should clearly restrict invalid values or provide validation feedback before form submission.

**Actual result**  
The field allows typing, but the value is only reliable when a suggestion is explicitly selected from the autocomplete list.

**Severity / Priority**  
Medium / Medium

**Rationale**  
This behavior can confuse users because the field looks editable like a standard input, but it actually depends on a predefined suggestion list.

**Supporting evidence**

- The test flow had to be updated to type `Computer Science` and click the autocomplete suggestion instead of using free text.
- The field behavior is different from a normal text input and depends on the suggestion dropdown to produce a valid selection.
