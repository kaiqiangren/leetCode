/**
 * @param {number[]} digits
 * @return {number[]}
 */
const arr = [9,9,9,9];
var plusOne = function(digits,incr = 1) {
    for(let i = digits.length - 1;i >= 0;i--){
        let sum = digits[i] + incr;
        digits[i] = sum % 10;
        incr = Math.floor(sum / 10)
    }
    if(incr > 0){
        digits.unshift(incr)
    }
    return digits;
};


console.log(plusOne(arr,1));
