/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if(x<0){
        return false
    }
    return parseInt(x.toString().split('').reverse().join(''),10)===x?true:false;

};
let a=321123
console.log(isPalindrome(a))