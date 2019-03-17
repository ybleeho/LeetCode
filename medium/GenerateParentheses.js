/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    backtrack(res,"",0,0,n);
    return res;
};

var backtrack = function(result,str,open,close,n) {
    if(open ===n && close ===n){
        return result.push(str);
    }
    if(open<n)
        backtrack(result,str+'(',open+1,close,n);
    if(close<open)
        backtrack(result,str+')',open,close+1,n)
}
