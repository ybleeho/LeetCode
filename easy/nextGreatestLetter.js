/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    letters.push(target)
    let a = 'a'.charCodeAt()
    letters.sort((a, b) => a.charCodeAt() - b.charCodeAt())

    if (letters.lastIndexOf(target) == letters.length - 1) {
        return letters[0]
    }
    let length = letters.length-1
    while (letters[length] != target) {
        --length
    }

    return letters[length + 1]
};
let test = ["c","f","j"]
console.log(nextGreatestLetter(test,'j'))