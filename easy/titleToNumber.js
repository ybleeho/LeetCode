/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let flag = 1;
    let sum = 0;
    for(let i=s.length-1;i>=0;i--){
        const value = s[i].charCodeAt()-'A'.charCodeAt()+1;
        sum += value*flag
        flag *=26;
    }
    return sum;
};

console.log(titleToNumber('AB'))

