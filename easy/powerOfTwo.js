/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n==1)return true
    let binary = n.toString(2)
    let temp = binary.replace(/0/g,'')
    if(temp.length==1)return true
    return false
};
let test = 8;
console.log(isPowerOfTwo(test))