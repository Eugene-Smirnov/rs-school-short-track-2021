/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, index) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === index) return i;
  }
  return false;
}

module.exports = findIndex;
