/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {


    let str = nums.join('')
    str = str.replace(/(val)/g,'')
    let ret = str.split('')


    return ret
    // return nums.join('').replace(/val/g,'').split('').length
};
let a = [3,2,2,3]
console.log(removeElement(a,3))