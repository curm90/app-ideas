const userInput = document.querySelector('.user__input');
const form = document.querySelector('.form');
const answer = document.querySelector('.answer');

const regExp = /^[0-1]+$/g;

const bin2Dec = (number) => {
  return parseInt(number, 2);
};

const formValidation = (input) => {
  if (input.value.match(regExp) === null) {
    answer.textContent = 'Please enter either 0 or 1';
    return;
  }

  if (input.value.length > 8) {
    answer.textContent =
      'Binary number too long. Please enter a binary number up to 8 digits.';
  } else if (input.value.length === 0) {
    answer.textContent =
      'Please enter a binary number up to 8 digits long.';
  } else {
    answer.textContent = `${bin2Dec(input.value)}`;
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  formValidation(userInput);
});
