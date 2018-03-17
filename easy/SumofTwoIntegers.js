/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if(b===0)return a
    let carry = (a&b)<<1
    let sum = a^b
    return getSum(sum,carry)
};
console.log(getSum(2,3))


