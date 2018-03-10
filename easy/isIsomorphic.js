/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    for(let i =0;i<t.length;t++){
        let reg = '/'+s[i]+'/g'
        s.replace(reg,t[i])

    }
    console.log(s)
    console.log(t)
    if(s==t){
        return true
    }else {
        return false
    }
};
let s = 'abb'
let t = 'cdd'
console.log(isIsomorphic(s,t))