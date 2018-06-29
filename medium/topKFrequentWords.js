/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let result = []
    let obj = {}
    let arr = []
    words.forEach(function (word) {
        if(!obj[word]){
            obj[word] = 1
        }else{
            obj[word]++
        }
    })
    for(key in obj){
        arr.push({key:key,value:obj[key]})
    }

    // arr.sort((a,b)=>b.value-a.value)
    arr.sort(function (a, b) {
        if(a.value>b.value){
            return -1;
        }else if(a.value<b.value){
            return 1;
        }else{
            return a.key.localeCompare(b.key)
        }
    })

    for(let i = 0;i<k;i++){
        result.push(arr[i].key)
    }

    return result
};
let words = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is","li"];
console.log(topKFrequent(words,5))