/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const res = [];
    const lenS = s.length;
    const lenP = p.length;

    if (lenP > lenS) return res;

    const dictP = new Map();
    for (let c of p) {
        dictP.set(c, (dictP.get(c) || 0) + 1);
    }

    const dictWindow = new Map();

    for (let i = 0; i < lenS; i++) {
        // Expand the window
        dictWindow.set(s[i], (dictWindow.get(s[i]) || 0) + 1);

        // Shrink the window if it exceeds the size of lenP
        if (i >= lenP - 1) {
            // Check if the window is an anagram of the pattern
            if (dictWindow.size === dictP.size) {
                let isAnagram = true;
                for (const [key, value] of dictP) {
                    if (dictWindow.get(key) !== value) {
                        isAnagram = false;
                        break;
                    }
                }
                if (isAnagram) res.push(i - lenP + 1);
            }

            // Move the window
            dictWindow.set(s[i - lenP + 1], dictWindow.get(s[i - lenP + 1]) - 1);
            if (dictWindow.get(s[i - lenP + 1]) === 0) {
                dictWindow.delete(s[i - lenP + 1]);
            }
        }
    }

    return res;
};
