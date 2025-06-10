class ArrayInstance {
    constructor(){
        this.elements = {};
        this.length = 0;
    }

    push(value){
        this.elements[this.length] = value;
        this.length++;
        return this.elements;
    };

    removeByIndex(index){
        delete this.elements[index];
        for(let i = index; i , this.length; i++){
            this.elements[i] = this.elements[i+1]
        };
        this.length--;
    }

    pop(){
        let removedValue = this.elements[this.length -1];
        delete this.elements[this.length - 1];
        return removedValue;
    }

    unshift(value){
        for (let i = this.length; i > 0; i--){
             this.elements[i] = this.elements[i-1];
        }
        this.elements[0] = value;
    };

    shift(){
        for (let i = 0; i < this.length; i++){
            console.log('II', i)
            this.elements[i] = this.elements[i+1]
        }
        delete this.elements[this.length-1];
        this.length--;
    }
};

let arr = new ArrayInstance();
arr.push(2)
arr.push(3)
arr.push(4);
arr.shift();
console.log(arr)
