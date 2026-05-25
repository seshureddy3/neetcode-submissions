class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
       let n = nums1.length, m = nums2.length;

       if(n > m) {
        return this.findMedianSortedArrays(nums2, nums1);
       } 

       let low = 0;
       let high = n;

       while(low <= high) {
        let mid1 = Math.floor((low + high) / 2);
        let mid2 = Math.floor((n + m + 1) / 2) - mid1;

        let left1 = (mid1 === 0) ? -Infinity : nums1[mid1 - 1];
        let right1 = (mid1 === n) ? Infinity : nums1[mid1];

        let left2 = (mid2 === 0) ? -Infinity : nums2[mid2 - 1];
        let right2 = (mid2 === m) ? Infinity : nums2[mid2];

        if(left1 <= right2 && left2 <= right1) {
            if((n + m) % 2 === 0) {
                return (Math.max(left1, left2) + Math.min(right1, right2)) / 2.0;
            } else {
                return Math.max(left1, left2);
            }
        }

        if(left1 > right2) {
            high = mid1 - 1;
        } else {
            low = mid1 + 1;
        }
       }

       return 0;
    }
}
