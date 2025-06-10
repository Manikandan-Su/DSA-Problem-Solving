let inputArr = 'abbaca';
inputArr = inputArr.split("");

let stackArr = [];

for (let word of inputArr){
    if (!stackArr.length){
        stackArr.push(word);
    } else if(stackArr[stackArr.length - 1] == word) {
        stackArr.pop()
    } else {
        stackArr.push(word)
    }

};

console.log('stackArr', stackArr.join(""))