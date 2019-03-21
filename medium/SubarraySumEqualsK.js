/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    for(let i=0;i<nums.length;i++){
        let sum = 0;
        for(let j = i;j<nums.length;j++){
            sum += nums[j];
        }
        if(sum = k){
            return j-i+1;
        }
    }
};


const test = [1,2,3,4,2,3]
console.log(subarraySum(test,5));
