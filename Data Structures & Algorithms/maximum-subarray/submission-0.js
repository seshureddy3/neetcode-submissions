class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSoFar = nums[0];
        let currentMax = 0;

        for(let num of nums) {
            currentMax += num;

            if(currentMax > maxSoFar) {
                maxSoFar = currentMax;
            }

            if(currentMax < 0) {
                currentMax = 0;
            }
        }
        return maxSoFar;
    }
}
