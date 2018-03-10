/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let str = s.split(' ')
    let count = 0
    for(let i=0;i<str.length;i++){
        str[i]=str[i].replace(/\s/g,'')
        if(str[i].length!==0){
            count++
        }
    }
    return count
};