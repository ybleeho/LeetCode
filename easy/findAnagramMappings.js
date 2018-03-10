/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const anagramMappings = function(a, b) {
    let result = []
    for(let i =0;i<a.length;i++){

        result.push(b.indexOf(a[i]))
    }
    return result
};
let a = [12, 28, 46, 32, 50]
let b = [50, 12, 32, 46, 28]
// console.log(b.indexOf(46))
console.log(anagramMappings(a,b))
