class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let count = new Array(128).fill(0);


        for(let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i)]++;
            count[t.charCodeAt(i)]--;
        }

        return count.every((val) => val === 0);
    }
}
