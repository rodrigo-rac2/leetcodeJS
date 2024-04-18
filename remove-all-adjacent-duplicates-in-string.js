// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = []
    for(let i = 0; i < s.length; i++) {
        el = s.charAt(i)
        last = stack.length
        if(stack.length == 0 || (stack[last - 1] != el)) {
            stack.push(el)
        } else {
            stack.pop()
        }
    }
    return stack.join("");
};
