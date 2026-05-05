class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let res = 0;

        while(left < right) {
            let area = (right - left) * Math.min(heights[left], heights[right]);
            if(area > res) res = area;
            if(heights[left] < heights[right]) left += 1;
            else right -= 1;
        }

        return res;
    }
}
