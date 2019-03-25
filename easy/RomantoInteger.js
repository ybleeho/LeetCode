/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    const obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    if(s.length === 1){
        return obj[s[0]];
    }
    let sum = obj[s[s.length-1]];
    for(let i = s.length-2;i>=0;i--){
        if(obj[s[i]]<obj[s[i+1]]){
            sum -= obj[s[i]];
        }else{
            sum += obj[s[i]];
        }
    }
    return sum;

};

console.log(romanToInt("LVIII"));
