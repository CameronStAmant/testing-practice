const caesarCipher = (string, shift) => {
  let newString = '';
  let getShiftedCharCode = '';
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) <= 122 && string.charCodeAt(i) >= 97) {
      getShiftedCharCode = string.charCodeAt(i) + shift;
      if (getShiftedCharCode > 122) {
        while (getShiftedCharCode > 122) {
          getShiftedCharCode -= 26;
        }
      } else if (getShiftedCharCode < 97) {
        while (getShiftedCharCode < 97) {
          getShiftedCharCode += 26;
        }
      }
    } else if (string.charCodeAt(i) <= 90 && string.charCodeAt(i) >= 65) {
      getShiftedCharCode = string.charCodeAt(i) + shift;
      if (getShiftedCharCode > 90) {
        while (getShiftedCharCode > 90) {
          getShiftedCharCode -= 26;
        }
      } else if (getShiftedCharCode < 65) {
        while (getShiftedCharCode < 65) {
          getShiftedCharCode += 26;
        }
      }
    } else {
      getShiftedCharCode = string.charCodeAt(i);
    }
    newString += String.fromCharCode(getShiftedCharCode);
  }
  return newString;
};

module.exports = caesarCipher;
