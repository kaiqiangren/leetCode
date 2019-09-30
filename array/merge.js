// 给出一个区间的集合，请合并所有重叠的区间。
//
// 示例 1:
//
// 输入: [[1,3],[2,6],[8,10],[15,18]]
// 输出: [[1,6],[8,10],[15,18]]
// 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

const arr = [[1,4],[0,2],[3,5]];
//[[1,4],[0,2],[3,5]]
//[[1,3],[2,6],[8,10],[15,18]]
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let result =  intervals.sort((a,b)=>(a[0] - b[0]));
    for(let i=0;i<result.length-1;i++){
        if(result[i][1]>=result[i+1][0]){
            if(result[i][1]>=result[i+1][1]){
                result[i+1][1] = result[i][1]
            }
            result[i+1][0] = result[i][0]
            result[i] =null;
        }
    }
    return result.filter(item=>item)
};

console.log(merge(arr))  //leetCode最优解