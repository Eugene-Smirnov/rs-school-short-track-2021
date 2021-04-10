/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function uniqueDNS(domain) {
  const result = [];
  const index = domain.lastIndexOf('.');
  let head;
  if (index !== -1) {
    result.push(domain.slice(index));
    head = domain.slice(0, index);
    if (head.lastIndexOf('.') !== -1) {
      result.push(...uniqueDNS(head));
    } else {
      result.push(`.${head}`);
    }
  }
  return result;
}
function uniteDNS(array) {
  const arr = array;
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i - 1] + arr[i];
  }
  return arr;
}
function getDNSStats(domains) {
  const result = {};
  const array = [];
  for (let i = 0; i < domains.length; i++) {
    array.push(...uniteDNS(uniqueDNS(domains[i])));
  }
  let set = new Set(array);
  set = Array.from(set.values());
  for (let i = 0; i < set.length; i++) {
    result[`${set[i]}`] = 0;
    for (let j = 0; j < array.length; j++) {
      if (set[i] === array[j]) result[`${set[i]}`]++;
    }
  }
  return result;
}

module.exports = getDNSStats;
