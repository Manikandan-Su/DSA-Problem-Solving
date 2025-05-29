const inputArr = [1, 2, 3, 4, 5];
let k = 2;

for (let i = 0; i < k; i++){
    let temp = inputArr[inputArr.length - 1];
    inputArr.pop(inputArr.length - 1);
    inputArr.unshift(temp);
}

console.log('inputArr', inputArr);