class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;

        const rows = matrix.length;
        const cols = matrix[0].length;
        let low = 0;
        let high = (rows * cols) - 1;

        while (low <= high) {
            let mid = Math.floor(low + (high - low) / 2);

            const row = Math.floor(mid / cols);
            const col = mid % cols;
            const midElement = matrix[row][col];

            if(midElement === target) return true;
            else if(target < midElement) high = mid - 1;
            else low = mid + 1;
        }

        return false;
    }
}
