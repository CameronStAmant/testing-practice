const reverseString = require('../lib/reverseString');

test('reverses string', () => {
  expect(reverseString('backwards')).toBe('sdrawkcab');
});
