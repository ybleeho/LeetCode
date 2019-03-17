/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result  = [[]];

    for(let i=0;i<nums.length;i++){
        const preResultLength = result.length;
        for(let j=0;j<preResultLength;j++){
            result.push([...result[j],nums[i]]);
        }
    }
    return result;

};
console.log(subsets([1,2,3]));
