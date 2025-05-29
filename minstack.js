class StackInstance {
    constructor(){
        this.stack = [];
        this.minStack = []
    }

    push(value){
        this.stack.push(value);
        let minValue = this.minStack.length == 0 ? value : Math.min(value, this.minStack[this.minStack.length - 1]);
        this.minStack.push(minValue)
    }

    pop(){
        this.stack.pop();
        this.minStack.pop()
    }

    getMin(){
        return this.minStack[this.minStack.length - 1]
    }
}

const getStack = new StackInstance();
getStack.push(10);
getStack.push(20);
getStack.push(30);
console.log('stack', getStack.getMin());
