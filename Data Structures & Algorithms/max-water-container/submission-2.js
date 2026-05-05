class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length - 1;
        let maxVol = 0;

        while(i < j) {
            let vol = (j - i) * Math.min(heights[i], heights[j]);
            if(vol > maxVol) maxVol = vol;
            if(heights[i] < heights[j]) i += 1;
            else j -= 1;
        }

        return maxVol;
    }
}
