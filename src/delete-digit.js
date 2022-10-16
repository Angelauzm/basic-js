const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit(/* n */) {
  throw new NotImplementedError('Not implemented');
  let array = Array.from(n.toString(), Number)
  let array2 = array.sort().reverse()
  array2.pop()
  let num = +array2.join("")
  return num
}

module.exports = {
  deleteDigit
};
