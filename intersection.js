let intersection = function(arr1,arr2) {
    if(!arr1.length||!arr2.length){
        return []
    }
    let result=[],cache={};
    arr1.map(item=>{
        if(arr2.includes(item)&&!cache[item]){
            cache[item] = item;
        }
    })
    for(let key in cache){
        result.push(cache[key])
    }
    return result
};

console.log(intersection([1,2,2,1],[2,3]))