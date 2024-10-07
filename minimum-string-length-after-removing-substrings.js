// https://leetcode.com/problems/minimum-string-length-after-removing-substrings/?envType=daily-question&envId=2024-10-07
/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    const s_c = [...s]
    let stack = []
    s_c.forEach(c => {
        p = peek(stack)
        p ? (`${p}${c}` === 'AB' || `${p}${c}` === 'CD' ? stack.pop() : stack.push(c)) : stack.push(c)
    });

    return stack.length
};

var peek = function(array) {
  if (array.length === 0) return '';
  return array[array.length - 1];
}
