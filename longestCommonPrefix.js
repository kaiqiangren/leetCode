/**
 * @param {string[]} strs
 * @return {string}
 * 最长公共前缀
 */
let longestCommonPrefix = function(strs) {
    if(!strs.length){
        return "";
    }
    let result="";
    let first = strs[0];
    for(let i=0;i<first.length;i++){
        let flag = true;
        //第一项的每个字符
        let temp = first[i];
        strs.map((item,index)=>{
            if(item.charAt(i)!==temp){
                flag = false;
            }
        })
        if(!flag){
          break;
        }else{
            result += temp;
        }
    }
    return result;
};


console.log(longestCommonPrefix(["abca","abc"]))
