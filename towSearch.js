/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let search = function(nums, target) {
    return nums.findIndex((value, index, arr)=>{
        return value === target
    })
};

console.log(search([-1,0,3,5,9,12],9))