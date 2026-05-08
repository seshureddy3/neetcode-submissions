class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length > s.length) return "";

        let freqMap = new Array(128).fill(0);
        for(let char of t) {
            freqMap[char.charCodeAt(0)]++;
        }

        let left = 0;
        let right = 0;
        let startIndex = 0;
        let minLen = Infinity;
        let need = t.length;

        while(right < s.length) {
            let rightChars = s.charCodeAt(right);

            if(freqMap[rightChars] > 0) {
                need--;
            }

            freqMap[rightChars]--;

            while(need === 0) {
                let currWindowLen = right - left + 1;

                if(currWindowLen < minLen) {
                    minLen = currWindowLen;
                    startIndex = left;
                }

                let leftChar = s.charCodeAt(left);

                freqMap[leftChar]++;

                if(freqMap[leftChar] > 0) {
                    need++;
                }

                left++;
            }

            right++;
        }

        return minLen === Infinity ? "" : s.substring(startIndex, startIndex + minLen);
    }
}
