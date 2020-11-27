const { TestScheduler } = require('jest');
const capitalize = require('../lib/capitalize');

test('capitalizes string', () => {
  expect(capitalize('i love you')).toBe('I love you');
});
