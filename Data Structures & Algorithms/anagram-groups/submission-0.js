class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};

        for(let str of strs) {
            let count = new Array(26).fill(0);

            for(let char of str) {
                count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }

            let keys = count.join(",");

            if(!res[keys]) {
                res[keys] = [];
            }

            res[keys].push(str);
        }

        return Object.values(res)
    }
}
