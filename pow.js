let myPow = function(x, n) {
    if(0 === n) {return 1;}
    if(1 === n) {return x;}
    if(-1 === n) {return 1/x;}
    return Math.pow(x,n)
};