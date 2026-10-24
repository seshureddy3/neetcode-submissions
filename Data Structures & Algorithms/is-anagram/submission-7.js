class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length ) return false;

        let count = new Map();

        for(let i = 0; i < s.length; i++) {
            let sChar = s[i];
            let tChar = t[i];

            count.set(sChar, (count.get(sChar) || 0) + 1);
            count.set(tChar, (count.get(tChar) || 0) - 1);
        }

        for(let val of count.values()) if(val !== 0) return false;

        return true;
    }
}
