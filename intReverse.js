let checkOverflow = (x)=>{
    if(x<=Math.pow(-2,31)||x>=Math.pow(2,31)-1){
        return false;
    }else{
        return true;
    }
}

let reverse = function(x) {
    if(Math.sign(x)===-1){
        x = String.prototype.substring.call(x,1);
        x = "-" + x.split("").reverse().join("");

    }else{
        x = x +'';
        x = x.split("").reverse().join("");
    }
    if(checkOverflow(x)){
        return x;
    }else{
        return 0;
    }
};

console.log(reverse(1534236469))