/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    for(let i=0;i<s.length;i++){
        if(s[i]==='('||s[i]==='['||s[i]==='{'){
            stack.push(s[i]);
            console.log(s[i]);
        }else{
            if(s[i]===')'){
                 if(stack.pop()!=='(')return false;
            }else if(s[i]===']'){
                if(stack.pop()!=='[')return false;
            }else if(s[i]==='}'){
                if(stack.pop()!=='{')return false;
            }
        }
    }
    return true && !stack.length;

};

var isValid = function(s) {
    while(s.indexOf('()')!==-1||s.indexOf('[]')!==-1||s.indexOf('{}')!==-1){
        s = s.replace(/\(\)|\[\]|\{\}/g, "")
    }
    return s ? false : true
};


console.log(isValid('()[]{}'))
