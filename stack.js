class stack{
    constructor(...args){
        this.items = args || [];
    }

    push(value){
        this.items.push(value)
    };

    pop(){
        if(!this.items.length) return 'Stack is empty';
        return this.items.pop();
    }

    isEmpty(){
        return this.items.length == 0 ? true : false;
    }

    peek(){
        if(this.isEmpty()) return 'Stack is empty';
        return this.items[this.items.length - 1];
    }
    
}

const stackValue = new stack(10, 20, 30, 40, 50, 60, 70);
const inputString = "({[]})";

function isValidParanthisis(string){
    let symbols = string.split('')
    let stackValue = new stack(...symbols);
    let stackItems = stackValue.items;

    let map = new Map();
    map.set('{', '}')
    map.set('(', ')')
    map.set('[', ']')

    let valid = true;

    for(let i = 0; i < stackItems.length; i++){
        let firstSymbol = stackItems[i];
        let lastSymbol = stackValue.peek();
        if(map.get(firstSymbol) == lastSymbol){
            stackValue.pop();
        } else {
            valid = false;
            break;
        }
    };
    return valid;
};

console.log(isValidParanthisis("()"));       // true
console.log(isValidParanthisis("({[]})"));   // true
console.log(isValidParanthisis("([)]"));     // false
console.log(isValidParanthisis("((()))")); 

