/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function(num) {
    num = num.toString(2).toString().split('')
    for(let i in num){
         num[i]=='1'?num[i]='0':num[i]='1'
    }
    num.unshift('0')
    const result = parseInt(num.join(''),2)
    return result
};
const num = 5
console.log(findComplement(num))