var moveZeroes = function(nums) {
    var len = nums.length;
    for (var i = 0; i<len; ++i){
        if (nums[i]===0){
            nums.splice(i,1);
            nums.push(0);
            --i;
            len--;
        }
    }};
const test = [0, 1, 0, 3, 12]

console.log(moveZeroes(test))






let a = [1,2,3,4]
a.splice(0,3,6,6,6,6,6)
console.log(a)