/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set = new Set(nums1)
    return [...new Set(nums2.filter(x=>set.has(x)))]
};

let a = [1,2,3,2,1]
let b =[2,3]
console.log(intersection(a,b))


let test= [1,2,3,7,5,4,4,3]
console.log([...new Set(test)])// 数组去重