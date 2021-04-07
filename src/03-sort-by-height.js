/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function compareNumeric(a, b) {
  let result;
  if (a > b) result = 1;
  if (a === b) result = 0;
  if (a < b) result = -1;
  return result;
}

function sortByHeight(arr) {
  const heights = arr.filter((item) => item !== -1).sort(compareNumeric);
  const result = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      result.push(-1);
    } else {
      result.push(heights[counter]);
      counter++;
    }
  }
  return result;
}

module.exports = sortByHeight;
