/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    let counter = '';
    if (str[i] === str[i + 1]) {
      counter = 1;
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
          counter++;
        } else {
          break;
        }
      }
      result.push(`${counter}${str[i]}`);
      counter--;
    } else {
      result.push(str[i]);
    }
    i += +counter;
  }
  return result.join('');
}

module.exports = encodeLine;
