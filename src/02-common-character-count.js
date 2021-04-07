/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const length = s1.length < s2.length ? s1.length : s2.length;
  let short = s1.length === length ? s1 : s2;
  let long = s1 !== short ? s1 : s2;
  short = short.split('').sort();
  long = long.split('').sort();
  let count = 0;
  for (let i = 0; i < length; i++) {
    const index = long.indexOf(short[i]);
    if (index !== -1) {
      count++;
      long.splice(index, 1);
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
