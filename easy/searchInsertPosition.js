/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
    let i =0
    while(i<nums.length){
        if(target<=nums[i]){
            return i
        }
        i++
    }
    return nums.length
};

let a = [1,3,5,6]
console.log(searchInsert(a,0))