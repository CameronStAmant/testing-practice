const { TestScheduler } = require('jest');
const analyze = require('../lib/arrayAnalysis');

test('accepts an array of numbers', () => {
  expect(analyze([1, 2, 8, 3])).toEqual({
    max: 8,
    length: 4,
    min: 1,
    average: 3.5,
  });
});
