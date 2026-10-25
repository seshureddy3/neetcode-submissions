class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        let bucket = Array.from({length: nums.length + 1}, () => []);

        for(let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        for(let [num, freq] of map.entries()) {
           bucket[freq].push(num);
        }

        let res = [];

        for(let i = bucket.length - 1; i > 0; i--) {
            if(bucket[i].length > 0){
                res.push(...bucket[i]);
            }

            if(res.length === k) {
                return res;
            }
        }

        return res;
    }
}
