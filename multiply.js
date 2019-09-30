/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * 字符串相乘  js超出16位会丧失精度，最大能表示的数字为9007199254740992
 */
let multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0';
    }
    let arr = [];
    let len1 = num1.length;
    let len2 = num2.length;
    let i, j, overflow, num, index;
    for (i = len2 - 1; i >= 0; i--) {
        overflow = 0;
        for (j = len1 - 1; j >= 0; j--) {
            index = len1 + len2 - i - j - 2;
            while (index >= arr.length) {
                arr.push(0);
            }
            num = parseInt(num1[j] * num2[i] + overflow + arr[index]);
            overflow = parseInt(num / 10);
            arr[index] = num % 10;
        }
        if (overflow) {
            index = len1 + len2 - i - j - 2;
            while (index >= arr.length) {
                arr.push(0);
            }
            arr[index] += overflow;
        }
    }
    return arr.reverse().join('');
};


let multiply2 = function(num1, num2) {
    return String(BigInt(num1)*BigInt(num2));
};
console.log(multiply("123456781231231239", "987654312312321"));