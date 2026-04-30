class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let res = 0;
        let currSum = 0;
        const prefixSum = new Map();
        prefixSum.set(0, 1);

        for(let num of nums) {
            currSum += num;
            let diff = currSum - k;
            res += prefixSum.get(diff) || 0;
            prefixSum.set(currSum, (prefixSum.get(currSum) || 0) + 1);
        }

        return res;
    }
}
