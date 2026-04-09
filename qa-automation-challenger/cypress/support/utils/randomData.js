const firstNames = [
  'Lucas',
  'Noah',
  'Ethan',
  'Mason',
  'Liam',
];

const lastNames = [
  'Smith',
  'Johnson',
  'Brown',
  'Taylor',
];

const getRandomItem = (items) => {
  return items[Math.floor(Math.random() * items.length)];
};

const getRandomDigits = (length) => {
  return Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
};

export const generateRandomFirstName = () => {
  return getRandomItem(firstNames);
};

export const generateRandomLastName = () => {
  return getRandomItem(lastNames);
};

export const generateRandomEmail = (firstName, lastName) => {
  const normalizedFirstName = firstName.toLowerCase();
  const normalizedLastName = lastName.toLowerCase();
  const suffix = getRandomDigits(4);

  return `${normalizedFirstName}.${normalizedLastName}${suffix}@mail.com`;
};

export const generateRandomPhoneNumber = () => {
  return getRandomDigits(10);
};
