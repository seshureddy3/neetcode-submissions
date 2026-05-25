class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let mergedNums = [...nums1, ...nums2].sort((a, b) => a - b);

        let len = mergedNums.length;

        if(len % 2 === 0) {
            return (mergedNums[len / 2] + mergedNums[len / 2 - 1]) / 2.0;
        } else {
            return mergedNums[Math.floor(len / 2)];
        }
    }
}
