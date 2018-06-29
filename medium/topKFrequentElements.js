/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let result = [];
    let obj = {};
    nums.forEach(function (num) {
        if(!obj[num]){
            obj[num] = 1
        }else{
            obj[num]+=1
        }
    })
    let arr = []
    for(key in obj){
        arr.push({key:key,value:obj[key]})
    }
    arr.sort(function (a,b) {
        return b.value-a.value;
    })
    console.log(arr)
    for(let i = 0;i<k;i++){
        result.push(+arr[i].key)
    }
    return result
};

let nums=[1,1,1,1,2,2,3,5]
console.log(topKFrequent(nums,2))