/**
 * @param {number} n
 * @return {number}
 * 斐波那契数
 */
let fib = function(N) {
    let result = [0,1]
    if (N === 0){
        return 0
    } else if(N === 1){
        return 1
    } else {
        for(let i=2;i < N;i++){
            result[i] = result[i-1]+result[i-2]
        }
        return result[N-1]+result[N-2]
    }
};