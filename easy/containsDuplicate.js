/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // if(nums.length <= 1)
    //     return false
    if(nums.length !== [...new Set(nums)].length)
        return true
    return false
};


console.log(containsDuplicate([1]))
