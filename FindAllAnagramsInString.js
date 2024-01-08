/**
 * Problem: https://leetcode.com/problems/find-all-anagrams-in-a-string/
 */

var findAnagrams = function (s, p) {
    const result = []
    const ts = p.split('').sort().toString()

    for (let i = 0; i < s.length; i++) {
        const sub = s.substring(i, i + p.length)
        const st = sub.split('').sort().toString()
        if (st === ts) {
            result.push(i)
        }
    }
    return result
}

// /**
//  * @param {string} p
//  * @return {Map}
//  */
// const getAnagramMap = (p) => {
//     const dict = new Map();
//     for (let c of p)
//         dict.set(c, dict.get(c) + 1 || 1);
//     return dict;
// }

// /**
//  * @param {string} s
//  * @param {string} p
//  * @return {number[]}
//  */
// var findAnagrams = function (s, p) {
//     let res = [];

//     const dict = getAnagramMap(p);
//     const lenS = s.length;
//     const lenP = p.length;
//     if (lenP > lenS) return res

//     for (let i = 0; i < lenS; i++) {
//         if (i <= lenS - lenP) {
//             let hasSubstring = true;
//             const dictS = getAnagramMap(s.substring(i, i + lenP));
//             if (dictS.size == dict.size) {
//                 for (const [key, value] of dictS) {
//                     if (!dict.has(key) || dict.get(key) != value) {
//                         hasSubstring = false;
//                         break;
//                     }
//                 }
//                 if (hasSubstring) res.push(i);
//             }
//         }
//         else break;
//     }
//     return res;
// };
