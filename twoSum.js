const arr = [3, 2, 4];

var twoSum = function (nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[target - nums[i]] >= 0)
            return [map[target - nums[i]], i];
        map[nums[i]] = i;
    }
};

console.log(twoSum(arr, 6))