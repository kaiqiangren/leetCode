/**
 * 最小栈
 */
class MinStack {
    constructor(){
        this.cache = []
        this.min = Infinity;
    }
    push(x){
        this.cache.push(x)
        if(x<this.min){
            this.min = x;
        }
    }
    pop(){
        let x = this.cache.pop()
        if (x === this.min) {
            this.min = Math.min(...this.cache);
        }
    }
    top(){
        if(!this.cache.length){
           return null
        }
        return this.cache[this.cache.length-1]
    }
    getMin(){
        return this.min
        // return Math.min.apply(this,this.cache)
    }
}