class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let low = 1;
        let high = Math.max(...piles);
        let res = high;

        while(low <= high) {
            const k = Math.floor((low + high) / 2);
            let totalTime = 0;

            for(let pile of piles) {
                totalTime += Math.ceil(pile / k);
            }

            if(totalTime <= h) {
                res = k;
                high = k - 1;
            } else {
                low = k + 1;
            }
        }

        return res;
    }
}
