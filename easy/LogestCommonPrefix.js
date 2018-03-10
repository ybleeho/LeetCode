/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    if(strs.length ==0)return ''
    if(strs.length ==1)return strs[0]


    let result = ""
    strs = strs.sort((a,b)=>a.length-b.length)



    for(let j=0;j<strs[0].length;j++){
        let char  =strs[0][j]

        let count=0
        for(let i=1;i<strs.length;i++){
            if(strs[i][j]===char){
                count++
            }else{
                return result
            }
            if(count===strs.length-1){
                result+=char
            }
        }
    }
    return result

};
let test = ['aca','cba']
console.log(longestCommonPrefix(test))