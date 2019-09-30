var test = [1,2,1,2,3,1,4]

var removeDuplicates = function(nums) {
    let obj = {};
    for(let i = nums.length;i>=0;i--){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1;
        }else{
            nums.splice(i,1)
        }
    }
    return nums;
};


console.log(removeDuplicates(test))

