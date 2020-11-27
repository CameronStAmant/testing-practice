const { TestScheduler } = require('jest');
const caesarCipher = require('../lib/caesarCipher');

test('it returns the shifted character', () => {
  expect(caesarCipher('example', 1)).toBe('fybnqmf');
});

test('it loops around the alphabet forwards', () => {
  expect(caesarCipher('z', 1)).toBe('a');
});

test('it loops around the alphabet backwards', () => {
  expect(caesarCipher('a', -1)).toBe('z');
});

test('it loops around the alphabet forwards', () => {
  expect(caesarCipher('Z', 1)).toBe('A');
});

test('it loops around the alphabet backwards', () => {
  expect(caesarCipher('A', -1)).toBe('Z');
});

test("doesn't adjust non-alphbetical characters", () => {
  expect(caesarCipher('ab.c', 1)).toBe('bc.d');
});
