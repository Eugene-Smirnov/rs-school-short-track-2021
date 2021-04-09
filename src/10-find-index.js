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
  const start = 0;
  const end = array.length - 1;
  const mid = Math.floor((end - start) / 2);
  if (array[start] === index) return start;
  if (array[end] === index) return end;
  if (array[mid] === index) return mid;
  return array[mid] > index ? findIndex(array.slice(mid, end)) : findIndex(array.slice(start, mid));
}

module.exports = findIndex;
