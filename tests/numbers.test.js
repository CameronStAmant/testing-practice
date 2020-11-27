const {
  addNumbers,
  subtractNumbers,
  divideNumbers,
  multiplyNumbers,
} = require('../lib/numbers');

test('adds two numbers', () => {
  expect(addNumbers(2, 5)).toBe(7);
});

test('subtracts two numbers', () => {
  expect(subtractNumbers(2, 5)).toBe(-3);
});

test('divides two numbers', () => {
  expect(divideNumbers(10, 5)).toBe(2);
});

test('multiplies two numbers', () => {
  expect(multiplyNumbers(2, 5)).toBe(10);
});
