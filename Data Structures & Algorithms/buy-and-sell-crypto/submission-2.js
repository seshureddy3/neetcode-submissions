class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
     let maxProfit = 0;
     let minBuy = prices[0];

     for(let price of prices) {
        let profit = price - minBuy;
        maxProfit = Math.max(profit, maxProfit);
        minBuy = Math.min(minBuy, price);
     }   

     return maxProfit;
    }
}
