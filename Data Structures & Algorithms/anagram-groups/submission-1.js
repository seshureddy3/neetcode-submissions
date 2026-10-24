class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for(let str of strs) {
            let count = new Array(256).fill(0);

            for(let i = 0; i < str.length; i++) {
                const asciicode = str.charCodeAt(i);
                count[asciicode]++;
            }

            const key = count.join(',');

            if(!map.has(key)) {
                map.set(key, []);
            }

            map.get(key).push(str);
        }

        return Array.from(map.values());
    }
}
