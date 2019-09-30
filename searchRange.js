/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: [3,4]
 */
let searchRange = function (nums, target) {
    return [nums.indexOf(target),nums.lastIndexOf(target)]
};

console.log(searchRange([1,4], 4))
