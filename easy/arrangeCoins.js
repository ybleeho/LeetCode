/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let count=0
    let sum = 0
    while (sum<n){
        sum+=++count

    }
    if(sum==n){
        return count
    }else{
        return count-1
    }
};