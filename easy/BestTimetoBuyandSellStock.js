/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0;
    for(let i=0;i<prices.length-1;i++){
        for(let j = i+1;j<prices.length;j++){
            temp = prices[j]-prices[i]
            if(temp>result){result=temp}
        }
    }
    return result
};