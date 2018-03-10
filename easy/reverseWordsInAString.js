/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    let words = s.split(' ')
    for(let i=0;i<words.length;i++){
        words[i] = words[i].split('').reverse().join('')
    }
    return words.join(' ')
};
let test = "Let's take LeetCode contest"
console.log(reverseWords(test))