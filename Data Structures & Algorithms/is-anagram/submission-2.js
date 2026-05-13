class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let freq = new Array(26).fill(0);

        for(let ch of s)
            freq[ch.charCodeAt(0) - 97]++;

        for(let ch of t)
            freq[ch.charCodeAt(0) - 97]--;

        for(let count of freq) {
            if(count !== 0) {
                return false;
            }
        } 

        return true;
    }
}
