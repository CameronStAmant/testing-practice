const reverseString = (string) => {
  let backwardsString = '';
  for (let i = string.length; i >= 0; i--) {
    backwardsString += string.charAt(i);
  }
  return backwardsString;
};

module.exports = reverseString;
