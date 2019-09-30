//有效数字
let isNumber = function (s) {
    let regexp = /^(\+|\-)?(([0-9]+\.?([0-9]+)?)|(\.[0-9]+))(e(\+|\-)?[0-9]+)?$/;
    s = s.trim();
    return regexp.test(s);
};