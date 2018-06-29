/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(Math.sqrt(num)===Math.floor(Math.sqrt(num))){
        return true;
    }
    return false;
};
let num = 15;
console.log(isPerfectSquare(num))