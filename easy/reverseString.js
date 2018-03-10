/**
 * @param {string} s
 * @return {string}
 */
const reverseString = function(s) {
    return s.split('').reverse().join('')
};
let test = 'hello'
console.log(reverseString(test))