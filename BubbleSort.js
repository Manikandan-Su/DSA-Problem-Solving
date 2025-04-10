let inputArr = [64, 34, 25, 5, 22, 11, 90, 12];


for (let i = 0; i < inputArr.length; i++){
    for(let j = 0; j < inputArr.length - i -1; j++){
        if(inputArr[j] > inputArr[j + 1]){
            let temp = inputArr[j]
            inputArr[j] = inputArr[j + 1];
            inputArr[j + 1] = temp;
        }
    }
};

console.log('inputArr', inputArr)