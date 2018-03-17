/**
 * @param {string} A
 * @param {string}
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    if(A.includes(B)){
        return 1;
    }
    let time = 1
    while(true){
        let tempStr = A.repeat(++time)
        if(tempStr.includes(B)){
            return time
        }else if(tempStr.length>B.length*2){
            return -1
        }
    }
};


let a= 'abcd'
let b ='cdabcdab'

console.log(repeatedStringMatch(a,b))
