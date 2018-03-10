/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = function(moves) {
    let U=moves.match(/U/g)?moves.match(/U/g).length:0
    let D=moves.match(/D/g)?moves.match(/D/g).length:0
    let L=moves.match(/L/g)?moves.match(/L/g).length:0
    let R=moves.match(/R/g)?moves.match(/R/g).length:0
    console.log(L)

    if(U===D&&L===R)
        return true
    return false
};
let test = 'UD'
console.log(judgeCircle(test))