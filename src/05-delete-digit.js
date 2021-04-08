/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
  arr.splice(0, 1);
  let maxN = +arr.join('');
  arr = n.toString().split('');
  for (let i = 1; i < arr.length; i++) {
    arr.splice(i, 1);
    const val = +arr.join('');
    if (maxN < val) maxN = val;
    arr = n.toString().split('');
  }
  return maxN;
}

module.exports = deleteDigit;
