/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function(x, y) {
    return (x^y).toString(2).replace(/0/g,'').length

};
let x = 1,y = 4
console.log(hammingDistance(x,y))
