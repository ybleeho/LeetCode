/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const medium = Math.floor(nums.length/2)
    nums.sort()
    
    return nums[medium]
};
let test = [1,2,2,3,3,3,4,5,5,7,6,5,5,5,5,5,5,5,5,5,5]
console.log(majorityElement(test))