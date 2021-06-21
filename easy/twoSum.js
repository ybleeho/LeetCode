/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {

    // for (let i = 0; i < numbers.length; i++) {
    //     for (let j = i + 1; j < numbers.length; j++) {
    //         if (numbers[i] + numbers[j] === target) {
    //             return [i + 1, j + 1]
    //         }
    //     }
    // }
    let left = 1;
    let right = numbers.length;

    while (true) {
        const sum = numbers[left - 1] + numbers[right - 1];
        if (sum === target) {
            break;
        } else if (sum < target) {
            left = left + 1;
        } else {
            right = right - 1;
        }
    }

    return [left, right];
};

console.log(twoSum([2, 7, 11, 15], 9))