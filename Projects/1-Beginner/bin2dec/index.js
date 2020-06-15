const userInput = document.querySelector('.user__input');
const form = document.querySelector('.form');
const answer = document.querySelector('.answer');

// Regular expression to check if input is either a 0 or 1
const regExp = /^[0-1]+$/g;

// Convert binary input to decimal
const bin2Dec = (number) => {
  return parseInt(number, 2);
};

// Basic form valiation
const formValidation = (input) => {
  // If input is anything but a 0 or 1 throw an error
  if (input.value.match(regExp) === null) {
    answer.textContent = 'Please enter either 0 or 1';
    return;
  }

  // if input length is greater than 8 throw error
  if (input.value.length > 8) {
    answer.textContent =
      'Binary number too long. Please enter a binary number up to 8 digits.';
    // if no input throw error
  } else if (input.value.length === 0) {
    answer.textContent =
      'Please enter a binary number up to 8 digits long.';
  } else {
    // if we get to here we have valid input and can return the decimal
    answer.textContent = `${bin2Dec(input.value)}`;
    // clear form after submission
    input.value = '';
  }
};

// Add event handler to form element and run input through form validation function
form.addEventListener('submit', (e) => {
  e.preventDefault();

  formValidation(userInput);
});
