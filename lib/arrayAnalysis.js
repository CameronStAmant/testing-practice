const analyze = (array) => {
  let results = {};
  results.length = array.length;
  results.max = Math.max(...array);
  results.min = Math.min(...array);
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  results.average = sum / array.length;
  return results;
};

module.exports = analyze;
