class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;

        const m = matrix.length;
        const n = matrix[0].length;
        let low = 0;
        let high = (m * n) - 1;
        
        while (low <= high) {
            let mid = Math.floor(low + (high - low) / 2);

            const row = Math.floor(mid / n);
            const col = mid % n;
            const midElement = matrix[row][col];

            if(midElement === target) return true;
            else if(target < midElement) high = mid - 1;
            else low = mid + 1;
        }

        return false;
    }
}
